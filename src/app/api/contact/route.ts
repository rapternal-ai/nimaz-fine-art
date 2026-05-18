import { NextResponse } from 'next/server';

const requiredEnvVars = ['RESEND_API_KEY', 'CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL'] as const;

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
};

function isMissing(value: unknown) {
  return typeof value !== 'string' || value.trim().length === 0;
}

export async function POST(request: Request) {
  const missingEnvVars = requiredEnvVars.filter((key) => isMissing(process.env[key]));

  if (missingEnvVars.length > 0) {
    return NextResponse.json(
      { error: 'Contact form is not configured yet.' },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { firstName, lastName, email, phone, inquiryType, message } = payload;

  if (
    isMissing(firstName) ||
    isMissing(lastName) ||
    isMissing(email) ||
    isMissing(inquiryType) ||
    isMissing(message)
  ) {
    return NextResponse.json(
      { error: 'Please complete all required fields.' },
      { status: 400 }
    );
  }

  const fullName = `${firstName?.trim()} ${lastName?.trim()}`;
  const subject = `New Nimaz Fine Art inquiry from ${fullName}`;
  const body = [
    `Name: ${fullName}`,
    `Email: ${email?.trim()}`,
    `Phone: ${phone?.trim() || 'Not provided'}`,
    `Inquiry Type: ${inquiryType?.trim()}`,
    '',
    'Message:',
    message?.trim(),
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      reply_to: email?.trim(),
      subject,
      text: body,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Unable to send message right now.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

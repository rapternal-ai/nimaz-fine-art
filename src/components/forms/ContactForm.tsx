'use client';

import { FormEvent, useState } from 'react';
import Button from '@/components/ui/Button';

const initialStatus = {
  type: 'idle' as 'idle' | 'success' | 'error',
  message: '',
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(initialStatus);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialStatus);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      inquiryType: formData.get('inquiryType'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send message right now.');
      }

      form.reset();
      setStatus({
        type: 'success',
        message: 'Thank you. Your message has been sent.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Unable to send message right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="form-input"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="form-label">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-foreground mb-2">
          Type of Inquiry *
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
        >
          <option value="">Select an option</option>
          <option value="commission">Commission Inquiry</option>
          <option value="workshop">Workshop Information</option>
          <option value="lecture">Lecture Booking</option>
          <option value="purchase">Purchase Existing Work</option>
          <option value="press">Press & Media</option>
          <option value="general">General Question</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell us about your project, question, or how we can help you..."
          className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent resize-vertical"
        ></textarea>
      </div>

      {status.message && (
        <p className={status.type === 'success' ? 'text-green-700' : 'text-red-700'}>
          {status.message}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;

import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Exhibitions & Events | Nimaz Fine Art',
  description: 'Explore upcoming events, past exhibitions, and highlights from Nimaz Fine Art.',
};

export default function ExhibitionsEventsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-black mb-8">
              Exhibitions & Events
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-constrained">
              Highlights, upcoming opportunities to experience the work in person, and a record of where the art has traveled.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '3rem' }}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                  Current Events
                </h2>
                <div className="space-y-3 text-lg text-gray-600 leading-relaxed">
                  <Link
                    href="https://www.connecticutpublicgardens.org/programs/yr4-leather"
                    className="event-link block text-black hover:text-gray-600 transition-colors border-b border-gray-300 hover:border-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Year 4 Leather Collaborative Mural Program
                  </Link>
                  <p className="text-base text-gray-500">
                    November 2025 - May 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                  Past Exhibitions
                </h2>
                <div className="space-y-3 text-lg text-gray-600 leading-relaxed">
                  <Link
                    href="https://www.givecampus.com/schools/QuinnipiacUniversity/events/in-conversation-with-winfred-rembert-jr"
                    className="event-link block text-black hover:text-gray-600 transition-colors border-b border-gray-300 hover:border-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    In Conversation with Winfred Rembert Jr. at Quinnipiac University
                  </Link>
                  <Link
                    href="https://www.hauserwirth.com/news/winfred-remberts-exhibition-inspires-collaboration-with-AHJN/"
                    className="event-link block text-black hover:text-gray-600 transition-colors border-b border-gray-300 hover:border-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Winfred Rembert Exhibition Inspires Collaboration with Art for Healing Justice Network
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                  Event Inquiries
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Interested in booking a talk, hosting an exhibition, or partnering on a community program?
                </p>
                <Link href="/contact" className="inline-block">
                  <Button size="lg">Request Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

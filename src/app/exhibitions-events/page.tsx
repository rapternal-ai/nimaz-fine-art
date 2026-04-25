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
                  Upcoming Events
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-constrained">
                  Updates coming soon. Contact us if you’d like to host an event, program, or exhibition.
                </p>
                <Link href="/contact" className="inline-block">
                  <Button variant="outline" size="lg">Contact Us</Button>
                </Link>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                  Whitney Center Show
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-constrained">
                  Details will be added here. If you have dates, location info, and a short summary, send it over and I’ll format it.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                  Past Exhibitions
                </h2>
                <div className="space-y-3 text-lg text-gray-600 leading-relaxed">
                  <p>Coming soon.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                  Event Inquiries
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-constrained">
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

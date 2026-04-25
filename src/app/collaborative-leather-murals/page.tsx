import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Collaborative Leather Murals | Nimaz Fine Art',
  description: 'Transform your community into artists. Create a lasting work of art—together.',
};

export default function CollaborativeLeatherMuralsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-black mb-8">
              Collaborative Leather Murals
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-constrained">
              Transform your community into artists.
              <br />
              Create a lasting work of art—together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="inline-block">
                <Button size="lg">Book a Program</Button>
              </Link>
              <Link href="/contact" className="inline-block">
                <Button variant="outline" size="lg">Request Proposal</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '3rem' }}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                What It Is
              </h2>
              <div className="space-y-3 text-lg text-gray-600 leading-relaxed">
                <p>Groups learn leather art techniques through guided instruction.</p>
                <p>Each participant contributes a panel or component.</p>
                <p>The finished work becomes a permanent, display-ready mural.</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                Who It’s For
              </h2>
              <div className="space-y-2 text-lg text-gray-600 leading-relaxed">
                <p>Schools</p>
                <p>Senior communities (Whitney Center!)</p>
                <p>Corporate teams</p>
                <p>Community organizations</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                What They Experience
              </h2>
              <div className="space-y-2 text-lg text-gray-600 leading-relaxed">
                <p>Hands-on leather art instruction</p>
                <p>Storytelling through art</p>
                <p>Group collaboration</p>
                <p>Cultural and historical connection</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                The Outcome
              </h2>
              <div className="space-y-2 text-lg text-gray-600 leading-relaxed">
                <p>A finished leather mural</p>
                <p>Display-ready</p>
                <p>A shared legacy piece</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                Visual Section
              </h2>
              <div className="bg-gray-50 border border-gray-200 p-8 text-center">
                <p className="text-lg text-gray-600 leading-relaxed text-constrained">
                  Photos and mockups coming soon.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                Program Options
              </h2>
              <div className="space-y-2 text-lg text-gray-600 leading-relaxed">
                <p>Half-day workshop</p>
                <p>Multi-day residency</p>
                <p>Large-scale installation</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                Pricing
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed text-constrained">
                Programs are customized based on group size, scope, and duration.
              </p>

              <div className="pt-4">
                <Link href="/contact" className="inline-block">
                  <Button size="lg">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft-bg">
        <div className="container">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6 heading-spacing-top">
              Ready to Build a Mural Together?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-constrained">
              Tell us about your group, timeline, and goals—and we’ll recommend the best format.
            </p>
            <Link href="/contact" className="inline-block">
              <Button size="lg">Book a Program</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

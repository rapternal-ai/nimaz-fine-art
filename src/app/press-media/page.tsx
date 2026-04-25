import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Press & Media | Nimaz Fine Art',
  description: 'Press releases, articles, and media highlights featuring Nimaz Fine Art.',
};

export default function PressMediaPage() {
  return (
    <div className="pt-24">
      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-black mb-8">
              Press & Media
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-constrained">
              Press highlights, articles, and releases. A downloadable media kit can be added when ready.
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
                  Press Release
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-constrained">
                  Coming soon.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                  Articles & Features
                </h2>
                <div className="space-y-3 text-lg text-gray-600 leading-relaxed">
                  <p>Coming soon.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                  Auction Highlights
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-constrained">
                  Coming soon.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-black heading-spacing-top">
                  Media Requests
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-constrained">
                  For interviews, images, and additional context, please contact us.
                </p>
                <Link href="/contact" className="inline-block">
                  <Button size="lg">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 w-full text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-black mb-6 heading-spacing-top">
              Media Kit
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-constrained">
              Downloadable press assets (logos, artist bios, and high-resolution images) can be added here when ready.
            </p>
            <Link href="/contact" className="inline-block">
              <Button variant="outline" size="lg">Request Media Kit</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

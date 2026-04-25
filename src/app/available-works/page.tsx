import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { galleryArtworks } from '@/data/galleryArtworks';

export const metadata: Metadata = {
  title: 'Available Works | Nimaz Fine Art',
  description: 'Browse works currently available for acquisition. Contact us for pricing and availability.',
};

export default function AvailableWorksPage() {
  const availableWorks = galleryArtworks.filter((work) => work.available);

  return (
    <div className="pt-24">
      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-black mb-8">
              Available Works
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-constrained">
              Works listed here are currently marked as available. For pricing, placement, and shipping details,
              please reach out.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          {availableWorks.length === 0 ? (
            <div className="w-full text-center">
              <h2 className="text-2xl md:text-3xl font-serif text-black mb-6 heading-spacing-top">
                Availability Updates Coming Soon
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-constrained">
                We’re currently finalizing a list of works available for acquisition. In the meantime, contact us
                and we’ll share current availability.
              </p>
              <Link href="/contact" className="inline-block">
                <Button size="lg">Contact Us</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
              {availableWorks.map((artwork) => (
                <div key={artwork.id} className="group">
                  <div className="space-y-4">
                    <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative">
                      <Image
                        src={artwork.image}
                        alt={artwork.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-xs font-medium text-black">
                        Available
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-serif text-black">
                        {artwork.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {artwork.artist}, {artwork.year}
                      </p>
                      <p className="text-xs text-gray-500">
                        {artwork.medium}
                      </p>
                      <p className="text-xs text-gray-500">
                        {artwork.dimensions}
                      </p>
                      <Link href="/contact" className="inline-block" aria-label={`Inquire about ${artwork.title}`}>
                        <Button variant="outline" size="sm">Inquire</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

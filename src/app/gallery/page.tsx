import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { galleryArtworks } from '@/data/galleryArtworks';

export const metadata: Metadata = {
  title: 'Gallery | Nimaz Fine Art',
  description: 'Explore the complete collection of leather artworks from Nimaz Fine Art, featuring pieces by Winfred Sr, Winfred Jr, and Nima. Discover the stories told through carved and dyed leather.',
};

const categories = [
  { id: 'all', label: 'All Works' },
  { id: 'narrative', label: 'Narrative' },
  { id: 'contemporary', label: 'Contemporary' },
  { id: 'mixed-media', label: 'Mixed Media' }
];

export default function GalleryPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-8">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-constrained">
              Explore our complete collection of leather artworks, where traditional craftsmanship 
              meets contemporary storytelling across three generations of artists.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="bg-gray-50 border-y border-gray-200" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors border-b border-transparent hover:border-black"
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
            {galleryArtworks.map((artwork) => (
              <div key={artwork.id} className="group cursor-pointer">
                <div className="space-y-4">
                  {/* Image */}
                  <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    
                    {/* Availability Badge */}
                    {artwork.available && (
                      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-xs font-medium text-black">
                        Available
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-black group-hover:text-gray-600 transition-colors">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-soft-bg">
        <div className="container">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6 heading-spacing-top">
              Interested in Acquiring a Piece?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-constrained">
              Many of our works are available for purchase, and we also accept commissions 
              for custom pieces. Contact us to discuss availability and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="inline-block">
                <Button size="lg">
                  Inquire About Availability
                </Button>
              </Link>
              <Link href="/commissions" className="inline-block">
                <Button variant="outline" size="lg">
                  Commission Custom Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

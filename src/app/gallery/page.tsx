import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery | Nimaz Fine Art',
  description: 'Explore the complete collection of leather artworks from Nimaz Fine Art, featuring pieces by Winfred Sr, Winfred Jr, and Nima. Discover the stories told through carved and dyed leather.',
};

const artworks = [
  {
    id: 1,
    title: 'Chain Gang',
    artist: 'Winfred Sr',
    year: '2008',
    medium: 'Carved and dyed leather',
    dimensions: '30" x 40"',
    image: '/images/artists/winfred_sr/chain_gang_2008.webp',
    category: 'narrative',
    available: false
  },
  {
    id: 2,
    title: 'Chain Gang Picking Cotton',
    artist: 'Winfred Sr',
    year: '2011',
    medium: 'Carved and dyed leather',
    dimensions: '36" x 48"',
    image: '/images/artists/winfred_sr/chain_gang_picking_cotton_2011.webp',
    category: 'narrative',
    available: false
  },
  {
    id: 3,
    title: 'All Me 2',
    artist: 'Winfred Sr',
    year: '2005',
    medium: 'Carved and dyed leather',
    dimensions: '24" x 36"',
    image: '/images/artists/winfred_sr/All_Me_2_2005.webp',
    category: 'portrait',
    available: false
  },
  {
    id: 4,
    title: 'Angry Inmates',
    artist: 'Winfred Sr',
    year: '2007',
    medium: 'Carved and dyed leather',
    dimensions: '28" x 42"',
    image: '/images/artists/winfred_sr/angry_inmates_2007.webp',
    category: 'narrative',
    available: false
  },
  {
    id: 5,
    title: 'The Deputy',
    artist: 'Winfred Sr',
    year: '2001',
    medium: 'Carved and dyed leather',
    dimensions: '26" x 38"',
    image: '/images/artists/winfred_sr/the_deputy_2001.webp',
    category: 'portrait',
    available: false
  },
  {
    id: 7,
    title: 'Looking for My Mother',
    artist: 'Winfred Sr',
    year: '2019',
    medium: 'Carved and dyed leather',
    dimensions: '24" x 32"',
    image: '/images/artists/winfred_sr/Looking_for_My_Mother_2019.webp',
    category: 'narrative',
    available: false
  },
  {
    id: 6,
    title: 'Urban Stories',
    artist: 'Winfred Jr',
    year: '2022',
    medium: 'Carved and dyed leather',
    dimensions: '28" x 42"',
    image: '/images/works/urban-stories.jpg',
    category: 'contemporary',
    available: true
  },
  {
    id: 3,
    title: 'Contemporary Voices',
    artist: 'Nima',
    year: '2023',
    medium: 'Carved and dyed leather with mixed media',
    dimensions: '36" x 24"',
    image: '/images/works/contemporary-voices.jpg',
    category: 'mixed-media',
    available: true
  },
  {
    id: 4,
    title: 'Heritage Path',
    artist: 'Winfred Sr',
    year: '2019',
    medium: 'Carved and dyed leather',
    dimensions: '30" x 40"',
    image: '/images/works/heritage-path.jpg',
    category: 'narrative',
    available: false
  },
  {
    id: 5,
    title: 'New Narratives',
    artist: 'Winfred Jr',
    year: '2021',
    medium: 'Carved and dyed leather',
    dimensions: '32" x 48"',
    image: '/images/works/new-narratives.jpg',
    category: 'contemporary',
    available: true
  },
  {
    id: 6,
    title: 'Future Traditions',
    artist: 'Nima',
    year: '2023',
    medium: 'Carved and dyed leather',
    dimensions: '40" x 30"',
    image: '/images/works/future-traditions.jpg',
    category: 'contemporary',
    available: true
  },
  {
    id: 7,
    title: 'Cultural Echoes',
    artist: 'Winfred Sr',
    year: '2018',
    medium: 'Carved and dyed leather',
    dimensions: '26" x 38"',
    image: '/images/works/cultural-echoes.jpg',
    category: 'narrative',
    available: false
  },
  {
    id: 8,
    title: 'Modern Reflections',
    artist: 'Winfred Jr',
    year: '2023',
    medium: 'Carved and dyed leather',
    dimensions: '34" x 44"',
    image: '/images/works/modern-reflections.jpg',
    category: 'contemporary',
    available: true
  },
  {
    id: 9,
    title: 'Experimental Forms',
    artist: 'Nima',
    year: '2023',
    medium: 'Carved leather with digital elements',
    dimensions: '38" x 28"',
    image: '/images/works/experimental-forms.jpg',
    category: 'mixed-media',
    available: true
  }
];

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
            {artworks.map((artwork) => (
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
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Interested in Acquiring a Piece?
            </h2>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Many of our works are available for purchase, and we also accept commissions 
              for custom pieces. Contact us to discuss availability and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background hover:bg-secondary transition-colors font-medium"
              >
                Inquire About Availability
              </Link>
              <Link
                href="/commissions"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-medium"
              >
                Commission Custom Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

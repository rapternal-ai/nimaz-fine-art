import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Artists | Nimaz Fine Art',
  description: 'Meet the artists of Nimaz Fine Art: Winfred Sr, Winfred Jr, and Nima. Each brings their unique perspective to the continuing story of leather as fine art.',
};

const artists = [
  {
    name: 'Winfred Sr',
    descriptor: 'Legacy',
    shortBio: 'Winfred Rembert Sr. (November 22, 1945-March 31, 2021) was an internationally recognized artist known for his intricately tooled and dyed leather works depicting scenes from his life, particularly his experiences growing up in the Jim Crow South.',
    slug: 'winfred-sr',
    image: '/images/artists/winfred_sr/portrait_winfred_sr.jpg'
  },
  {
    name: 'Winfred Jr',
    descriptor: 'Continuation',
    shortBio: 'Winfred Rembert Jr. (b. February 1976) continues the family’s artistic tradition through both visual art and educational programming, sharing the legacy and techniques passed down from his father while inspiring new audiences.',
    slug: 'winfred-jr',
    image: '/images/artists/winfred_jr/portrait_winfred_jr.jpg'
  },
  {
    name: 'Nima',
    descriptor: 'Evolution',
    shortBio: 'Nima Rembert (b. December 2017) is an emerging young artist whose work reflects imagination, individuality, and the early spark of a powerful creative voice. At just 8 years old, this exhibition marks her first public showcase.',
    slug: 'nima',
    image: '/images/artists/nima/nima_portrait1.JPG'
  }
];

export default function ArtistsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-8">
              The Artists
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-constrained">
              Three generations of artists united by a shared commitment to storytelling through leather, 
              each bringing their unique voice to this extraordinary medium.
            </p>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="bg-gray-50" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '3rem' }}>
            {artists.map((artist) => (
              <Link
                key={artist.slug}
                href={`/artists/${artist.slug}`}
                className="group block"
              >
                <div className="space-y-6">
                  {/* Image */}
                  <div className="aspect-[4/5] relative bg-gray-100 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                        {artist.descriptor}
                      </p>
                      <h2 className="text-2xl font-serif text-black mb-4 group-hover:text-gray-600 transition-colors">
                        {artist.name}
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {artist.shortBio}
                    </p>

                    <div className="pt-2">
                      <span className="text-black hover:text-gray-600 transition-colors border-b border-black hover:border-gray-600 pb-1">
                        View Profile →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6 heading-spacing-top">
              Commission Work from Our Artists
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-constrained">
              Each artist brings their unique perspective and expertise to custom commissions. 
              Work directly with them to create a piece that tells your story.
            </p>
            <Link href="/commissions">
              <Button size="lg">
                Start a Commission
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface Artist {
  name: string;
  descriptor: string;
  shortBio: string;
  fullBio: string;
  slug: string;
  image: string;
  featuredWorks: Array<{
    id: number;
    title: string;
    year: string;
    medium: string;
    dimensions: string;
    image: string;
    description: string;
  }>;
  exhibitions?: string[];
  press?: string[];
}

const artists: Record<string, Artist> = {
  'winfred-sr': {
    name: 'Winfred Sr',
    descriptor: 'Legacy',
    shortBio: 'The foundational artist whose pioneering work in leather carving established the techniques and narrative traditions that define our studio today.',
    fullBio: 'Winfred Rembert Sr. is the pioneering artist whose groundbreaking work in leather carving established the foundation of what would become Nimaz Fine Art. His innovative approach to storytelling through leather has created a unique artistic language that combines traditional craftsmanship with powerful narrative expression. Through decades of dedicated practice, he developed the techniques and aesthetic principles that continue to guide our studio today. His work serves as both artistic achievement and cultural documentation, preserving stories and experiences through the enduring medium of leather.',
    slug: 'winfred-sr',
    image: '/images/artists/winfred_sr/portrait_winfred_sr.jpg',
    featuredWorks: [
      {
        id: 1,
        title: 'Chain Gang',
        year: '2008',
        medium: 'Carved and dyed leather',
        dimensions: '30" x 40"',
        image: '/images/artists/winfred_sr/chain_gang_2008.webp',
        description: 'A powerful depiction of chain gang life, showcasing the harsh realities and human dignity within the prison labor system.'
      },
      {
        id: 2,
        title: 'Chain Gang Picking Cotton',
        year: '2011',
        medium: 'Carved and dyed leather',
        dimensions: '36" x 48"',
        image: '/images/artists/winfred_sr/chain_gang_picking_cotton_2011.webp',
        description: 'An evocative scene of prisoners working in cotton fields, capturing both the brutality of forced labor and the resilience of the human spirit.'
      },
      {
        id: 3,
        title: 'All Me 2',
        year: '2005',
        medium: 'Carved and dyed leather',
        dimensions: '24" x 36"',
        image: '/images/artists/winfred_sr/All_Me_2_2005.webp',
        description: 'A deeply personal self-portrait exploring identity, experience, and the complexity of individual narrative.'
      },
      {
        id: 4,
        title: 'Angry Inmates',
        year: '2007',
        medium: 'Carved and dyed leather',
        dimensions: '28" x 42"',
        image: '/images/artists/winfred_sr/angry_inmates_2007.webp',
        description: 'A raw and honest portrayal of prison life, capturing the tension and emotion within the correctional system.'
      },
      {
        id: 5,
        title: 'The Deputy',
        year: '2001',
        medium: 'Carved and dyed leather',
        dimensions: '26" x 38"',
        image: '/images/artists/winfred_sr/the_deputy_2001.webp',
        description: 'A character study examining authority and power dynamics within the prison system from multiple perspectives.'
      },
      {
        id: 6,
        title: 'Looking for My Mother',
        year: '2019',
        medium: 'Carved and dyed leather',
        dimensions: '24" x 32"',
        image: '/images/artists/winfred_sr/Looking_for_My_Mother_2019.webp',
        description: 'A deeply personal and emotional piece exploring themes of family, loss, and the search for connection across time and circumstance.'
      }
    ],
    exhibitions: ['Solo Exhibition, Cultural Arts Center (2021)', 'Group Show, Fine Arts Museum (2020)'],
    press: ['Featured in Art Monthly Magazine', 'Profile in Southern Living']
  },
  'winfred-jr': {
    name: 'Winfred Jr',
    descriptor: 'Continuation',
    shortBio: 'Building upon his father\'s legacy, Winfred Jr expands the artistic language while honoring the core principles of storytelling through leather.',
    fullBio: 'Winfred Rembert Jr. represents the continuation and evolution of the artistic traditions established by his father. While deeply rooted in the foundational techniques and storytelling principles of the studio, he brings his own contemporary perspective and innovative approaches to the medium. His work explores themes of generational connection, cultural continuity, and personal expression within the framework of traditional leather artistry. Through his art, he bridges the gap between established tradition and contemporary relevance, ensuring that the craft continues to speak to new audiences while maintaining its cultural authenticity.',
    slug: 'winfred-jr',
    image: '/images/artists/winfred_jr/portrait_winfred_jr.jpg',
    featuredWorks: [
      {
        id: 3,
        title: 'Rhythm of the Cottonfield',
        year: '2023',
        medium: 'Carved and dyed leather',
        dimensions: '48" x 60"',
        image: '/images/works/rhythm-cottonfield.jpg',
        description: 'A large-scale, visually commanding work depicting collective labor through rhythm and motion. The composition transforms repetition into movement, emphasizing shared experience over individual identity.'
      },
      {
        id: 4,
        title: 'Beyond The Sunset',
        year: '2022',
        medium: 'Carved and dyed leather',
        dimensions: '36" x 48"',
        image: '/images/works/beyond-sunset.jpg',
        description: 'Set against the cotton fields of Cuthbert, Georgia, this contemplative landscape reflects on place, memory, and inheritance. Anchored by the town\'s water tower and featuring Winfred Rembert Sr.'
      },
      {
        id: 5,
        title: 'Big Grits',
        year: '2023',
        medium: 'Carved and dyed leather',
        dimensions: '42" x 54"',
        image: '/images/works/big-grits.jpg',
        description: 'Captures the pulse of a crowded juke joint alive with music, movement, and community. Rendered in bold color and rhythmic composition, celebrating Southern nightlife and shared joy.'
      },
      {
        id: 6,
        title: 'Back to the Cotton Field',
        year: '2024',
        medium: 'Carved and dyed leather',
        dimensions: '40" x 52"',
        image: '/images/works/back-cotton-field.jpg',
        description: 'Both a tribute and continuation to his father\'s legacy. Drawing on powerful imagery that defined his father\'s work, revisiting cotton fields as enduring symbols of memory, labor, and survival.'
      }
    ],
    exhibitions: ['Solo Exhibition at Quinnipiac University (2023)', 'Contemporary Southern Art Collective (2022)', 'Generational Voices in Craft (2024)'],
    press: ['Featured in Southern Art Review', 'Profile in Contemporary Craft Magazine']
  },
  'nima': {
    name: 'Nima',
    descriptor: 'Evolution',
    shortBio: 'The newest voice in our studio, bringing contemporary perspectives and innovative approaches to the traditional craft of leather artistry.',
    fullBio: 'Nima represents the newest generation of artists at Nimaz Fine Art, bringing fresh perspectives and innovative approaches to the traditional craft of leather artistry. With a background in contemporary art and design, Nima pushes the boundaries of what leather art can be while respecting the foundational principles established by the studio. Their work explores themes of identity, cultural evolution, and the intersection of tradition with modernity. Through experimental techniques and contemporary subject matter, Nima ensures that the art form continues to evolve and remain relevant for future generations.',
    slug: 'nima',
    image: '/images/artists/nima.jpg',
    featuredWorks: [
      {
        id: 5,
        title: 'Contemporary Voices',
        year: '2023',
        medium: 'Carved and dyed leather with mixed media',
        dimensions: '36" x 24"',
        image: '/images/works/contemporary-voices.jpg',
        description: 'A mixed-media exploration of contemporary identity.'
      },
      {
        id: 6,
        title: 'Future Traditions',
        year: '2023',
        medium: 'Carved and dyed leather',
        dimensions: '40" x 30"',
        image: '/images/works/future-traditions.jpg',
        description: 'Reimagining traditional themes for modern audiences.'
      }
    ],
    exhibitions: ['New Voices in Craft (2023)']
  }
};

export async function generateStaticParams() {
  return Object.keys(artists).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artist = artists[slug];
  
  if (!artist) {
    return {
      title: 'Artist Not Found | Nimaz Fine Art',
    };
  }

  return {
    title: `${artist.name} | Nimaz Fine Art`,
    description: artist.shortBio,
  };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists[slug];

  if (!artist) {
    notFound();
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-widest text-secondary mb-2">
                  {artist.descriptor}
                </p>
                <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">
                  {artist.name}
                </h1>
                <p className="text-xl text-secondary leading-relaxed">
                  {artist.shortBio}
                </p>
              </div>

              <Button variant="outline">
                Commission Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="section-padding bg-soft-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
              Biography
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-secondary leading-relaxed">
                {artist.fullBio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Featured Works
            </h2>
            <p className="text-lg text-secondary">
              Selected pieces showcasing {artist.name}'s artistic approach and technique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {artist.featuredWorks.map((work) => (
              <div key={work.id} className="space-y-6">
                {/* Artwork Image */}
                <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Artwork Details */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-foreground">
                    {work.title}
                  </h3>
                  <div className="space-y-1 text-sm text-secondary">
                    <p>{work.year}</p>
                    <p>{work.medium}</p>
                    <p>{work.dimensions}</p>
                  </div>
                  <p className="text-secondary leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      {(artist.exhibitions || artist.press) && (
        <section className="section-padding bg-soft-bg">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12">
                Recognition & Exhibitions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {artist.exhibitions && (
                  <div>
                    <h3 className="text-xl font-serif text-foreground mb-4">
                      Exhibitions
                    </h3>
                    <ul className="space-y-2">
                      {artist.exhibitions.map((exhibition, index) => (
                        <li key={index} className="text-secondary">
                          {exhibition}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {artist.press && (
                  <div>
                    <h3 className="text-xl font-serif text-foreground mb-4">
                      Press & Features
                    </h3>
                    <ul className="space-y-2">
                      {artist.press.map((item, index) => (
                        <li key={index} className="text-secondary">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Work with {artist.name}
            </h2>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Interested in commissioning a piece or learning more about {artist.name}'s work? 
              Get in touch to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/commissions">
                <Button size="lg">Commission Work</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">Contact Studio</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

const ArtistSpotlight = () => {
  const artists = [
    {
      name: 'Winfred Sr',
      descriptor: 'Legacy',
      bio: 'The foundational artist whose pioneering work in leather carving established the techniques and narrative traditions that define our studio today.',
      image: '/images/artists/winfred_sr/portrait_winfred_sr.jpg',
      slug: 'winfred-sr'
    },
    {
      name: 'Winfred Jr',
      descriptor: 'Continuation',
      bio: 'Building upon his father\'s legacy, Winfred Jr expands the artistic language while honoring the core principles of storytelling through leather.',
      image: '/images/artists/winfred_jr/portrait_winfred_jr.jpg',
      slug: 'winfred-jr'
    },
    {
      name: 'Nima',
      descriptor: 'Evolution',
      bio: 'The newest voice in our studio, bringing contemporary perspectives and innovative approaches to the traditional craft of leather artistry.',
      image: '/images/artists/nima.jpg',
      slug: 'nima'
    }
  ];

  return (
    <section className="bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container">
        <motion.div
          className="text-center" style={{ marginBottom: '5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-black mb-6 mt-2">
            Three Voices, One Legacy
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-constrained">
            Each artist brings their unique perspective to the continuing story of leather as fine art.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-100 group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                      {artist.descriptor}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-serif text-black">
                      {artist.name}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {artist.bio}
                  </p>

                  <Button variant="outline">
                    View Works
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;

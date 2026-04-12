'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const FeaturedWorks = () => {
  const featuredWorks = [
    {
      id: 1,
      title: 'Chain Gang',
      artist: 'Winfred Sr',
      image: '/images/artists/winfred_sr/chain_gang_2008.webp',
      slug: 'chain-gang'
    },
    {
      id: 2,
      title: 'All Me 2',
      artist: 'Winfred Sr',
      image: '/images/artists/winfred_sr/All_Me_2_2005.webp',
      slug: 'all-me-2'
    },
    {
      id: 3,
      title: 'Contemporary Voices',
      artist: 'Nima',
      image: '/images/works/contemporary-voices.jpg',
      slug: 'contemporary-voices'
    },
    {
      id: 4,
      title: 'Chain Gang Picking Cotton',
      artist: 'Winfred Sr',
      image: '/images/artists/winfred_sr/chain_gang_picking_cotton_2011.webp',
      slug: 'chain-gang-picking-cotton'
    },
    {
      id: 5,
      title: 'New Narratives',
      artist: 'Winfred Jr',
      image: '/images/works/new-narratives.jpg',
      slug: 'new-narratives'
    },
    {
      id: 6,
      title: 'Future Traditions',
      artist: 'Nima',
      image: '/images/works/future-traditions.jpg',
      slug: 'future-traditions'
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
          <h2 className="text-3xl md:text-5xl font-serif text-black mb-6" style={{ marginTop: '2rem' }}>
            Featured Works
          </h2>
          <p className="text-lg text-gray-600 text-constrained">
            Discover the artistry and craftsmanship that defines our studio's approach to leather as fine art.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
          {featuredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-4">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-serif text-black group-hover:text-gray-600 transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {work.artist}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="text-black hover:text-gray-600 transition-colors border-b border-black hover:border-gray-600 pb-1">
            View Full Gallery →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorks;

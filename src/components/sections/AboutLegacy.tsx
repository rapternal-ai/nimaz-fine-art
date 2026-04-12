'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

const AboutLegacy = () => {
  return (
    <section className="bg-gray-50" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-black mb-6">
                Building on Legacy, Creating Tomorrow
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nimaz Fine Art builds on a powerful artistic legacy while expanding the language of leather as a fine art medium through new artists, new works, and new forms of engagement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our studio represents the continuation of narrative craftsmanship that began with Winfred Rembert, now carried forward by multiple generations of artists who honor the past while embracing contemporary expression.
              </p>
            </div>

            <Button variant="outline">
              Read Our Story
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Legacy Image</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutLegacy;

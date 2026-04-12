'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ChainGangBackground from '../ui/ChainGangBackground';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
      <ChainGangBackground />
      <div className="container">
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fine Art in Leather.{' '}
            <span className="block">Stories That Endure.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed text-constrained"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A multi-generational studio continuing the legacy of Winfred Rembert through 
            narrative craftsmanship, contemporary expression, and custom artistry.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button size="lg" className="min-w-48">
              View Collection
            </Button>
            <Button variant="outline" size="lg" className="min-w-48">
              Commission a Piece
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

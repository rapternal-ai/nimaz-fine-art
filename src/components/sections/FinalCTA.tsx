'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

const FinalCTA = () => {
  return (
    <section className="bg-gray-50" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container">
        <motion.div
          className="text-center w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-black mb-8">
            Bring a Story to Life Through Leather
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed text-constrained">
            Whether you're seeking a custom commission, looking to learn the craft, or wanting to 
            share our story with others, we're here to help you connect with this unique art form.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="min-w-48">
              Commission a Piece
            </Button>
            <Button variant="outline" size="lg" className="min-w-48">
              Contact the Studio
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

'use client';

import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Carving',
      description: 'Each piece begins with careful carving into the leather surface, creating the foundational narrative structure.',
      icon: '🔨'
    },
    {
      number: '02',
      title: 'Dyeing',
      description: 'Natural and synthetic dyes are applied to bring depth, emotion, and visual impact to the carved design.',
      icon: '🎨'
    },
    {
      number: '03',
      title: 'Detailing',
      description: 'Fine details are added through additional carving, texturing, and selective color application.',
      icon: '✨'
    },
    {
      number: '04',
      title: 'Finishing',
      description: 'The final protective treatments and mounting prepare the artwork for display and preservation.',
      icon: '🏆'
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
            The Art of Leather
          </h2>
          <p className="text-lg text-gray-600 text-constrained">
            Our process combines traditional craftsmanship with contemporary artistic vision, 
            transforming leather into powerful narrative art.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem' }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image placeholder */}
              <div className="aspect-square bg-gray-100 flex items-center justify-center text-4xl mb-6">
                {step.icon}
              </div>

              <div className="space-y-4">
                <div className="text-sm text-gray-500 font-medium tracking-widest">
                  {step.number}
                </div>
                <h3 className="text-xl font-serif text-black">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

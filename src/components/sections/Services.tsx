'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Services = () => {
  const services = [
    {
      title: 'Custom Commissions',
      description: 'Work directly with our artists to create a unique leather artwork that tells your story. From concept to completion, we guide you through every step of the creative process.',
      features: ['Personal consultation', 'Custom design', 'Premium materials', 'Certificate of authenticity'],
      cta: 'Start a Commission'
    },
    {
      title: 'Art Workshops',
      description: 'Learn the traditional techniques of leather carving and storytelling in hands-on workshops led by our master artists. Perfect for individuals and groups.',
      features: ['Expert instruction', 'All materials included', 'Small class sizes', 'Take home your creation'],
      cta: 'Explore Workshops'
    },
    {
      title: 'Lectures & Speaking',
      description: 'Bring the story of leather artistry to your institution, organization, or event. Our artists share the history, techniques, and cultural significance of this unique medium.',
      features: ['Educational presentations', 'Cultural storytelling', 'Interactive demonstrations', 'Customized content'],
      cta: 'Book a Lecture'
    }
  ];

  return (
    <section className="bg-gray-50" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-black mb-6" style={{ marginTop: '2rem' }}>
            Services & Offerings
          </h2>
          <p className="text-lg text-gray-600 text-constrained mb-8">
            Beyond creating fine art, we offer opportunities to learn, commission, and experience 
            the craft of leather artistry firsthand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              style={{ padding: '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-black group-hover:text-gray-600 transition-colors" style={{ paddingBottom: '1rem' }}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-700 rounded-full flex-shrink-0" style={{ marginRight: '0.75rem' }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full" style={{ marginTop: '1.5rem' }}>
                  {service.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

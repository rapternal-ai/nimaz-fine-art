import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Commissions | Nimaz Fine Art',
  description: 'Commission custom leather artwork from Nimaz Fine Art. Work directly with our artists to create personalized pieces that tell your story through carved and dyed leather.',
};

const commissionTypes = [
  {
    title: 'Personal Narrative',
    description: 'Share your story through leather art. Our artists work with you to create a piece that captures your personal history, memories, or experiences.',
    timeline: '8-12 weeks',
    startingPrice: '$2,500'
  },
  {
    title: 'Corporate Commission',
    description: 'Custom artwork for businesses, institutions, or organizations. Perfect for lobbies, conference rooms, or public spaces.',
    timeline: '10-16 weeks',
    startingPrice: '$5,000'
  },
  {
    title: 'Memorial Piece',
    description: 'Honor the memory of a loved one with a thoughtful tribute that celebrates their life and legacy through artistic storytelling.',
    timeline: '6-10 weeks',
    startingPrice: '$1,800'
  },
  {
    title: 'Cultural Heritage',
    description: 'Preserve and celebrate cultural stories, traditions, or historical events through the enduring medium of leather art.',
    timeline: '12-20 weeks',
    startingPrice: '$3,500'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'We begin with a detailed conversation about your vision, story, and goals for the piece. This can be done in person, by phone, or video call.'
  },
  {
    step: '02',
    title: 'Concept Development',
    description: 'Our artist creates initial sketches and concepts based on your story. We refine these together until we have a clear artistic direction.'
  },
  {
    step: '03',
    title: 'Agreement & Timeline',
    description: 'We finalize the design, dimensions, timeline, and pricing. A contract is signed and a deposit is collected to begin work.'
  },
  {
    step: '04',
    title: 'Creation Process',
    description: 'The artist begins the meticulous process of carving and dyeing your piece. We provide regular updates and photos of the progress.'
  },
  {
    step: '05',
    title: 'Completion & Delivery',
    description: 'Once finished, we arrange for professional photography, final approval, and delivery or pickup of your completed artwork.'
  }
];

export default function CommissionsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-8">
              Commission Custom Artwork
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 text-constrained">
              Work directly with our master artists to create a unique leather artwork that tells your story. 
              From personal narratives to corporate installations, we bring your vision to life through our distinctive craft.
            </p>
            <Button size="lg">
              Start Your Commission
            </Button>
          </div>
        </div>
      </section>

      {/* Commission Types */}
      <section className="bg-gray-50" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">
              Types of Commissions
            </h2>
            <p className="text-lg text-gray-600 text-constrained">
              We create custom leather artworks for a variety of purposes and settings. 
              Each piece is individually crafted to meet your specific needs and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
            {commissionTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-200" style={{ padding: '2rem' }}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-black">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Timeline</p>
                      <p className="font-medium text-black">{type.timeline}</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="font-medium text-black">{type.startingPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">
              Our Commission Process
            </h2>
            <p className="text-lg text-gray-600 text-constrained">
              We've refined our process over years of creating custom works to ensure 
              clear communication, artistic excellence, and client satisfaction.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="text-4xl font-serif text-gray-400">
                    {step.step}
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-serif text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-12 text-center" style={{ marginTop: '2rem' }}>
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-serif text-black mb-3" style={{ paddingBottom: '1rem' }}>
                  How long does a commission typically take?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Commission timelines vary based on size, complexity, and our current workload. 
                  Most pieces take 8-16 weeks from initial consultation to completion. We'll provide 
                  a specific timeline during your consultation.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-xl font-serif text-foreground mb-3">
                  What information do you need to get started?
                </h3>
                <p className="text-secondary leading-relaxed">
                  We'll need details about your story, preferred size, timeline, and budget. 
                  Photos, documents, or other reference materials are helpful but not required. 
                  Our artists are skilled at translating verbal narratives into visual art.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-xl font-serif text-foreground mb-3">
                  Can I choose which artist creates my piece?
                </h3>
                <p className="text-secondary leading-relaxed">
                  Yes, you can request a specific artist based on their style and approach. 
                  We'll discuss which artist might be the best fit for your project during 
                  the initial consultation.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-xl font-serif text-foreground mb-3">
                  What are the payment terms?
                </h3>
                <p className="text-secondary leading-relaxed">
                  We require a 50% deposit to begin work, with the balance due upon completion. 
                  For larger commissions, we can arrange a payment schedule that works for your budget.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif text-foreground mb-3">
                  Do you ship internationally?
                </h3>
                <p className="text-secondary leading-relaxed">
                  Yes, we can arrange international shipping for completed works. 
                  Shipping costs and insurance are additional and will be calculated based 
                  on the destination and artwork dimensions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6 heading-spacing-top">
              Ready to Begin Your Commission?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-constrained">
              Let's start the conversation about your custom artwork. 
              Contact us to schedule your initial consultation and begin bringing your story to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

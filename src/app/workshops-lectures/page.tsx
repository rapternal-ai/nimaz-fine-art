import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Workshops & Lectures | Nimaz Fine Art',
  description: 'Learn leather artistry techniques in our hands-on workshops or book our artists for educational lectures about the craft and cultural significance of leather art.',
};

const workshops = [
  {
    title: 'Introduction to Leather Carving',
    duration: '4 hours',
    groupSize: '6-8 participants',
    price: '$150 per person',
    description: 'Learn the fundamental techniques of leather carving in this hands-on workshop. You\'ll create your own small piece to take home while learning about tools, materials, and basic design principles.',
    includes: ['All materials and tools', 'Personal instruction', 'Completed artwork', 'Light refreshments'],
    level: 'Beginner'
  },
  {
    title: 'Narrative Storytelling Through Leather',
    duration: '6 hours (2 sessions)',
    groupSize: '4-6 participants',
    price: '$280 per person',
    description: 'Explore how to translate personal stories and experiences into visual narratives using leather as your medium. This intermediate workshop focuses on composition and storytelling techniques.',
    includes: ['All materials and tools', 'Story development guidance', 'Two completed pieces', 'Portfolio documentation'],
    level: 'Intermediate'
  },
  {
    title: 'Advanced Dyeing Techniques',
    duration: '8 hours (2 sessions)',
    groupSize: '4-5 participants',
    price: '$350 per person',
    description: 'Master the art of leather dyeing with advanced color theory, blending techniques, and finishing methods. Perfect for those with basic carving experience.',
    includes: ['Premium materials', 'Color mixing workshop', 'Advanced tools training', 'Professional finishing techniques'],
    level: 'Advanced'
  },
  {
    title: 'Private Group Workshop',
    duration: 'Customizable',
    groupSize: '8-15 participants',
    price: 'Starting at $1,200',
    description: 'Customized workshop experience for organizations, schools, or private groups. We tailor the content, duration, and complexity to your group\'s needs and interests.',
    includes: ['Custom curriculum', 'All materials', 'Multiple instructors', 'Group project options'],
    level: 'All levels'
  }
];

const lectures = [
  {
    title: 'The Art of Leather: History and Technique',
    duration: '45-60 minutes',
    audience: 'General public, art enthusiasts',
    format: 'Presentation with Q&A',
    description: 'An engaging overview of leather as an artistic medium, covering historical context, cultural significance, and contemporary applications.'
  },
  {
    title: 'Preserving Stories: Narrative Art in the Digital Age',
    duration: '30-45 minutes',
    audience: 'Museums, cultural institutions',
    format: 'Interactive presentation',
    description: 'Explore how traditional storytelling crafts remain relevant and vital in our contemporary world, with focus on cultural preservation.'
  },
  {
    title: 'From Craft to Fine Art: The Evolution of Leather Work',
    duration: '60-90 minutes',
    audience: 'Art schools, universities',
    format: 'Lecture with demonstration',
    description: 'Academic presentation on the elevation of leather work from functional craft to recognized fine art medium, including live demonstration.'
  },
  {
    title: 'Multi-Generational Artistry: Legacy and Innovation',
    duration: '45-60 minutes',
    audience: 'Business groups, family organizations',
    format: 'Keynote presentation',
    description: 'Inspiring talk about maintaining tradition while embracing innovation, using our studio as a case study in multi-generational creativity.'
  }
];

export default function WorkshopsLecturesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-8">
              Workshops & Lectures
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-constrained">
              Learn the art of leather craftsmanship through hands-on workshops or bring our expertise 
              to your organization with educational lectures about this unique artistic medium.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="bg-gray-50" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6" style={{ marginTop: '2rem' }}>
              Hands-On Workshops
            </h2>
            <p className="text-lg text-gray-600 text-constrained">
              Learn directly from our master artists in small, intimate workshop settings. 
              All skill levels welcome, from complete beginners to experienced crafters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '2rem' }}>
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white border border-gray-200" style={{ padding: '2rem' }}>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-serif text-black" style={{ paddingBottom: '1rem' }}>
                      {workshop.title}
                    </h3>
                    <span className="text-sm bg-gray-100 px-3 py-1 text-gray-600">
                      {workshop.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {workshop.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Duration</p>
                      <p className="font-medium text-black">{workshop.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Group Size</p>
                      <p className="font-medium text-black">{workshop.groupSize}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-black mb-2">Includes:</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {workshop.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-amber-700 rounded-full flex-shrink-0" style={{ marginRight: '0.75rem' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <p className="text-xl font-serif text-black">{workshop.price}</p>
                    <Button variant="outline">
                      Book Workshop
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lectures Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Educational Lectures
            </h2>
            <p className="text-lg text-gray-600 text-constrained">
              Bring the story of leather artistry to your institution, organization, or event. 
              Our artists share the history, techniques, and cultural significance of this unique medium.
            </p>
          </div>

          <div className="space-y-8">
            {lectures.map((lecture, index) => (
              <div key={index} className="border border-border p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-2xl font-serif text-foreground">
                      {lecture.title}
                    </h3>
                    <p className="text-secondary leading-relaxed">
                      {lecture.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-secondary">Duration</p>
                      <p className="font-medium text-foreground">{lecture.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Audience</p>
                      <p className="font-medium text-foreground">{lecture.audience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Format</p>
                      <p className="font-medium text-foreground">{lecture.format}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              Book a Lecture
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-soft-bg">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              What Participants Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 border border-border">
              <p className="text-secondary italic mb-4">
                "The workshop was incredible. I never imagined leather could be such an expressive medium. 
                The instructors were patient and knowledgeable."
              </p>
              <p className="text-sm font-medium text-foreground">— Sarah M., Workshop Participant</p>
            </div>

            <div className="bg-background p-6 border border-border">
              <p className="text-secondary italic mb-4">
                "Our museum guests were captivated by the lecture. It opened their eyes to a completely 
                new art form and its cultural significance."
              </p>
              <p className="text-sm font-medium text-foreground">— Dr. James L., Museum Director</p>
            </div>

            <div className="bg-background p-6 border border-border">
              <p className="text-secondary italic mb-4">
                "The private group workshop was perfect for our team building event. 
                Everyone left with both new skills and a beautiful piece of art."
              </p>
              <p className="text-sm font-medium text-foreground">— Maria R., Corporate Event Planner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Ready to Learn or Host?
            </h2>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Whether you want to learn the craft yourself or bring our expertise to your organization, 
              we're here to share the art and story of leather craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Book a Workshop
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Lecture
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

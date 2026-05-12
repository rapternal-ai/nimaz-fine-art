import Link from 'next/link';
import Button from '@/components/ui/Button';

interface AboutStoryProps {
  showHero?: boolean;
  showMissionVision?: boolean;
  showArtOfLeather?: boolean;
}

const AboutStory = ({
  showHero = true,
  showMissionVision = true,
  showArtOfLeather = true,
}: AboutStoryProps) => {
  return (
    <>
      {showHero && (
        <section className="section-padding bg-background">
          <div className="container">
            <div className="w-full text-center">
              <h1 className="text-4xl md:text-6xl font-serif text-black mb-8">
                Our Story
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-constrained">
                Nimaz Fine Art represents the continuation and evolution of a powerful artistic legacy,
                where traditional craftsmanship meets contemporary storytelling across generations.
              </p>
            </div>
          </div>
        </section>
      )}

      {showMissionVision && (
        <section className="section-padding bg-background">
          <div className="container">
            <div className="w-full text-center">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-black mb-8 heading-spacing-top">
                  Mission & Vision
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6 text-center">
                  <h3 className="text-2xl font-serif text-black heading-spacing-bottom">Our Mission</h3>
                  <p className="text-lg text-gray-600 leading-relaxed text-constrained">
                    To preserve and advance the art of leather storytelling while making this unique
                    medium accessible to new audiences through education, commission work, and
                    contemporary artistic expression.
                  </p>
                </div>

                <div className="space-y-6 text-center">
                  <h3 className="text-2xl font-serif text-black heading-spacing-bottom">Our Vision</h3>
                  <p className="text-lg text-gray-600 leading-relaxed text-constrained">
                    To establish leather art as a recognized and celebrated fine art medium, ensuring
                    that the stories, techniques, and cultural significance of this craft continue
                    to inspire and educate future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {showArtOfLeather && (
        <section className="section-padding bg-soft-bg">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[5/4] bg-gradient-to-br from-border to-soft-bg">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-secondary text-sm">Process Image</span>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                  The Art of Leather
                </h2>
                <div className="space-y-6 text-lg text-secondary leading-relaxed">
                  <p>
                    Our process begins with carefully selected leather, which serves as both canvas
                    and sculpture. Using traditional carving tools, our artists create intricate
                    reliefs that form the foundation of each narrative.
                  </p>
                  <p>
                    The carved leather is then brought to life through the application of dyes,
                    creating depth, emotion, and visual impact. This combination of carving and
                    dyeing allows for a unique form of storytelling that is both tactile and visual.
                  </p>
                  <p>
                    Each piece requires weeks or months to complete, with every detail carefully
                    considered to ensure the story is told with clarity, beauty, and lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-serif text-foreground">Authenticity</h3>
              <p className="text-secondary leading-relaxed">
                We honor the authentic techniques and cultural significance of leather artistry
                while allowing for personal expression and contemporary relevance.
              </p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-serif text-foreground">Excellence</h3>
              <p className="text-secondary leading-relaxed">
                Every piece we create meets the highest standards of craftsmanship, from the
                selection of materials to the final finishing touches.
              </p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-serif text-foreground">Education</h3>
              <p className="text-secondary leading-relaxed">
                We believe in sharing knowledge and skills, ensuring that this unique art form
                continues to grow and inspire new generations of artists and appreciators.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft-bg">
        <div className="container">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-8 heading-spacing-top">
              The Studio Today
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed text-constrained">
                Today, Nimaz Fine Art operates as both a working studio and educational center.
                Our three artists—Winfred Sr, Winfred Jr, and Nima—each bring their unique
                perspectives while maintaining the core principles that define our approach.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed text-constrained">
                We create commissioned works for private collectors, institutions, and corporations
                while also offering workshops and lectures to share our knowledge and passion for
                this extraordinary medium.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed text-constrained">
                Our work has been exhibited in galleries and museums, featured in publications,
                and collected by individuals who appreciate both the artistic merit and cultural
                significance of leather art.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6 heading-spacing-top">
              Join Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-constrained">
              Whether through commissioning a piece, attending a workshop, or simply learning
              more about our craft, we invite you to become part of the continuing story of
              leather artistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/commissions" className="inline-block">
                <Button size="lg">Commission Work</Button>
              </Link>
              <Link href="/gallery" className="inline-block">
                <Button variant="outline" size="lg">Visit Our Gallery</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;

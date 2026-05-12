import Image from 'next/image';

const tamuBio = [
  'Tamu Rembert is the Founder and Chief Executive Officer of Nimaz Fine Art, a Connecticut-based fine art company specializing in artist representation, cultural programming, and creative development within the contemporary art world. Under her leadership, Nimaz Fine Art serves as a cultural force dedicated to supporting artists, expanding access to the arts, and fostering meaningful engagement between collectors, institutions, and the community.',
  'Named after her two daughters, Nima and Nzinga—both artists—Nimaz Fine Art reflects Tamu’s commitment to nurturing creativity across generations. The company is grounded in family, legacy, and the preservation of artistic voice, reflecting her belief in art as a living, evolving expression of culture and identity.',
  'Tamu oversees the management and advancement of the work of artist Winfred Rembert Jr., while also supporting emerging and established artists whose practices engage history, craft, and cultural memory. Her approach blends strategic development with a deep respect for storytelling, material practice, and the cultural significance embedded in each body of work.',
  'Tamu also plays a key role in stewarding and advancing the legacy of Winfred Rembert Sr. Her work ensures that related programs, initiatives, and public engagements are executed smoothly with authenticity, care, and historical awareness.',
  'In addition to her work in artist representation, Tamu produces exhibitions, workshops, and public initiatives that expand access to the arts and encourage creative participation. Her programming includes artist talks, educational workshops, and collaborative projects designed to connect communities directly to artistic practice.',
  'Beyond Nimaz Fine Art, Tamu serves as an Ambassador for the Hamden Regional Chamber of Commerce, reflecting her commitment to entrepreneurship, mentorship, and community development.',
  'Her background includes a career as a speech and language therapist and experience as a professional volleyball player with Volleyball Club Wattignies in Lille, France. In 2007, she was inducted into the Connecticut Women’s Volleyball Hall of Fame in recognition of her athletic achievement and leadership.',
  'Tamu is fluent in French and American Sign Language, which continues to inform her inclusive and multidisciplinary approach to cultural work and communication.',
  'She is married to Winfred Rembert Jr., and together they have six children. Through Nimaz Fine Art, Tamu continues to build a contemporary fine art company rooted in artistic integrity, cultural engagement, and the belief that art has the power to connect people across generations.',
];

const TamuProfile = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="w-full text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Founder & Chief Executive Officer
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-8">
            Tamu Rembert
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-constrained">
            Founder and CEO of Nimaz Fine Art, leading artist representation, cultural programming,
            and creative development rooted in family, legacy, and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
            <Image
              src="/images/team/tamu_portrait.JPEG"
              alt="Tamu Rembert"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            {tamuBio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TamuProfile;

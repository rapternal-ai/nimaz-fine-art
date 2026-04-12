import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Contact | Nimaz Fine Art',
  description: 'Get in touch with Nimaz Fine Art for commissions, workshop inquiries, lectures, or general questions about our leather artistry.',
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-8">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-constrained">
              We'd love to hear from you. Whether you're interested in commissioning a piece, 
              attending a workshop, or learning more about our craft, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-soft-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="form-container">
              <h2 className="text-2xl font-serif text-primary mb-8 heading-spacing-top">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-foreground mb-2">
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="commission">Commission Inquiry</option>
                    <option value="workshop">Workshop Information</option>
                    <option value="lecture">Lecture Booking</option>
                    <option value="purchase">Purchase Existing Work</option>
                    <option value="press">Press & Media</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your project, question, or how we can help you..."
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent resize-vertical"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif text-black mb-6" style={{ marginTop: '2rem' }}>
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-black mb-1" style={{ paddingBottom: '1rem' }}>Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@nimazfineart.com" className="hover:text-black transition-colors">
                        info@nimazfineart.com
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-black mb-1" style={{ paddingBottom: '1rem' }}>Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+1234567890" className="hover:text-black transition-colors">
                        (123) 456-7890
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-black mb-1" style={{ paddingBottom: '1rem' }}>Studio Address</h3>
                    <p className="text-gray-600">
                      123 Artisan Way<br />
                      Creative District<br />
                      Atlanta, GA 30309
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif text-black mb-4" style={{ paddingBottom: '1rem' }}>
                  Studio Hours
                </h3>
                <div className="space-y-2 text-secondary">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: By appointment only</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif text-foreground mb-4">
                  Response Time
                </h3>
                <p className="text-secondary leading-relaxed">
                  We typically respond to inquiries within 24-48 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif text-foreground mb-4">
                  Studio Visits
                </h3>
                <p className="text-secondary leading-relaxed">
                  Studio visits are available by appointment. We love sharing our process 
                  and workspace with visitors interested in learning more about leather artistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-12 heading-spacing-top">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="border-b border-border pb-6">
                <h3 className="text-xl font-serif text-foreground mb-3">
                  How quickly do you respond to inquiries?
                </h3>
                <p className="text-secondary leading-relaxed">
                  We aim to respond to all inquiries within 24-48 hours during business days. 
                  Commission inquiries may require a longer initial response as we review 
                  your project details thoroughly.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-xl font-serif text-foreground mb-3">
                  Can I visit the studio?
                </h3>
                <p className="text-secondary leading-relaxed">
                  Yes! We welcome studio visits by appointment. This gives you a chance to 
                  see our workspace, meet the artists, and learn more about our process. 
                  Please contact us to schedule a visit.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-xl font-serif text-foreground mb-3">
                  Do you work with clients outside your local area?
                </h3>
                <p className="text-secondary leading-relaxed">
                  Absolutely. We work with clients nationwide and internationally. 
                  Initial consultations can be conducted via phone or video call, 
                  and we arrange secure shipping for completed works.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-xl font-serif text-foreground mb-3">
                  What's the best way to describe my commission idea?
                </h3>
                <p className="text-secondary leading-relaxed">
                  The more details you can provide, the better. Tell us about the story 
                  you want to tell, any specific elements that are important to you, 
                  your preferred size, and your timeline. Photos or reference materials 
                  are helpful but not required.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif text-foreground mb-3">
                  Do you offer payment plans for commissions?
                </h3>
                <p className="text-secondary leading-relaxed">
                  Yes, we can work with you on payment arrangements for larger commissions. 
                  Typically, we require a deposit to begin work with the balance due upon 
                  completion, but we're flexible based on your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding bg-soft-bg">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Find Our Studio
            </h2>
            <p className="text-lg text-secondary">
              Located in Atlanta's vibrant Creative District
            </p>
          </div>
          
          <div className="aspect-[16/9] bg-gradient-to-br from-border to-soft-bg flex items-center justify-center">
            <span className="text-secondary text-sm">Interactive Map</span>
          </div>
        </div>
      </section>
    </div>
  );
}

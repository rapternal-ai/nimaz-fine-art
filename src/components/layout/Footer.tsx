'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/artists', label: 'Artists' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/commissions', label: 'Commissions' },
    { href: '/workshops-lectures', label: 'Workshops & Lectures' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-serif font-medium text-foreground">
              Nimaz Fine Art
            </Link>
            <p className="text-secondary text-sm leading-relaxed">
              Nimaz Fine Art showcases the leather artistry of Winfred Sr, Winfred Jr, and Nimacy of Winfred Rembert through narrative craftsmanship and contemporary expression.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-black mb-4">Nimaz Fine Art</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif text-foreground">Connect</h3>
            <div className="space-y-2">
              <p className="text-sm text-secondary">
                <a href="mailto:info@nimazfineart.com" className="hover:text-foreground transition-colors">
                  info@nimazfineart.com
                </a>
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-secondary hover:text-foreground transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Nimaz Fine Art. All rights reserved.
          </p>
          <p className="text-sm text-secondary mt-4 md:mt-0">
            Crafted with care for cultural legacy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

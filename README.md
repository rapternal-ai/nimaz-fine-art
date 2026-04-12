# Nimaz Fine Art Website

A premium fine art website showcasing the leather artistry of Winfred Sr, Winfred Jr, and Nima. Built with Next.js, Tailwind CSS, and Framer Motion for a museum-quality digital experience.

## Overview

Nimaz Fine Art is a multi-generational leather art studio continuing the legacy of Winfred Rembert through narrative craftsmanship, contemporary expression, and custom artistry. This website serves as both a gallery and business platform for commissions, workshops, and lectures.

## Features

- **Museum-grade design** with clean white backgrounds and editorial spacing
- **Artist showcase** with individual profiles and featured works
- **Gallery** displaying the complete collection of leather artworks
- **Commission system** for custom artwork requests
- **Workshop & lecture booking** for educational programs
- **Responsive design** optimized for all devices
- **SEO optimized** with proper meta tags and structured data
- **Accessibility compliant** with WCAG guidelines

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 with custom design system
- **Animations**: Framer Motion for subtle, premium interactions
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── artists/           # Artist pages and individual profiles
│   ├── gallery/           # Artwork gallery
│   ├── commissions/       # Commission information
│   ├── workshops-lectures/# Educational programs
│   ├── about/            # Studio story and mission
│   ├── contact/          # Contact form and information
│   ├── globals.css       # Global styles and design tokens
│   ├── layout.tsx        # Root layout with header/footer
│   └── page.tsx          # Homepage
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Homepage sections
│   └── ui/               # Reusable UI components
public/
├── images/
│   ├── artists/          # Artist portrait images
│   └── works/            # Artwork images
```

## Design System

### Colors
- **Background**: #ffffff (white)
- **Foreground**: #111111 (near black)
- **Secondary**: #555555 (gray)
- **Border**: #eaeaea (light gray)
- **Soft Background**: #f8f8f6 (off-white)
- **Accent**: #8b4513 (leather brown)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Scale**: 64px/40px/24px/16px/14px

### Spacing
- **Section padding**: 120px (desktop), 64px (mobile)
- **Component spacing**: 24px/32px/48px/64px
- **Container max-width**: 1200px

## Content Management

### Adding Images
1. **Artist portraits**: Add to `public/images/artists/` with naming convention `artist-slug.jpg`
2. **Artwork images**: Add to `public/images/works/` with naming convention `artwork-slug.jpg`
3. **Recommended dimensions**:
   - Artist portraits: 800x1000px (4:5 aspect ratio)
   - Artwork images: 1200x1500px (4:5 aspect ratio)

### Updating Content
- **Artist information**: Edit `src/app/artists/[slug]/page.tsx`
- **Artwork data**: Update arrays in gallery and featured works components
- **Contact information**: Modify `src/app/contact/page.tsx`

## Deployment

This website can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Connect your repository for automatic deployments
- **Netlify**: Use the Next.js build command
- **AWS/Digital Ocean**: Deploy as a Node.js application

### Build Commands
```bash
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## SEO & Performance

- **Meta tags**: Configured for each page with relevant titles and descriptions
- **Open Graph**: Social media sharing optimization
- **Image optimization**: Next.js Image component for automatic optimization
- **Core Web Vitals**: Optimized for Google's performance metrics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

When making changes:
1. Follow the established design system
2. Maintain the premium aesthetic
3. Ensure responsive design works across all breakpoints
4. Test accessibility with screen readers
5. Optimize images before adding to the project

## License

This project is proprietary to Nimaz Fine Art. All rights reserved.

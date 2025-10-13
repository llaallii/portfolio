# Medical Systems Engineer Portfolio

A modern, futuristic portfolio website built for a systems engineer specializing in medical product development and innovation.

## Features

- **Modern Design**: Sleek, professional, and tech-forward design with clean white space, soft gradients, and holographic highlights
- **Next.js 15**: Built with the latest Next.js App Router for optimal performance
- **Smooth Animations**: Powered by Framer Motion for fluid, professional animations
- **3D Elements**: Interactive Three.js medical device models
- **Particle Effects**: Dynamic particle background system
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Built-in SEO with Next.js Metadata API
- **Contact Form**: Working contact form with Server Actions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Particles**: @tsparticles/react
- **Icons**: Lucide React
- **Fonts**: Inter, Orbitron, Poppins (Google Fonts)

## Color Palette

- **Primary**: White (#FFFFFF)
- **Teal**: #14B8A6
- **Silver**: #E5E7EB
- **Deep Blue**: #1E3A8A
- **Cyan**: #06B6D4
- **Electric Purple**: #A855F7
- **Dark Background**: #0F172A
- **Darker**: #020617

## Sections

1. **Hero Section**: Dynamic headline with particle background and animated icons
2. **About Me**: Professional bio with animated statistics
3. **Projects**: Showcase of 3-5 key projects with interactive cards
4. **Skills & Tools**: Comprehensive skill matrix with animated proficiency bars
5. **Publications & Certifications**: Timeline of research contributions and professional certifications
6. **Contact**: Modern contact form with QR code for easy connection

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. The repository is already set up in your current directory

2. Install dependencies (if not already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

Edit the constants in [lib/constants.ts](lib/constants.ts):

```typescript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Systems Engineer",
  subtitle: "Medical Product Development & Innovation",
  email: "your.email@example.com",
  // ... more fields
};
```

### Modify Content

All content is centralized in [lib/constants.ts](lib/constants.ts):
- `HERO`: Hero section content
- `ABOUT`: About section content and statistics
- `PROJECTS`: Project showcases
- `SKILLS`: Skills and competencies
- `PUBLICATIONS`: Publications and patents
- `CERTIFICATIONS`: Professional certifications

### Update Colors

Colors are defined in [app/globals.css](app/globals.css) using CSS variables:
```css
:root {
  --medical-teal: #14B8A6;
  --medical-cyan: #06B6D4;
  /* ... more colors */
}
```

### Add Images

Place your images in the `public/images/` directory:
- `public/images/profile/`: Profile photos
- `public/images/projects/`: Project screenshots
- `public/images/certifications/`: Certification badges

## Build for Production

```bash
npm run build
npm start
```

## Deploy

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Docker container

## Project Structure

```
portfolio/
├── app/
│   ├── actions/          # Server Actions
│   │   └── contact.ts    # Contact form handler
│   ├── components/       # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Publications.tsx
│   │   ├── Contact.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── MedicalDevice3D.tsx
│   │   └── ProjectModal.tsx
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── lib/
│   ├── constants.ts      # Content constants
│   └── utils.ts          # Utility functions
├── public/
│   ├── images/           # Static images
│   │   ├── profile/
│   │   ├── projects/
│   │   └── certifications/
│   └── models/           # 3D models
└── README.md
```

## Key Components

- **Navigation**: Sticky navigation with active section highlighting and mobile menu
- **ParticleBackground**: Animated particle system with mouse interaction
- **Hero**: Full-screen hero with animated elements and typewriter effect
- **About**: Bio section with animated statistics counter
- **Projects**: Project showcase with modal details and filtering
- **Skills**: Skills matrix with animated progress bars
- **Publications**: Timeline with publications, patents, and certifications
- **Contact**: Contact form with Server Actions, QR code, and copy-to-clipboard
- **MedicalDevice3D**: Interactive 3D medical device model

## Performance Optimizations

- Server-side rendering (SSR) for initial load
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Font optimization with next/font
- Tailwind CSS purging for minimal CSS bundle
- Framer Motion optimized animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization Tips

1. **Replace placeholder content**: Update all content in `lib/constants.ts` with your actual information
2. **Add your images**: Replace placeholder images in the `public/images/` directory
3. **Customize colors**: Adjust the color scheme in `app/globals.css` to match your brand
4. **Update contact form**: Configure email service in `app/actions/contact.ts` (e.g., SendGrid, Resend)
5. **Add more projects**: Expand the `PROJECTS` array in `lib/constants.ts`

## License

This project is open source and available for personal and commercial use.

---

Built with ❤️ using Next.js 15, Tailwind CSS, and Framer Motion

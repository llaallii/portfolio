# AI Agent Instructions - Medical Systems Engineer Portfolio

## Architecture Overview

This is a **Next.js 15 App Router** portfolio showcasing medical systems engineering expertise. The architecture follows a **centralized content + modular components** pattern:

- **Single-page application** with smooth-scrolling sections
- **All content centralized** in `lib/constants.ts` for easy customization
- **Component-based architecture** with each section as a standalone component
- **Medical/healthcare design system** with custom CSS variables and Tailwind v4

## Key Development Patterns

### Content Management
- **All textual content lives in `lib/constants.ts`** - never hardcode content in components
- Use exported objects: `PERSONAL_INFO`, `HERO`, `ABOUT`, `PROJECTS`, `SKILLS`, etc.
- Images go in `public/images/` with organized subdirectories (`profile/`, `projects/`, `certifications/`)

### Component Structure
```
app/page.tsx → Main layout with section components
app/components/ → Each section is a self-contained component
app/actions/ → Server Actions (currently contact form)
```

### Styling System
- **Custom CSS variables** defined in `app/globals.css` (medical theme colors)
- **Tailwind v4** with custom theme colors like `medical-teal`, `medical-cyan`
- **Three font families**: Inter (body), Orbitron (headings), Poppins (accent)
- **Medical color palette**: Teal (#14B8A6), Cyan (#06B6D4), Purple (#A855F7)

### Animation & Interactive Elements
- **Framer Motion** for all animations - use consistent timing and easing
- **Three.js/React Three Fiber** for 3D medical device models
- **TSParticles** for background particle effects with medical theme colors
- **Smooth scrolling navigation** with active section highlighting

## Development Workflow

### Dev Commands
```bash
npm run dev         # Development with Turbopack
npm run build       # Production build with Turbopack  
npm run lint        # ESLint with Next.js config
```

### Adding New Content
1. **Projects**: Add to `PROJECTS` array in `lib/constants.ts`
2. **Skills**: Update `SKILLS` object with categories and items
3. **Images**: Place in appropriate `public/images/` subdirectory
4. **3D Models**: Add to `public/models/` (referenced in `MedicalDevice3D.tsx`)

### Component Guidelines
- All client components start with `"use client"`
- Use **consistent medical theme colors** from CSS variables
- Implement **responsive design** with Tailwind breakpoints
- Follow **accessibility patterns** (semantic HTML, ARIA labels)
- Use **Framer Motion** for enter animations on scroll

## Critical Integration Points

### Server Actions Pattern
- Contact form uses Next.js Server Actions in `app/actions/contact.ts`
- Currently logs to console - integrate with email service (SendGrid/Resend)
- Follows validation → processing → response pattern

### 3D Rendering Setup
- `MedicalDevice3D.tsx` creates medical device models programmatically
- Uses Three.js primitives (no external model files currently)
- Responsive canvas with OrbitControls for interaction

### Particle System Configuration
- `ParticleBackground.tsx` uses medical theme colors: `["#14B8A6", "#06B6D4", "#A855F7"]`
- Interactive on hover/click with repulse/push effects
- Performance optimized with fpsLimit: 60

## Customization Hotspots

When personalizing this portfolio:
1. **Replace all placeholder content** in `lib/constants.ts`
2. **Update images** in `public/images/` subdirectories
3. **Configure email service** in `app/actions/contact.ts`
4. **Adjust colors** via CSS variables in `app/globals.css`
5. **Update metadata** in `app/layout.tsx` for SEO

## Performance Considerations

- Uses **Next.js Image component** for optimized images
- **Font optimization** with `next/font/google`
- **Code splitting** automatic with App Router
- **Framer Motion animations** use transform properties for performance
- **Particle system** limited to 60 FPS with optimized particle count

When modifying, maintain these performance patterns and test on slower devices.
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio and blog application using:

- **Next.js 15** with App Router and React 19
- **TypeScript** for type safety
- **Tailwind CSS v4** with @tailwindcss/postcss plugin
- **shadcn/ui** for UI components (built on Radix UI)
- **Sanity CMS** as the default headless CMS
- **next-themes** for dark/light mode support

## Development Commands

### Core Development

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run typecheck    # Run TypeScript type checking
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Testing

```bash
npm run test         # Run Vitest unit tests
npm run test:e2e     # Run Playwright E2E tests
```

## Architecture

### Content Management Strategy

This project uses **Sanity CMS** as the primary content source:

1. **Sanity Studio Route**: `/studio` - Embedded Sanity Studio for content editing
   - Located at `src/app/studio/[[...tool]]/page.tsx`
   - Uses `NextStudio` component from `next-sanity`
   - Studio configuration in `sanity.config.ts` at project root

2. **Sanity Client**: `src/sanity/lib/client.ts`
   - Configured with project ID, dataset, and API version from environment variables
   - Uses `createClient` from `next-sanity`

3. **Content Schemas**: `src/sanity/schemas/index.ts`
   - Export schema types here to be registered in `sanity.config.ts`
   - Empty by default - add your schema definitions here

4. **ISR Webhook**: `src/app/api/revalidate/route.ts`
   - POST endpoint for Sanity webhooks to trigger revalidation
   - Requires `SANITY_REVALIDATE_SECRET` for authentication
   - Uses Next.js `revalidateTag()` for incremental static regeneration

### UI Component System

**shadcn/ui Integration**:

- Components installed via CLI: `npx shadcn@latest add <component>`
- Configuration in `components.json` (defines paths, style, base color)
- Components live in `src/components/ui/`
- Uses `cn()` utility from `src/lib/utils.ts` for className merging

**Theme System**:

- `ThemeProvider` in `src/components/theme/theme-provider.tsx` wraps the app
- Configured in root layout (`src/app/layout.tsx`)
- CSS variables defined in `src/app/globals.css` for both light and dark themes
- Uses `next-themes` for theme switching

### Styling Architecture

**Tailwind CSS v4**:

- Uses the new `@tailwindcss/postcss` plugin (not the old `tailwindcss` PostCSS plugin)
- Configuration: `tailwind.config.ts` and `postcss.config.mjs`
- CSS variables system for shadcn/ui components in `globals.css`
- Custom brand colors defined in Tailwind config (placeholder: `<PRIMARY_HEX>`)

**Important**: When adding utilities to `globals.css`, use direct CSS properties instead of `@apply` directives to avoid v4 compatibility issues.

### Environment Variables

Required variables in `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID    # Your Sanity project ID
NEXT_PUBLIC_SANITY_DATASET        # Usually "production"
NEXT_PUBLIC_SANITY_API_VERSION    # API version (e.g., "2024-01-01")
SANITY_API_READ_TOKEN             # Token for draft content access
SANITY_REVALIDATE_SECRET          # Secret for webhook authentication
NEXT_PUBLIC_SITE_URL              # Site URL (defaults to localhost:3000)
```

### Code Quality Setup

**Pre-commit Hooks** (Husky + lint-staged):

- Automatically runs on `git commit`
- ESLint fixes and Prettier formatting on staged `.ts,.tsx,.js,.jsx` files
- Prettier formatting on `.json,.md,.mdx,.css,.yaml,.yml` files

**CI/CD** (GitHub Actions):

- Workflow: `.github/workflows/ci.yml`
- Runs on push/PR to `main` or `develop` branches
- Steps: install → lint → typecheck → build
- Requires Sanity env vars as GitHub secrets

### Next.js Configuration

**Image Optimization** (`next.config.ts`):

- Remote patterns configured for `cdn.sanity.io` hostname
- Allows Next.js Image component to optimize Sanity images

**Fetch Logging**:

- `fullUrl: true` in logging config for debugging cache/revalidation issues

### Project Structure Notes

- **App Router**: All routes in `src/app/`
- **Route Segments**: Use dynamic segments like `[[...tool]]` for catch-all routes
- **API Routes**: Server-side API endpoints in `src/app/api/`
- **Metadata**: `metadataBase` uses `NEXT_PUBLIC_SITE_URL` env variable (falls back to localhost)

## Key Patterns

### Adding New Sanity Schemas

1. Create schema file in `src/sanity/schemas/`
2. Import and add to `schemaTypes` array in `src/sanity/schemas/index.ts`
3. Schema will be automatically registered in Sanity Studio

### Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

- Automatically added to `src/components/ui/`
- Import and use directly: `import { Button } from "@/components/ui/button"`

### Data Fetching with Sanity

- Use `client` from `src/sanity/lib/client.ts`
- Fetch with GROQ queries
- Consider using `next: { revalidate: <seconds> }` or `next: { tags: ['tag'] }` for ISR

## Placeholders to Replace

Before deployment, replace these placeholders:

- `<YOUR_NAME>` in `src/app/layout.tsx` and `src/app/page.tsx`
- `<LOCALE>` in `src/app/layout.tsx` (e.g., "en")
- `<PRIMARY_HEX>` in `tailwind.config.ts` (your brand color)
- Title in `sanity.config.ts` line 13

## Special Considerations

- **Tailwind v4**: Uses new PostCSS plugin architecture; avoid mixing with v3 patterns
- **React 19**: Latest React version; be aware of breaking changes from v18
- **Sanity v4**: Uses new `defineConfig` API; ensure plugins are v4-compatible
- **Node Version**: Sanity packages have engine requirements (Node >=20.19 <22 || >=22.12)

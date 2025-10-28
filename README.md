# Real Estate Website Builder — Frontend

A frontend-only implementation plan for a templated, AI-assisted real estate website builder. This single README provides the project overview, tech choices, structure, routes, components, data models, and a step-by-step build roadmap tailored for Next.js.

## 1) Overview
- Goal: Build a multi-template real estate site generator with a builder wizard and live preview.
- Output: SEO-friendly sites with Home, Listings, Property Detail, About, Contact, and optional Blog.
- Constraint: Frontend-only for now; use mock data and stub APIs.

## 2) Core Features (Frontend)
- Template-driven pages (modern, luxury, minimal, commercial styles).
- Listings grid with filters and pagination.
- Property detail page with gallery, amenities, map embed, and inquiry form.
- Builder wizard: template selection, pages selection, brand/theme configuration, content upload, preview.
- Theme system: brand-aware colors, fonts, spacing tokens.
- SEO-ready metadata and accessible components.

## 3) Tech Stack
- Framework: Next.js (App Router, SSR/SSG for SEO).
- Styling: Tailwind CSS; optional `shadcn/ui` for accessible primitives.
- State: Zustand (simple global store) or Redux Toolkit (optional).
- Forms: `react-hook-form` + `zod` validation.
- Images: `next/image` with responsive sizes.
- SEO: `next-seo` (or native Next.js `metadata`).
- Motion: `framer-motion` (optional for tasteful animations).

## 4) Requirements
- Node.js ≥ 18.x and npm ≥ 9.x (or pnpm/yarn).
- A modern browser for testing.

## 5) Setup (Local)
```bash
# Create Next.js app (choose TypeScript, Tailwind)
npx create-next-app@latest real-estate-web --ts --tailwind
cd real-estate-web

# Optional: add UI and utilities
npm install zustand react-hook-form zod next-seo framer-motion lucide-react
# If using shadcn/ui
npm install sonner class-variance-authority tailwind-merge
```

Tailwind configuration should enable CSS variables for theming. If you prefer to keep everything in this folder, create the app at `c:\Users\Abrar\Documents\Projects\real-estate-website-builder\real-estate-web`.

## 6) Project Structure (Proposed)
```
real-estate-web/
├─ app/                     # App Router pages
│  ├─ (site)/[siteId]/      # Tenant/site-specific routes
│  │  ├─ page.tsx           # Home
│  │  ├─ listings/page.tsx
│  │  ├─ listings/[propertyId]/page.tsx
│  │  ├─ about/page.tsx
│  │  ├─ contact/page.tsx
│  │  └─ blog/(list)/page.tsx
│  ├─ builder/page.tsx      # Builder wizard + preview
│  └─ layout.tsx
├─ components/              # Reusable UI blocks
├─ lib/                     # Utilities (filters, formatting, SEO)
├─ store/                   # Zustand store
├─ styles/                  # Tailwind and theme tokens
├─ data/                    # Mock JSON (sites, listings)
└─ public/                  # Static assets (logos, placeholders)
```

## 7) Routing & Pages
- `/:siteId` Home: hero, featured listings, CTA.
- `/:siteId/listings`: grid with filters (`price`, `type`, `location`, `beds`, `baths`).
- `/:siteId/listings/[propertyId]`: gallery, price, description, map, amenities, inquiry form.
- `/:siteId/about`: brand story, team, mission.
- `/:siteId/contact`: contact form + map embed.
- `/:siteId/blog`: optional posts list; detail page when needed.
- `/builder`: setup wizard with live preview.

## 8) Key Components (Initial Set)
- Layout: `Navbar`, `Footer`, `ThemeSwitcher`.
- Home: `Hero`, `FeaturedListings`, `Testimonials` (optional).
- Listings: `PropertyCard`, `FilterBar`, `Pagination`.
- Property Detail: `ImageGallery`, `AmenityList`, `MapEmbed`, `InquiryForm`.
- Contact: `ContactForm`, `MapEmbed`.
- Builder: `TemplatePicker`, `PageSelector`, `BrandThemePanel`, `ContentUploader`, `AIActionPanel` (stub), `PreviewPane`.

## 9) State & Data Models
Use TypeScript interfaces for clarity:
```ts
// data/types.ts
export type PropertyType = 'apartment' | 'house' | 'villa' | 'commercial' | 'land';
export interface Location {
  address?: string;
  city: string;
  state?: string;
  country: string;
  lat?: number;
  lng?: number;
}
export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  price: number;
  currency: 'USD' | 'EUR' | 'GBP' | 'PKR' | 'AED';
  location: Location;
  areaSqFt?: number;
  beds?: number;
  baths?: number;
  amenities?: string[];
  images: string[];
  description?: string;
  status?: 'available' | 'sold' | 'pending';
  yearBuilt?: number;
  parking?: boolean;
}
export interface SiteTheme {
  primaryColor: string;
  secondaryColor?: string;
  fontFamily?: string;
  tone?: 'professional' | 'luxury' | 'friendly' | 'minimal';
}
export interface SiteBrand {
  siteId: string;
  name: string;
  logoUrl?: string;
  theme: SiteTheme;
  selectedTemplate: string;
}
```

Global state for the builder:
```ts
// store/builder.ts
import { create } from 'zustand';
import type { Property, SiteBrand } from '../data/types';

interface BuilderState {
  brand: SiteBrand | null;
  properties: Property[];
  selectedPages: string[]; // ['home','listings','detail','about','contact','blog']
  selectedTemplate: string | null;
  setBrand: (b: SiteBrand) => void;
  setProperties: (p: Property[]) => void;
  setSelectedPages: (pages: string[]) => void;
  setSelectedTemplate: (t: string) => void;
}

export const useBuilderStore = create<BuilderState>((set) => ({
  brand: null,
  properties: [],
  selectedPages: ['home', 'listings', 'detail', 'about', 'contact'],
  selectedTemplate: null,
  setBrand: (brand) => set({ brand }),
  setProperties: (properties) => set({ properties }),
  setSelectedPages: (selectedPages) => set({ selectedPages }),
  setSelectedTemplate: (selectedTemplate) => set({ selectedTemplate }),
}));
```

## 10) Theme System
- Use CSS variables for color tokens applied via Tailwind. Example:
```css
/* styles/theme.css */
:root {
  --color-primary: #0ea5e9; /* sky-500 */
  --color-secondary: #111827; /* gray-900 */
  --font-sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
}
.theme-luxury { --color-primary: #b45309; --font-sans: 'Playfair Display', serif; }
.theme-minimal { --color-primary: #0f766e; --font-sans: Inter, ui-sans-serif; }
```
- Tailwind usage: `text-[color:var(--color-primary)]` or custom plugin mapping `var(--color-primary)` to `text-primary`.

## 11) Builder Wizard (MVP)
- Steps: Template → Pages → Brand/Theme → Content → Preview.
- Live preview: right-side pane mirrors state; swapping template and theme at runtime.
- Content upload: drag/drop images; text fields for property details; import JSON for quick listings.
- AI actions: stub buttons with `generate` placeholders for text/image; later integrate APIs.

## 12) SEO & Accessibility
- Use Next.js `metadata` or `next-seo` to define title, description, OG tags per page.
- Semantic HTML, labeled inputs, keyboard navigation, visible focus states, and color contrast.
- Generate a static `sitemap.xml` for demo; later dynamic by site.

## 13) Performance Notes
- `next/image` with appropriate `sizes` and `placeholder="blur"`.
- Lazy-load heavy sections (maps, gallery lightbox).
- Code-split optional pages (blog) and template-specific blocks.

## 14) Mock Data Examples
```json
// data/properties.json
[
  {
    "id": "p-001",
    "title": "Modern 3BR Apartment in Downtown",
    "type": "apartment",
    "price": 250000,
    "currency": "USD",
    "location": { "city": "Karachi", "country": "Pakistan" },
    "beds": 3,
    "baths": 2,
    "amenities": ["Gym", "Pool", "Elevator"],
    "images": ["/images/p-001-1.jpg", "/images/p-001-2.jpg"],
    "description": "Bright apartment with city views and modern finishes.",
    "status": "available"
  }
]
```

```json
// data/site.json
{
  "siteId": "demo-agency",
  "name": "Devscot Realty",
  "logoUrl": "/logos/devscot.png",
  "theme": { "primaryColor": "#0ea5e9", "tone": "professional" },
  "selectedTemplate": "modern"
}
```

## 15) Template Registry (Example)
```ts
// lib/templates.ts
export interface TemplateMeta {
  id: string; // 'modern' | 'luxury' | 'minimal' | 'commercial'
  name: string;
  style: 'modern' | 'luxury' | 'minimal' | 'commercial';
  layoutSections: Array<'hero' | 'featured' | 'grid' | 'gallery' | 'testimonial' | 'cta'>;
}

export const TEMPLATES: TemplateMeta[] = [
  { id: 'modern', name: 'Modern', style: 'modern', layoutSections: ['hero','featured','grid','cta'] },
  { id: 'luxury', name: 'Luxury', style: 'luxury', layoutSections: ['hero','featured','testimonial','cta'] },
  { id: 'minimal', name: 'Minimal', style: 'minimal', layoutSections: ['hero','grid','cta'] },
  { id: 'commercial', name: 'Commercial', style: 'commercial', layoutSections: ['hero','featured','grid'] },
];
```

## 16) Roadmap & Tasks
- Phase 1: Scaffold Next.js app, Tailwind, base layout, Home + Listings with mock data.
- Phase 2: Filters and pagination; `PropertyCard` with responsive images.
- Phase 3: Property detail page (gallery, amenities, map embed, inquiry form).
- Phase 4: Builder wizard MVP with live preview; template/theme switching.
- Phase 5: SEO metadata, sitemap, accessibility polish.
- Phase 6: Optional pages (About, Contact, Blog) and template refinements.

## 17) How to Run (after scaffold)
```bash
npm run dev
# Open http://localhost:3000 and visit /builder to test the wizard
# Visit /demo-agency, /demo-agency/listings, and /demo-agency/listings/p-001
```

## 18) Notes & Future Enhancements
- Add CSV/JSON bulk import for Quick Generate mode.
- Switch map from simple embed to Leaflet/Google Maps.
- Integrate AI providers for text/image generation with caching.
- Multi-tenant hosting and custom domains (future backend work).

---

This README is the single source of truth for the frontend build. You can start with Phase 1 and iterate through the roadmap. If you prefer merging this into `myproject.md`, we can consolidate in one file.
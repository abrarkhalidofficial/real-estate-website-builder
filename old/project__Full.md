# Master Prompt: Real Estate Builder (Next.js + Puck Editor + Tailwind)

You are an expert full‑stack engineer. Build a production‑ready **Real Estate Website Builder** using **Next.js (App Router, TypeScript)**, **Tailwind CSS**, **shadcn/ui**, and **Puck Editor** ([https://puckeditor.com/docs](https://puckeditor.com/docs)). The app lets users choose a template, open a visual editor (Puck) to customize sections, and then **preview, save, and export** their site as static HTML or React code. Include **dark/light mode** everywhere.

---

## 1) Tech Stack & Libraries

- **Framework:** Next.js 14+ (App Router, TypeScript, Server Actions)
- **Styling:** Tailwind CSS, CSS variables for theming, class-variance-authority (cva) optional
- **UI Kit:** shadcn/ui (Button, Card, Dialog, Tabs, DropdownMenu, Tooltip, Switch, Sheet, Input, Textarea, Badge, Separator, ThemeToggle)
- **Editor:** **Puck** (visual editor) with custom blocks for sections (Hero, Home Listings, About, FAQ, Testimonials, Portal)
- **State:** Zustand (or Redux Toolkit) for builder state (selected template, theme, page data)
- **Storage (Phase 1):** LocalStorage + optional file download; export to .zip
- **Storage (Phase 2 optional):** Prisma + SQLite/Postgres for user accounts & saved projects
- **Auth (stub):** NextAuth.js (Credentials + GitHub/Google providers) — scaffolding only
- **Misc:** next-themes for theme toggling, lucide-react icons, zod for schema validation, JSZip for export, html-to-react export utilities

---

## 2) App Capabilities (MVP)

1. **Home Page** (`/`)

   - **Hero Section** with large background (image/video), headline: **“Create Your Real Estate Website Easily”**, CTA button **“Guest Study”** that scrolls to Templates grid.
   - **Templates Section** with cards:

     - _Luxury Villas Template_
     - _Commercial Properties Template_
     - _Housing Society Template_
       Each card: image, name, **View Template** button → routes to `/builder?template={id}`.

2. **Builder Page** (`/builder`)

   - Uses **Puck** visual editor.
   - **Sections (as Puck blocks):**

     - **Hero** (editable text, background image/video, CTAs)
     - **Home Listings** (grid of property cards)
     - **About Us** (rich text, team photos)
     - **FAQ** (Q/A list)
     - **Testimonials** (carousel)
     - **Portal** (contact form OR login/signup stub OR property upload stub)

   - **Features:** real‑time editing (inline in Puck), add/remove/reorder sections, edit colors, images, and content.
   - **Dark/Light Mode toggle** (next-themes) that affects both the editor chrome and the rendered preview.
   - **Preview Mode** in a new route or in a Drawer that renders the compiled page read‑only.
   - **Save** to LocalStorage ("projects" key with timestamp) and **Export**:

     - **Export Static HTML** (single index.html + assets)
     - **Export React/Next component** (TSX + assets)

3. **Preview Page** (`/preview/[projectId]` or `/preview` with in‑memory state)

   - Renders the user’s composed page exactly as it will look when published.

4. **(Optional) Dashboard** (`/dashboard`)

   - Lists saved projects; actions: Open in Builder, Duplicate (Clone), Delete.

5. **AI Content Helper (stub)**

   - Right‑side panel with form: _Generate property description_ from fields (title, location, size, price, amenities). Uses a mock function now; architect a provider interface so a real LLM can be plugged in later.

6. **SEO settings (per template/page)**

   - Title, description, open graph image. Preview in UI.

---

## 3) Data Models (zod + TypeScript)

- `Property`:

  ```ts
  id: string
  title: string
  description: string
  price: number
  location: string
  bedrooms?: number
  bathrooms?: number
  areaSqFt?: number
  images: string[]
  features: string[] // e.g., Pool, Garden, Parking
  status: 'for-sale' | 'for-rent' | 'sold'
  contactEmail?: string
  ```

- `Section` (discriminated union for Puck blocks): `type: 'hero' | 'listings' | 'about' | 'faq' | 'testimonials' | 'portal'` with block‑specific props.
- `PageData`:

  ```ts
  id: string
  name: string
  theme: 'light' | 'dark' | 'system'
  sections: Section[]
  seo?: { title?: string; description?: string; ogImage?: string }
  templateId: string
  updatedAt: string
  ```

---

## 4) Puck Editor Integration

- Define custom **blocks** matching sections above, each with:

  - **Fields** (text, rich text, media, color pickers, repeaters)
  - **Render** component (shadcn cards, grid, responsive)
  - **Validation** via zod

- Provide **default content** per template. When opening `/builder?template=...`, preload the matching block list & defaults.
- Add **Block Library** panel for adding new sections.
- Implement **drag‑to‑reorder** and **delete** for sections.

---

## 5) UI/UX Requirements

- **Responsive** (mobile → desktop) with Tailwind; use `container`, `grid`, `aspect-video`, `object-cover` helpers.
- **Dark/Light mode**: via `next-themes` + Tailwind `data-theme` or class `dark`; ensure cards, inputs, editor, and preview all switch.
- **Accessibility**: proper headings, labels, color contrast, keyboard nav.
- **Animations**: subtle with Framer Motion (fade/slide on section add/remove and in hero).

---

## 6) Routes & API

- **Routes**

  - `/` — Landing + Templates
  - `/builder` — Visual editor
  - `/preview` — Preview current state
  - `/dashboard` (optional)

- **API (route handlers)**

  - `POST /api/projects` — save page data (for Phase 1, just return echo and also write to LocalStorage on client)
  - `GET /api/projects/:id` — fetch page data (stub for future DB)
  - `POST /api/export/html` — return a **.zip** with `index.html`, `styles.css`, `assets/`
  - `POST /api/export/react` — return a **.zip** with `components/`, `pages/` or `app/` entries

---

## 7) Templates (Defaults)

Create three templates with seeded blocks:

1. **Luxury Villas**

   - Hero (bg video option), Listings (premium features), About (brand story), Testimonials.

2. **Commercial Properties**

   - Hero (city skyline), Listings (office/retail/warehouse filter chips), FAQ, Portal (contact form for leasing).

3. **Housing Society**

   - Hero (community), About (amenities), Listings (plots/houses), FAQ, Testimonials, Portal.

Each template includes color palette presets and sample images (royalty‑free placeholders).

---

## 8) Export Details

- **HTML export** should inline a minimal CSS or include a generated `styles.css` (compiled Tailwind or limited utility subset). Render each block to static HTML.
- **React export** produces TSX components per block + a `Page.tsx` composing them from a JSON `pageData.json`.
- Use **JSZip** to compile downloadable ZIPs. Provide a toast on success.

---

## 9) Components (example list)

- `components/ui/theme-toggle.tsx`
- `components/editor/puck-provider.tsx`
- `components/editor/block-hero.tsx`
- `components/editor/block-listings.tsx`
- `components/editor/block-about.tsx`
- `components/editor/block-faq.tsx`
- `components/editor/block-testimonials.tsx`
- `components/editor/block-portal.tsx`
- `components/site/property-card.tsx`
- `components/site/navbar.tsx`, `components/site/footer.tsx`
- `components/site/section-wrapper.tsx` (handles padding/background/theme)

---

## 10) File Structure

```
app/
  layout.tsx
  page.tsx              // Landing + Templates
  builder/page.tsx      // Puck editor canvas
  preview/page.tsx      // Read‑only preview
  api/
    export/html/route.ts
    export/react/route.ts
    projects/route.ts
components/
  ui/* (shadcn)
  editor/* (puck blocks + provider)
  site/* (rendered blocks)
lib/
  schemas.ts
  templates.ts          // default templates & seed data
  export-html.ts        // render-to-string for HTML
  export-react.ts       // zip builder for React
  storage.ts            // LocalStorage helpers / (future) Prisma client
public/
  images/templates/*
```

---

## 11) Core Implementations (Important)

### a) Theme Toggle

- Use `next-themes`; store `theme` in PageData; synchronize with editor and preview.

### b) Puck Blocks (examples)

- **HeroBlock** fields: `heading`, `subheading`, `ctaLabel`, `ctaHref`, `bgType: 'image'|'video'`, `bgSrc`, `overlayOpacity`.
- **ListingsBlock** fields: `properties: Property[]`, `layout: 'grid'|'masonry'`, optional category filter chips.
- **FAQBlock** fields: `items: { q: string; a: string }[]` with add/remove.
- Provide `render` functions that return shadcn‑styled sections.

### c) Save / Load

- Persist `PageData` to LocalStorage under `projects:{id}`; index maintained in `projects:index`.

### d) Export

- `POST /api/export/html` accepts `PageData`, returns zip (server action or route handler). Use `renderToStaticMarkup` (React DOM Server) or a custom renderer per block.
- `POST /api/export/react` packs TSX files and JSON data; include README with usage.

### e) Portal Section

- For MVP, a simple **contact form** (name, email, message) with client‑side validation. Submit → show toast; (no backend).

---

## 12) i18n & Urdu/English Labels (optional)

- Add basic i18n JSON so hero text can be Urdu/English. Example Urdu strings included in seed content.

---

## 13) SEO & Performance

- Add `metadata` export on routes; OpenGraph image placeholders.
- Optimize images with `next/image`.
- Lighthouse targets: Perf > 90, A11y > 90.

---

## 14) Testing & Quality

- Unit tests for block renderers (Jest + Testing Library).
- E2E happy path: pick template → edit → preview → export.
- Type‑safe zod schemas for all block data; validate on save/export.

---

## 15) Commands & Setup

```bash
pnpm create next-app real-estate-builder --ts --eslint --app --src-dir
cd real-estate-builder
pnpm add tailwindcss postcss autoprefixer @radix-ui/react-icons class-variance-authority lucide-react next-themes zustand zod framer-motion jszip
# shadcn/ui setup (follow docs) and Puck editor per https://puckeditor.com/docs
pnpm dlx shadcn-ui@latest init
# generate needed shadcn components (button, card, dialog, etc.)
```

- Provide `README.md` with run/export instructions.

---

## 16) Acceptance Criteria (MVP)

- User can pick any of the 3 templates on `/` and land in `/builder?template=...` with preloaded blocks.
- In Builder, user can **add/remove/reorder** sections and edit content live.
- **Dark/Light toggle** changes both editor UI and rendered content instantly.
- **Preview** shows the composed page pixel‑perfect.
- **Save** stores project to LocalStorage and appears in (optional) Dashboard.
- **Export HTML** downloads a zip with a working `index.html` that matches the preview.
- **Export React** downloads a zip with TSX components + `Page.tsx` + `pageData.json`.

---

## 17) Stretch Goals (Phase 2)

- Publish to subdomain: `username.realestatebuilder.com` (Vercel projects API stub)
- User accounts with NextAuth + Prisma
- Property CSV import
- Image uploads via UploadThing/Cloudinary
- Real AI Content Helper via provider (OpenAI/Anthropic) with safety + templates
- Per‑section SEO overrides and sitemap generator

> Build clean, typed, and well‑commented code. Favor composition, small components, and clear separation between **editor data** and **rendered components**. Ensure all exports are deterministic from `PageData`. Done.

i can make this project u can give me steps in this project only fronend

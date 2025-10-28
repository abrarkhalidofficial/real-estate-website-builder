# Step 6 — SEO, Accessibility, Optional Pages

Goal: Add SEO metadata, sitemap, accessibility improvements, and build optional pages (About, Contact, Blog).

## SEO Metadata
- Option A: Use Next.js `metadata` per route (App Router).
- Option B: Use `next-seo` for configurable titles, descriptions, OG tags.

Example with `next-seo`:
```ts
import { NextSeo } from 'next-seo';
export default function Page() {
  return (
    <>
      <NextSeo title="Devscot Realty" description="Real estate listings and properties" />
      {/* page content */}
    </>
  );
}
```

## Sitemap
- Generate static `sitemap.xml` for demo at build time.
- Later: dynamic sitemap per `siteId`.

## Accessibility
- Use semantic HTML (landmarks: `header`, `nav`, `main`, `footer`).
- Ensure color contrast on themed components.
- Keyboard access for menus, galleries, dialogs.
- Labeled form controls and aria attributes where necessary.

## Optional Pages
- `/:siteId/about`: brand story, team bios.
- `/:siteId/contact`: contact form + map embed, address details.
- `/:siteId/blog`: list and detail pages (markdown or mock JSON).

## Performance
- Optimize images with `next/image` and proper `sizes`.
- Lazy-load heavy components (maps, gallery lightbox).
- Split code per route and avoid blocking scripts.

## Deliverables
- SEO metadata implemented
- Sitemap generated
- Accessibility checklist applied
- About, Contact, and optional Blog pages scaffolded

---

After Step 6, the frontend MVP is feature-complete and ready for polish.
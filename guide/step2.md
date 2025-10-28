# Step 2 — Base Layout and Theme

Goal: Create the base layout, theme tokens, and scaffold Home + Listings pages with mock data.

## Folder structure (proposed)
```
real-estate-web/
├─ app/
│  ├─ (site)/[siteId]/
│  │  ├─ page.tsx              # Home
│  │  └─ listings/page.tsx     # Listings
│  ├─ builder/page.tsx         # Builder wizard (later)
│  └─ layout.tsx               # Global layout
├─ components/
├─ store/
├─ lib/
├─ styles/
├─ data/
└─ public/
```

## Theme tokens (CSS variables)
- Create `styles/theme.css` and import it in `app/layout.tsx`.
- Define variables for primary color, secondary color, and font.

Example:
```css
/* styles/theme.css */
:root {
  --color-primary: #0ea5e9; /* sky-500 */
  --color-secondary: #111827; /* gray-900 */
  --font-sans: Inter, ui-sans-serif, system-ui;
}
.theme-luxury { --color-primary: #b45309; --font-sans: 'Playfair Display', serif; }
.theme-minimal { --color-primary: #0f766e; --font-sans: Inter, ui-sans-serif; }
```

## Layout components
- `components/Navbar.tsx`: logo, nav links (`Home`, `Listings`, `About`, `Contact`).
- `components/Footer.tsx`: copyright, quick links, contact info.

## Home page skeleton
- `app/(site)/[siteId]/page.tsx` contains:
  - Hero section (headline, CTA)
  - Featured listings (use `data/properties.json` later)

## Listings page skeleton
- `app/(site)/[siteId]/listings/page.tsx` contains:
  - Grid layout to display properties
  - Placeholder filters (price, type, location)

## Deliverables
- Base layout with Navbar and Footer
- Theme CSS variables applied
- Home and Listings routes exist with placeholders

---

Next: Listings data, filters, cards, and pagination.
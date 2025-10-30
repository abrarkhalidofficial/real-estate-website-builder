# Frontend‑Only Build Plan (No Backend, No Code)

This is a clear, implementation-ready plan without any code. It is arranged as phases with checklists, deliverables, and acceptance criteria.

---

## Phase 1 — Project Setup & Conventions

**Objective:** Create a consistent frontend foundation.

**Tasks**

1. Initialize Next.js (App Router, TypeScript, ESLint, Tailwind).
2. Install UI dependencies: shadcn/ui set (Button, Card, Dialog, Tabs, DropdownMenu, Tooltip, Switch, Sheet, Input, Textarea, Badge, Separator, Toast), next-themes, Zustand, Zod, Framer Motion, JSZip, lucide-react.
3. Configure Tailwind with `darkMode: class` and content paths including `node_modules/@measured/puck`.
4. Establish directory structure: `app/`, `components/ui`, `components/editor`, `components/site`, `lib/`, `public/images/templates`.
5. Define code style: Prettier rules, ESLint config, commit hooks (optional).

**Deliverables**

- Running Next app with Tailwind and shadcn/ui components available.

**Accept Criteria**

- App boots; theming provider is wired; UI primitives render in a sample page.

---

## Phase 2 — Types, Schemas & State

**Objective:** Formalize data models and a single source of truth for the builder.

**Tasks**

1. Define Zod schemas for `Property`, each block type (`hero`, `listings`, `about`, `faq`, `testimonials`, `portal`), and `PageData` (theme + sections + SEO + metadata).
2. Create a Zustand store to hold the current `PageData` and provide actions to set page, add/update/remove/reorder sections, and change theme.
3. Add LocalStorage helpers to save/load/list project IDs and their JSON blobs.

**Deliverables**

- Validated types and a store API used by all pages.

**Accept Criteria**

- Store updates correctly mutate sections and timestamps; schemas parse on save/export.

---

## Phase 3 — Templates & Seed Data

**Objective:** Provide three ready-to-use default templates.

**Tasks**

1. Author seed `PageData` for:

   - Luxury Villas (Hero, Listings, About, Testimonials)
   - Commercial Properties (Hero, Listings, FAQ, Portal)
   - Housing Society (Hero, About, Listings, FAQ, Testimonials, Portal)

2. Include lightweight copy and placeholder images stored under `public/images/templates`.
3. Expose a template map usable by the Builder and Landing.

**Deliverables**

- `TEMPLATES` record with three entries and sensible defaults.

**Accept Criteria**

- Selecting a template hydrates the builder with matching blocks.

---

## Phase 4 — Landing Page ("/")

**Objective:** Market the builder and route to `/builder` with the chosen template.

**Tasks**

1. Hero section with headline and CTA that scrolls to Templates grid.
2. Templates grid (3 cards) that route to `/builder?template={id}`.
3. Theme toggle in the header; ensure dark/light variations.

**Deliverables**

- Polished landing with accessible headings and navigation.

**Accept Criteria**

- Clicking a card lands in the builder preloaded with that template.

---

## Phase 5 — Puck Integration (Editor Core)

**Objective:** Set up Puck as the visual editor for sections.

**Tasks**

1. Create a Puck provider component configured with our custom blocks.
2. Configure DnD backend; enable add/remove/reorder for sections.
3. Hook Puck `onChange` to sync with Zustand `PageData`.
4. Provide a block library panel with our section types.

**Deliverables**

- Editor canvas that reflects and mutates the current page sections.

**Accept Criteria**

- Drag-to-reorder and deletion work; content edits reflect in store instantly.

---

## Phase 6 — Custom Blocks (Editable + Rendered)

**Objective:** Ship six reusable, responsive blocks with sensible defaults.

**Blocks & UX**

1. **Hero** — heading, subheading, CTA (label+href), background (image/video), overlay opacity.
2. **Listings** — grid layout, accepts an array of `Property`; optional filter chips (by category/status).
3. **About** — title, rich text body, team list (name, role, avatar).
4. **FAQ** — list of Q/A items; expandable UI.
5. **Testimonials** — list of testimonials; carousel or simple stacked with motion.
6. **Portal** — mode switch (contact / login stub / upload stub); for MVP use contact form only (local, toast on submit).

**Visual**

- Built with shadcn/ui primitives and Tailwind; responsive from mobile to desktop.
- Subtle motion (fade/slide) on section appearance.

**Accept Criteria**

- Each block exposes fields in the editor and renders accurately in the canvas.

---

## Phase 7 — Builder Page ("/builder")

**Objective:** Wrap the editor with controls and page-wide features.

**Tasks**

1. Header actions: **Save**, **Export HTML**, **Export React**, and theme toggle.
2. SEO drawer or panel: title, description, OG image preview.
3. Right-side stub panel for **AI Content Helper** (form + mock generate).
4. Synchronize `PageData.theme` with `next-themes` to affect editor and preview rendering.

**Accept Criteria**

- Save updates LocalStorage index and project blob; export triggers client downloads.

---

## Phase 8 — Preview Page ("/preview")

**Objective:** Present a read‑only rendering of the composed page.

**Tasks**

1. Render sections exactly as in the editor but without controls.
2. Use the same block components in read-only mode.
3. Read state from the store; optionally support a project ID fallback from LocalStorage.

**Accept Criteria**

- Visual parity with the editor; theme applied consistently.

---

## Phase 9 — Client‑Side Export

**Objective:** Let users export their site without any backend.

**HTML Export**

- Generate a minimal `index.html` with static markup for each section.
- Include lightweight inline styles (or a tiny stylesheet) for parity.

**React Export**

- Output `pageData.json`, per‑block TSX stubs, and a `Page.tsx` that maps JSON → components.
- Include a concise README on how to use in a React/Next project.

**Accept Criteria**

- Two ZIPs download successfully and open locally to a working page/component.

---

## Phase 10 — Theming, A11y, and Polish

**Objective:** Make the app feel production‑ready.

**Tasks**

1. Dark/Light Mode: verify all surfaces (cards, inputs, editor chrome, preview) adapt.
2. Accessibility: headings order, labels, color contrast, focus states, keyboard nav.
3. Performance: lazy‑load images, avoid heavy client bundles in blocks.
4. SEO: route metadata and OG placeholders for `/` and `/preview`.

**Accept Criteria**

- Lighthouse: Performance > 90 and Accessibility > 90 on key pages.

---

## Phase 11 — Testing & QA (Frontend only)

**Objective:** Ensure stability for the MVP.

**Tasks**

1. Unit tests for block prop validation (Zod) and simple render assertions.
2. E2E happy path script (manual or automated): pick template → edit → preview → save → export.
3. Smoke test across Chromium, Firefox, Safari; mobile viewport checks.

**Accept Criteria**

- All core flows pass; no console errors in normal use.

---

## Phase 12 — Packaging & Handover

**Objective:** Make it easy to run, modify, and deploy.

**Tasks**

1. Write a concise README: install, run, build, and how exports work.
2. Provide a list of environment‑agnostic assets (images) and how to replace them.
3. (Optional) Vercel deployment instructions (static hosting; still frontend-only).

**Accept Criteria**

- A new developer can clone, run, and export within minutes.

---

## Milestone Checklist (MVP Completion)

- [ ] Templates load into the builder from the landing page.
- [ ] Blocks can be added/removed/reordered and edited live.
- [ ] Dark/Light toggle updates editor & preview instantly.
- [ ] Preview renders the composed page pixel‑for‑pixel.
- [ ] Save persists to LocalStorage and appears in a local dashboard (optional).
- [ ] Export HTML ZIP renders a working static site.
- [ ] Export React ZIP renders a working React composition.

---

## Stretch Goals (Frontend‑friendly)

- Template color palettes and typography presets selectable per page.
- Per‑section background options (solid/gradient/image + overlay controls).
- Property CSV import (client‑side parse only) for listings.
- Drag‑handle animations and tooltip help for novice users.
- Simple i18n (English/Urdu) with a dropdown.

---

### Notes & Guardrails

- Keep the editor surfaces simple and resilient: small, composable components.
- Favor deterministic UI: all rendering derives strictly from `PageData`.
- Ensure exports are stable by minimizing runtime assumptions in generated files.

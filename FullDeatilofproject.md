# Real‑Estate “Shopify” Platform — Product & Engineering Specification

**Tech baseline:** Next.js (App Router), TypeScript, pnpm, Convex + PostgreSQL, Auth.js (NextAuth), Tailwind, shadcn/ui, Puck (puck‑react) visual editor, Vercel (hosting), S3‑compatible storage, Resend (email), Map provider (Leaflet/Mapbox/Google), optional Meilisearch/Algolia for search.

---

## 0) Vision & Elevator Pitch

A multi‑tenant platform where agencies and solo agents can create a full real‑estate website in minutes: pick a template, customize via a visual editor (Puck), add company details and listings, publish to a custom domain. Each property has a lead form; the admin can manage listings, media, teams, and track inquiries and appointments. Think Shopify, but for property marketing.

**Primary personas**

- **Owner/Admin (Agency):** Creates the site, configures branding/domain, manages team, listings, and lead workflows.
- **Agent (Editor):** Adds/edits listings, responds to inquiries, schedules tours.
- **Viewer/Buyer (Public):** Browses, filters, favorites, submits inquiries or tour requests.

**Key outcomes**

- Onboarding to published site in <15 minutes.
- <3 clicks to create a new listing.
- Clear lead/appointment pipeline per property.

---

## 1) User Journeys (Happy Paths)

1. **Signup → Create Site**

   - User signs up (email/password, OAuth). System provisions a **Tenant** and a default **Site** at `tenant.slug.platform.tld`.
   - Picks a **Template** → loads into **Theme Editor (Puck)** with default content blocks.
   - Enters **Company Details** (logo, brand colors, phone, address, social, WhatsApp link).
   - Connects **Custom Domain** (optional) with guided DNS.
   - Publishes.

2. **Add Listings**

   - Admin/Agent → **Listings > New** → form with address autofill, geo, price, beds/baths, area, type, status, description, amenities, images, floorplans, video/3D link.
   - Upload media (drag/drop, re-order, alt text). Save → property appears on public site and sitemap.

3. **Leads & Appointments**

   - Buyer visits property page → submits inquiry or **Schedule a Tour** → Admin sees **Leads Inbox** and **Calendar** → assign to an Agent → status updates (New, Contacted, Scheduled, No‑Show, Closed/Won/Lost).

4. **Customize Frontend**

   - Open **Theme Editor** → drag blocks (Hero, Featured Listings, Map Grid, Testimonials, Contact, Blog/SEO) → edit content safely via schema‑validated blocks.

5. **Analytics & Reporting**

   - Dashboard shows traffic, top listings, lead source breakdown, conversion rate, appointment show rate.

---

## 2) Information Architecture (Screens)

### Public Site (per Tenant)

- **Home** (template driven): hero, featured listings, search bar, neighborhoods.
- **Listings Index**: grid + map toggle; filters: price, beds, baths, property type, status, min/max area, features, keywords.
- **Property Detail**: gallery, key facts, map, 3D tour/video, floor plans, features, neighborhood info, similar listings, **Inquiry form**, **Schedule Tour**.
- **Saved/Favorites** (optional; cookie/session based + optional login).
- **Compare** (optional; compare up to 4 properties).
- **Pages** (About, Team, Contact) — editable via Theme Editor.
- **Blog/SEO Pages** (optional) — to drive organic traffic.
- **Auth** (if public user accounts enabled): login/signup for favorites & saved searches.

### Admin App (Tenant Back‑Office)

- **Auth**: Login, Sign up, Forgot password, 2FA (optional), Invite Member.
- **Onboarding**: Template picker → Company details → Theme Editor → Domain setup → Go Live.
- **Dashboard**: KPIs (traffic, leads, top properties), tasks, domain status, plan usage.
- **Listings**

  - List + filters (status, type, price, assigned agent).
  - Create/Edit Listing (multi‑step): Basics → Media → Details → Location → SEO → Publish.
  - Bulk actions (publish/unpublish, assign, delete).

- **Leads**

  - Leads Inbox (kanban/table), search, filters (source, property, status).
  - Lead Detail: timeline, messages, appointments, property links.
  - Appointments calendar (day/week/month), connect Google Calendar (optional).

- **Theme Editor (Puck)**

  - Blocks: Header, Footer, Hero, Search Bar, Featured Listings, Grid/Map, Testimonials, CTA, Contact, FAQ, Blog List, Team, Neighborhoods.
  - Style settings: colors, fonts, spacing, radius.

- **Media Library**: images, videos, floorplans; folders/tags; alt text, compression.
- **Content**: Pages (About/Contact), Blog posts.
- **Team & Roles**: invite members, assign roles (Owner, Admin, Agent, Viewer), per‑feature permissions.
- **Forms**: define fields for property inquiry forms (default provided); map fields to CRM/webhooks.
- **Settings**

  - Company profile.
  - Domain & SSL.
  - Integrations (Email provider, Maps, Analytics, Calendars, CRM webhooks, Chat widgets).
  - Billing & plan (if SaaS monetization).
  - Webhooks & API keys.
  - Audit Log.

---

## 3) Data Model (Convex schema outline)

> Multi‑tenant via `tenantId` on all tenant data; row‑level scoping in API.

- **Tenant**: id, name, slug, plan, status, createdAt.
- **Site**: id, tenantId, domain, subdomain, themeId, brand settings.
- **User**: id, name, email, image, auth provider fields.
- **Membership**: id, userId, tenantId, role (OWNER|ADMIN|AGENT|VIEWER).
- **Property**: id, tenantId, slug, title, status (DRAFT|PUBLISHED|ARCHIVED), listingType (SALE|RENT), price, currency, beds, baths, area, unit, yearBuilt, type (HOUSE|APT|PLOT|COMMERCIAL|VILLA|TOWNHOUSE|FARM), description, address fields, lat/lng, seo fields, featured, assignedAgentId.
- **PropertyImage**: id, propertyId, url, alt, order.
- **Amenity**: id, tenantId, name, icon.
- **PropertyAmenity**: propertyId, amenityId.
- **Floorplan**: id, propertyId, url, label, area.
- **Lead**: id, tenantId, propertyId, name, email, phone, message, source (SITE|WHATSAPP|PHONE|PORTAL|API), status (NEW|CONTACTED|SCHEDULED|WON|LOST), assignedToId, meta (JSON), createdAt.
- **Appointment**: id, leadId, propertyId, agentId, startAt, endAt, location, status (SCHEDULED|DONE|NO_SHOW|CANCELLED).
- **Form**: id, tenantId, name, schema (JSON), active.
- **FormSubmission**: id, tenantId, formId, propertyId?, payload (JSON), createdAt.
- **Theme**: id, tenantId, name, config (JSON of Puck blocks), version.
- **Page**: id, tenantId, slug, title, content (JSON), seo.
- **Media**: id, tenantId, url, kind, size, meta.
- **Webhook**: id, tenantId, url, secret, events.
- **AuditLog**: id, tenantId, actorId, action, target, delta (JSON), createdAt.
- **SavedProperty**: id, tenantId, userId? or sessionId, propertyId, createdAt.

**Example JSON: Property (public API)**

```json
{
  "id": "prop_123",
  "title": "Modern 3BR Apartment in DHA",
  "slug": "modern-3br-apartment-dha",
  "listingType": "RENT",
  "price": 250000,
  "currency": "PKR",
  "beds": 3,
  "baths": 3,
  "area": 2100,
  "unit": "sqft",
  "type": "APT",
  "address": {
    "line1": "Street 5, DHA Phase 6",
    "city": "Karachi",
    "country": "PK"
  },
  "location": { "lat": 24.8607, "lng": 67.0011 },
  "images": [{ "url": "https://.../1.jpg", "alt": "Living room" }],
  "amenities": ["Parking", "Gym", "Pool"],
  "seo": { "title": "3BR in DHA Phase 6", "description": "..." }
}
```

---

## 4) Routing & URLs

- **Public**

  - `/` — Home (theme driven)
  - `/listings` — index + filters; optional `/listings/map` map view
  - `/listings/[slug]` — property detail
  - `/neighborhoods/[slug]` — optional taxonomy pages
  - `/favorites` — saved properties
  - `/compare` — compare tray
  - `/contact` — contact page
  - `/api/public/properties` — JSON feed (paginated)
  - `/sitemap.xml`, `/robots.txt`, OpenGraph images per property

- **Admin** (mounted under `/admin`)

  - `/admin` dashboard
  - `/admin/listings` list
  - `/admin/listings/new` & `/admin/listings/[id]`
  - `/admin/leads`, `/admin/leads/[id]`
  - `/admin/appointments`
  - `/admin/editor` (Theme Editor)
  - `/admin/content/pages`, `/admin/content/blog`
  - `/admin/media`
  - `/admin/team`
  - `/admin/forms`
  - `/admin/settings/*`

**Multi‑tenant resolution**

- Middleware inspects **Host** header: `site.custom.tld` or `tenant.platform.tld` → resolve tenant/site.
- Admin app hosted on root domain (e.g., `app.platform.tld`).

---

## 5) Theme System (Puck)

- **Block library** (typed schemas):

  - `Hero`, `SearchBar`, `FeaturedListings`, `ListingsGrid`, `MapWithGrid`, `Testimonials`, `Team`, `Neighborhoods`, `RichText`, `CTA`, `FAQ`, `ContactForm`, `Footer`, `Header`.

- **Theme config JSON**: persisted in `Theme.config`; rendered server‑side.
- **Safe editing**: Zod schemas enforce shape; content editors cannot break layout.
- **Template marketplace**: prebuilt JSON configs + style tokens.

---

## 6) Search & Filters

- **Baseline**: Postgres full‑text + indexed columns; server components stream filters.
- **Enhanced (optional)**: Meilisearch/Algolia index for typo‑tolerance, geo‑radius, and facets.
- **Filters**: price range, beds, baths, property type, listing type, status, area range, features, city/neighborhood, keywords.
- **Sort**: newest, price up/down, featured.

---

## 7) Forms & Lead Handling

- Default **Property Inquiry Form** fields: name, email, phone, message, consent.
- **Per‑property form** mapping to Lead; source captured; hidden fields include property id, page URL, UTM params.
- **Auto‑reply email** to inquirer; **assignment rules** (round‑robin or by assigned agent).
- **Pipeline**: statuses + notes; export CSV; webhooks to CRM (HubSpot, Pipedrive) via Settings.

---

## 8) Security, Privacy, Compliance

- Auth.js sessions (JWT or DB). Role‑based checks server‑side.
- Multi‑tenant isolation by `tenantId` checks in all queries.
- CSRF for actions; rate limiting on public forms; CAPTCHA (hCaptcha) optional.
- Media access is public by default; private presigned URLs available for drafts.
- GDPR/CCPA basics: data export/delete per tenant; DPA template.
- AuditLog on critical actions.

---

## 9) Accessibility & Performance

- WCAG 2.1 AA: keyboard nav, focus states, alt text requirements, color contrast tokens.
- Image optimization (`next/image`), ISR/Full SSR for SEO pages, edge caching.
- Core Web Vitals budgets; lazy gallery; map hydration only when visible.

---

## 10) Non‑Functional Requirements

- Uptime 99.9% (SLA goal), P95 TTFB < 300ms on cached pages.
- Page limit: 10k listings per tenant (scalable); media up to 50GB per tenant (plan‑based).
- Backups daily (DB + media manifests).

---

## 11) API Design (App Router handlers)

**Auth**

- `POST /api/auth/*` (Auth.js routes)

**Properties**

- `GET /api/properties` — list; tenant‑scoped; supports filters via query params.
- `POST /api/properties` — create (ADMIN/AGENT).
- `GET /api/properties/:id`
- `PATCH /api/properties/:id`
- `DELETE /api/properties/:id`

**Leads**

- `POST /api/leads` — submit inquiry (public).
- `GET /api/leads` (ADMIN/AGENT)
- `PATCH /api/leads/:id` — update status/assignment.

**Forms**

- `GET/POST /api/forms`
- `POST /api/forms/:id/submit`

**Media**

- `POST /api/media/upload` — get presigned URL; `PUT` to S3; callback persists.

**Theme/Pages**

- `GET /api/theme`
- `PATCH /api/theme`
- `GET/POST /api/pages`

**Webhooks**

- `POST /api/webhooks/:provider` — CRM events; `X‑Signature` HMAC verify.

**Public Feeds**

- `GET /api/public/properties` (CORS enabled, read‑only)

---

## 12) Component Library (shadcn/ui + Tailwind)

- **UI primitives**: Button, Input, Select, Checkbox, Dialog, Drawer, Tabs, Badge, Card, Table, Pagination, Toast, Tooltip.
- **Composite**: PropertyCard, PropertyFilters, PriceRange, BedsBathsPicker, MapView, Gallery, LeadForm, AppointmentModal, Calendar, EditorBlockRenderer, MediaUploader, AgentAvatar, StatusPill.

---

## 13) Admin Screen Specs (Wireframe Descriptions)

**Dashboard**

- KPI cards: Active Listings, New Leads (7d), Appts this week, Top Property by views.
- Charts: views vs leads; table of recent leads; domain status banner; tasks.

**Listings List**

- Table columns: Title, Status, Type, Price, City, Updated, Assigned Agent, Actions.
- Bulk select; quick filters; new listing button.

**Create/Edit Listing**

- Step 1 Basics: title, listing type, price, status, type.
- Step 2 Media: gallery upload, re‑order, alt text.
- Step 3 Details: beds, baths, area, year built, amenities.
- Step 4 Location: address autocomplete, lat/lng map picker.
- Step 5 SEO: slug, meta title/desc, OG image.
- Publish toggle; preview link.

**Leads Inbox**

- Left: filters; Middle: table/kanban; Right: lead detail with timeline.
- Actions: assign, change status, schedule appointment, send email.

**Theme Editor**

- Left: block library; Center: live preview; Right: block props panel + theme styles.

**Media Library**

- Grid with file size, type, used in (n) listings; bulk delete.

**Team & Roles**

- Invite by email; set role; reassign ownership.

**Settings**

- Company profile; domain; integrations; billing; webhooks; audit log.

---

## 14) Public Site Screens (Wireframe Descriptions)

**Home**

- Hero with search; Featured Listings (3–6); Neighborhoods; CTA.

**Listings Index**

- Filters drawer (mobile), sidebar (desktop); infinite scroll; map toggle.

**Property Detail**

- Sticky gallery + facts; CTA buttons (Call, WhatsApp, Email, Schedule Tour); amenities grid; map; similar properties; structured data markup.

**Favorites**

- Grid of saved properties; export/share link.

**Compare**

- Table comparing price, beds, baths, area, features, location.

**Contact**

- General inquiry form + office info and map.

---

## 15) Multi‑Tenancy & Domains

- Each tenant has `subdomain.platform.tld` by default.
- Custom domain: verification via DNS CNAME; auto‑provision TLS (Vercel/Cloudflare).
- Edge middleware loads tenant by host; caches theme + navigation; ISR for public pages.

---

## 16) Emails & Notifications

- Transactional via Resend: new lead to agent, auto‑reply to buyer, appointment reminders, domain verified, billing receipts.
- Digest emails (daily/weekly) with KPIs.
- Web push (optional) for new leads.

---

## 17) Analytics & SEO

- First‑party analytics (tinybird/plausible) or Vercel Analytics.
- Event tracking: property_view, lead_submit, appointment_booked.
- SEO: per‑property metadata, canonical URLs, JSON‑LD (RealEstateListing), sitemap generation, image alt text required.

---

## 18) Mock Data & Seeding

- `pnpm db:seed` creates:

  - 1 Tenant + Site ("Acme Realty").
  - 3 Users (owner, admin, agent).
  - 24 Properties mixed rent/sale across Karachi/Lahore/Islamabad with realistic ranges.
  - Amenities catalog.
  - 30 Leads randomly mapped to properties + few appointments.
  - Theme config with a starter homepage.

**Sample seed (pseudo)**

```ts
await Convex.tenant.create({ data: { name: "Acme Realty", slug: "acme" } });
```

---

## 19) Project Structure (pnpm Monorepo)

```
/apps
  /app        # Admin + Back‑office (Next.js App Router)
  /site       # Public multi‑tenant site (optional split; or merge into /app)
/packages
  /ui         # shadcn/ui + custom components
  /config     # eslint, tsconfig, tailwind config shared
  /db         # Convex schema & client
  /theme      # Block schemas + renderers (Puck)
  /utils      # shared libs (auth, tenancy, formatting)
```

- Prefer single Next app with domain‑based routing for simplicity; split only if needed.

---

## 20) Implementation Blueprint (High‑Level)

1. **Bootstrap** Next.js app, pnpm workspaces, Tailwind, shadcn/ui.
2. **Convex** schema + migrations; seed script.
3. **Auth.js** providers; RBAC middleware.
4. **Tenancy**: host‑based resolver; context injection.
5. **Listings CRUD**: Admin routes + forms; file uploads (S3 presign); public pages.
6. **Search & Filters**: server functions; edge caching; optional Meilisearch.
7. **Leads & Appointments**: API + UI; email notifications.
8. **Theme Editor (Puck)**: block schemas; renderer; template picker; publish.
9. **Domains**: setup flow; DNS verification.
10. **Analytics & SEO**: events, JSON‑LD, sitemap.
11. **Settings & Integrations**: webhooks, calendars.
12. **QA & A11y**: automated tests, lighthouse budgets.

---

## 21) Acceptance Criteria (MVP)

- Tenant can sign up, pick a template, publish a branded site with at least Home, Listings, Property Detail, Contact.
- Admin can create/edit/archive listings with images and amenities.
- Public users can filter listings, view details, submit an inquiry; admin sees lead and can change status.
- Theme Editor allows editing of homepage blocks and styles; changes reflect on public site.
- Domain mapping works for at least subdomain + one custom domain in test.

---

## 22) Release Plan

- **M0 (Week 1‑2):** Auth, Tenancy, DB, Seed, Basic Admin shell
- **M1 (Week 3‑4):** Listings CRUD + Public pages
- **M2 (Week 5‑6):** Leads + Email + Analytics
- **M3 (Week 7‑8):** Theme Editor (Puck) + Template picker
- **M4 (Week 9):** Domains + SEO + Sitemap
- **M5 (Week 10):** Polish, A11y, Docs, Billing (optional)

---

## 23) Risks & Mitigations

- **SEO correctness**: Use SSR/ISR, JSON‑LD, performance budgets.
- **Media costs**: Compress on upload; WEBP/AVIF; enforce limits per plan.
- **Map/API costs**: Use Leaflet + OSM where possible; lazy load SDKs.
- **Tenancy leaks**: Strict `tenantId` scoping + tests + codegen guards.

---

## 24) Future Roadmap

- Marketplace for templates and block packs.
- Portal syndication (Zameen, Bayut, Zillow‑style) via feeds.
- Saved searches + email alerts.
- Multi‑unit buildings (units under property).
- Chat widget & WhatsApp deep links per listing.
- Payments for booking deposits (Stripe) where applicable.
- MLS/IDX integrations by region.

---

## 25) Glossary

- **Tenant**: An agency/account owning a site.
- **Site**: The public website instance for a tenant.
- **Theme**: Config of blocks & styles rendered by Puck.
- **Listing/Property**: A real‑estate item marketed on the site.
- **Lead**: A contact record from a form or integration.

---

## 26) Appendix — Minimal Block Schemas (Puck/Zod)

```ts
// packages/theme/blocks.ts
import { z } from "zod";

export const Hero = {
  name: "Hero",
  fields: z.object({
    heading: z.string().min(3),
    subheading: z.string().optional(),
    image: z.string().url().optional(),
    ctaLabel: z.string().default("Browse Listings"),
    ctaHref: z.string().default("/listings"),
  }),
};

export const FeaturedListings = {
  name: "FeaturedListings",
  fields: z.object({
    title: z.string().default("Featured Listings"),
    limit: z.number().int().min(1).max(12).default(6),
  }),
};
```

---

## 27) Appendix — Mock Fixtures (YAML excerpt)

```yaml
amenities:
  - Parking
  - Gym
  - Pool
  - Elevator
  - Security 24/7

properties:
  - title: Sunny 2BR Apartment in Clifton
    listingType: RENT
    price: 180000
    currency: PKR
    beds: 2
    baths: 2
    area: 1200
    unit: sqft
    city: Karachi
    featured: true
  - title: 1 Kanal House in DHA Lahore Phase 5
    listingType: SALE
    price: 85000000
    currency: PKR
    beds: 5
    baths: 6
    area: 4500
    unit: sqft
    city: Lahore
```

---

## 28) Appendix — Tenant RBAC Matrix (excerpt)

| Feature            | OWNER | ADMIN | AGENT | VIEWER |
| ------------------ | :---: | :---: | :---: | :----: |
| Manage Billing     |   ✓   |   ×   |   ×   |   ×    |
| Invite Members     |   ✓   |   ✓   |   ×   |   ×    |
| CRUD Listings      |   ✓   |   ✓   |   ✓   |   ×    |
| Leads/Assignments  |   ✓   |   ✓   |   ✓   |   ×    |
| Theme Editor       |   ✓   |   ✓   |   ×   |   ×    |
| Content/Blog       |   ✓   |   ✓   |   ✓   |   ×    |
| Settings (Company) |   ✓   |   ✓   |   ×   |   ×    |
| Webhooks/API Keys  |   ✓   |   ✓   |   ×   |   ×    |
| Audit Log          |   ✓   |   ✓   |   ×   |   ×    |

---

## 29) Appendix — Sitemap (MVP)

```
/
/listings
/listings/[slug]
/contact
/favorites
/compare
/admin
```

---

## 30) Success Metrics (MVP)

- Time‑to‑first‑publish < 15 min (median).
- ≥ 30% of tenants customize theme within 24h.
- Lead‑to‑response median time < 2 hours.
- Lighthouse score ≥ 90 on mobile for Home & Property pages.

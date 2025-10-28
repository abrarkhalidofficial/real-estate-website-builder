# Step 3 — Listings Page & Filters

Goal: Implement the Listings page with property cards, filters, and pagination using mock data and TypeScript types.

## Data models
Create `data/types.ts` with structured types.
```ts
export type PropertyType = 'apartment' | 'house' | 'villa' | 'commercial' | 'land';
export interface Location { address?: string; city: string; state?: string; country: string; lat?: number; lng?: number; }
export interface Property { id: string; title: string; type: PropertyType; price: number; currency: 'USD'|'EUR'|'GBP'|'PKR'|'AED'; location: Location; areaSqFt?: number; beds?: number; baths?: number; amenities?: string[]; images: string[]; description?: string; status?: 'available'|'sold'|'pending'; yearBuilt?: number; parking?: boolean; }
```

## Mock data
Create `data/properties.json`.
```json
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

## Components
- `components/PropertyCard.tsx`: image, title, price, badges (beds/baths), location.
- `components/FilterBar.tsx`: inputs for price range, type, location; emits filter state.
- `components/Pagination.tsx`: next/prev and page numbers.

## Listings page logic
- Load mock data (import JSON or fetch from `/data/properties.json`).
- Maintain filter state in component.
- Compute filtered + paginated results.
- Link each card to `/:siteId/listings/[propertyId]`.

## Styling & UX
- Responsive grid via Tailwind.
- Image optimization with `next/image`.
- Empty state when no results.

## Deliverables
- Typed data models
- Listings with filters and pagination
- Navigation to property detail pages

---

Next: Build property detail with gallery, amenities, map embed, and inquiry form.
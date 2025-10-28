# Step 4 — Property Detail Page

Goal: Implement the property detail route with image gallery, amenities, map embed, and an inquiry form.

## Route
- Create `app/(site)/[siteId]/listings/[propertyId]/page.tsx`.
- Read `propertyId` from params and load the matching property from mock data.

## Components
- `components/ImageGallery.tsx`: large preview + thumbnails, lightbox optional.
- `components/AmenityList.tsx`: icons with amenity labels.
- `components/MapEmbed.tsx`: Google Maps embed with `lat/lng` or address query.
- `components/InquiryForm.tsx`: name, email, phone, message; validate with `react-hook-form` + `zod`.

## Implementation tips
- Use `next/image` with `sizes` and `placeholder="blur"`.
- For maps, start with `<iframe>` embed; later switch to Leaflet/Google Maps SDK.
- Show price, currency, status, and key facts (beds, baths, area).

## Accessibility
- Semantic tags (`main`, `section`, `header`).
- Alt text for images.
- Labeled form controls and visible focus states.

## Deliverables
- Functional detail page with gallery and amenities
- Map embed centered on property
- Validated inquiry form (frontend-only)

---

Next: Builder wizard MVP with live preview and template switching.
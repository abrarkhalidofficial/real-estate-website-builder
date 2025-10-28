# Step 5 — Builder Wizard MVP

Goal: Create a multi-step builder with live preview that configures template, pages, brand/theme, and content.

## Global state (Zustand)
Create `store/builder.ts`.
```ts
import { create } from 'zustand';
import type { Property } from '../data/types';

interface SiteTheme { primaryColor: string; secondaryColor?: string; fontFamily?: string; tone?: 'professional'|'luxury'|'friendly'|'minimal'; }
interface SiteBrand { siteId: string; name: string; logoUrl?: string; theme: SiteTheme; selectedTemplate: string; }

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
  selectedPages: ['home','listings','detail','about','contact'],
  selectedTemplate: null,
  setBrand: (brand) => set({ brand }),
  setProperties: (properties) => set({ properties }),
  setSelectedPages: (selectedPages) => set({ selectedPages }),
  setSelectedTemplate: (selectedTemplate) => set({ selectedTemplate }),
}));
```

## Template registry
Create `lib/templates.ts`.
```ts
export interface TemplateMeta {
  id: string; name: string; style: 'modern'|'luxury'|'minimal'|'commercial';
  layoutSections: Array<'hero'|'featured'|'grid'|'gallery'|'testimonial'|'cta'>;
}
export const TEMPLATES: TemplateMeta[] = [
  { id: 'modern', name: 'Modern', style: 'modern', layoutSections: ['hero','featured','grid','cta'] },
  { id: 'luxury', name: 'Luxury', style: 'luxury', layoutSections: ['hero','featured','testimonial','cta'] },
  { id: 'minimal', name: 'Minimal', style: 'minimal', layoutSections: ['hero','grid','cta'] },
  { id: 'commercial', name: 'Commercial', style: 'commercial', layoutSections: ['hero','featured','grid'] },
];
```

## Builder UI
Create `app/builder/page.tsx` with steps:
- Step 1: TemplatePicker (choose from `TEMPLATES`)
- Step 2: PageSelector (toggle pages on/off)
- Step 3: BrandThemePanel (colors, fonts, tone)
- Step 4: ContentUploader (images, properties JSON)
- Step 5: PreviewPane (live preview reflecting store state)

## Live Preview Strategy
- Render a preview iframe or an in-page sandbox using the same components with state injected.
- Switching template applies CSS class (`theme-luxury`, `theme-minimal`) and section layout.

## Deliverables
- Global builder store
- Template registry
- Builder wizard with basic step navigation and live preview

---

Next: SEO, accessibility, and optional pages (About, Contact, Blog).
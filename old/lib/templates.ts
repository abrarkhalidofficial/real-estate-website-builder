import type { PageData, Section } from "./schemas";

const hero = (overrides?: Partial<Extract<Section, { type: "hero" }>>): Section => ({
  type: "hero",
  heading: "Create Your Real Estate Website Easily",
  subheading: "Beautiful templates, live editing, and instant export.",
  ctaLabel: "View Templates",
  ctaHref: "#templates",
  bgType: "image",
  bgSrc: "/images/templates/hero.jpg",
  overlayOpacity: 0.4,
  ...overrides,
});

const listings = (overrides?: Partial<Extract<Section, { type: "listings" }>>): Section => ({
  type: "listings",
  properties: [],
  layout: "grid",
  categories: ["Villas", "Apartments", "Commercial"],
  ...overrides,
});

const about = (overrides?: Partial<Extract<Section, { type: "about" }>>): Section => ({
  type: "about",
  richText: "We deliver premium real estate experiences with transparency and trust.",
  teamPhotos: [],
  ...overrides,
});

const faq = (overrides?: Partial<Extract<Section, { type: "faq" }>>): Section => ({
  type: "faq",
  items: [
    { q: "How do I get started?", a: "Pick a template and start editing in the builder." },
    { q: "Can I export my site?", a: "Yes, export as static HTML or React/Next components." },
  ],
  ...overrides,
});

const testimonials = (
  overrides?: Partial<Extract<Section, { type: "testimonials" }>>
): Section => ({
  type: "testimonials",
  items: [
    { name: "Aisha", quote: "The builder made our site launch effortless!" },
    { name: "Bilal", quote: "Beautiful templates and easy customization." },
  ],
  ...overrides,
});

const portal = (overrides?: Partial<Extract<Section, { type: "portal" }>>): Section => ({
  type: "portal",
  heading: "Contact Us",
  showContactForm: true,
  ...overrides,
});

export const templates = {
  luxuryVillas: {
    id: "luxuryVillas",
    name: "Luxury Villas",
    theme: "system" as const,
    sections: [hero({ bgType: "video", bgSrc: "/images/templates/villas.mp4" }), listings(), about(), testimonials()],
    seo: { title: "Luxury Villas", description: "Premium villas and estates." },
  },
  commercialProperties: {
    id: "commercialProperties",
    name: "Commercial Properties",
    theme: "system" as const,
    sections: [hero({ heading: "Find Your Next Office" }), listings({ categories: ["Office", "Retail", "Warehouse"] }), faq(), portal()],
    seo: { title: "Commercial Properties", description: "Office, retail, and warehouse spaces." },
  },
  housingSociety: {
    id: "housingSociety",
    name: "Housing Society",
    theme: "system" as const,
    sections: [hero({ heading: "Welcome to Our Community" }), about({ richText: "Amenities and community living." }), listings(), faq(), testimonials(), portal()],
    seo: { title: "Housing Society", description: "Plots and homes in a vibrant society." },
  },
} satisfies Record<string, Omit<PageData, "id" | "updatedAt" | "templateId"> & { id: string }>;

export function createPageDataFromTemplate(templateId: keyof typeof templates): PageData {
  const t = templates[templateId];
  return {
    id: `${templateId}-${Date.now()}`,
    name: t.name,
    theme: t.theme,
    sections: t.sections,
    seo: t.seo,
    templateId: t.id,
    updatedAt: new Date().toISOString(),
  };
}
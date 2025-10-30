import { z } from "zod";

// Property schema and type
export const PropertySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  price: z.number().optional(),
  location: z.string().optional(),
  bedrooms: z.number().optional(),
  bathrooms: z.number().optional(),
  areaSqFt: z.number().optional(),
  images: z.array(z.string()).default([]),
  features: z.array(z.string()).default([]),
  status: z.enum(["for-sale", "for-rent", "sold"]).default("for-sale"),
  contactEmail: z.string().email().optional(),
});
export type Property = z.infer<typeof PropertySchema>;

// Discriminated union for sections (Puck blocks)
const HeroBlockSchema = z.object({
  type: z.literal("hero"),
  heading: z.string().default("Create Your Real Estate Website Easily"),
  subheading: z.string().optional(),
  ctaLabel: z.string().default("Get Started"),
  ctaHref: z.string().default("#templates"),
  bgType: z.enum(["image", "video"]).default("image"),
  bgSrc: z.string().optional(),
  overlayOpacity: z.number().min(0).max(1).default(0.4),
});

const ListingsBlockSchema = z.object({
  type: z.literal("listings"),
  properties: z.array(PropertySchema).default([]),
  layout: z.enum(["grid", "masonry"]).default("grid"),
  categories: z.array(z.string()).optional(),
});

const AboutBlockSchema = z.object({
  type: z.literal("about"),
  richText: z.string().default("We are a trusted real estate brand."),
  teamPhotos: z.array(z.string()).default([]),
});

const FAQBlockSchema = z.object({
  type: z.literal("faq"),
  items: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
});

const TestimonialsBlockSchema = z.object({
  type: z.literal("testimonials"),
  items: z.array(
    z.object({
      name: z.string(),
      quote: z.string(),
      avatar: z.string().optional(),
    })
  ).default([]),
});

const PortalBlockSchema = z.object({
  type: z.literal("portal"),
  heading: z.string().default("Contact Us"),
  showContactForm: z.boolean().default(true),
});

export const SectionSchema = z.discriminatedUnion("type", [
  HeroBlockSchema,
  ListingsBlockSchema,
  AboutBlockSchema,
  FAQBlockSchema,
  TestimonialsBlockSchema,
  PortalBlockSchema,
]);
export type Section = z.infer<typeof SectionSchema>;

export const PageDataSchema = z.object({
  id: z.string(),
  name: z.string().default("My Real Estate Site"),
  theme: z.enum(["light", "dark", "system"]).default("system"),
  sections: z.array(SectionSchema).default([]),
  seo: z
    .object({ title: z.string().optional(), description: z.string().optional(), ogImage: z.string().optional() })
    .optional(),
  templateId: z.string().default(""),
  updatedAt: z.string().default(() => new Date().toISOString()),
});
export type PageData = z.infer<typeof PageDataSchema>;
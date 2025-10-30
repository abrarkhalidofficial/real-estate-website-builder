import { z } from "zod"

export const PropertySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  location: z.string(),
  bedrooms: z.number().optional(),
  bathrooms: z.number().optional(),
  areaSqFt: z.number().optional(),
  images: z.array(z.string()),
  features: z.array(z.string()),
  status: z.enum(["for-sale", "for-rent", "sold"]),
  contactEmail: z.string().optional(),
})

export type Property = z.infer<typeof PropertySchema>

export const FAQItemSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
})

export type FAQItem = z.infer<typeof FAQItemSchema>

export const TestimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  content: z.string(),
  image: z.string().optional(),
})

export type Testimonial = z.infer<typeof TestimonialSchema>

export const SectionSchema = z.discriminatedUnion("type", [
  z.object({
    id: z.string(),
    type: z.literal("hero"),
    heading: z.string(),
    subheading: z.string(),
    ctaLabel: z.string(),
    ctaHref: z.string(),
    bgType: z.enum(["image", "video", "color"]),
    bgSrc: z.string(),
    overlayOpacity: z.number().min(0).max(1),
  }),
  z.object({
    id: z.string(),
    type: z.literal("listings"),
    properties: z.array(PropertySchema),
    layout: z.enum(["grid", "masonry"]),
    title: z.string(),
  }),
  z.object({
    id: z.string(),
    type: z.literal("about"),
    title: z.string(),
    content: z.string(),
    image: z.string(),
  }),
  z.object({
    id: z.string(),
    type: z.literal("faq"),
    title: z.string(),
    items: z.array(FAQItemSchema),
  }),
  z.object({
    id: z.string(),
    type: z.literal("testimonials"),
    title: z.string(),
    items: z.array(TestimonialSchema),
  }),
  z.object({
    id: z.string(),
    type: z.literal("portal"),
    title: z.string(),
    subtitle: z.string(),
  }),
])

export type Section = z.infer<typeof SectionSchema>

export const PageDataSchema = z.object({
  id: z.string(),
  name: z.string(),
  theme: z.enum(["light", "dark"]),
  sections: z.array(SectionSchema),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      ogImage: z.string().optional(),
    })
    .optional(),
  templateId: z.string(),
  updatedAt: z.string(),
})

export type PageData = z.infer<typeof PageDataSchema>

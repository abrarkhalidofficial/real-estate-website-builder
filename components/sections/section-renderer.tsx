"use client"

import type { Section, PageData } from "@/lib/schemas"
import { HeroSection } from "./hero-section"
import { ListingsSection } from "./listings-section"
import { AboutSection } from "./about-section"
import { FAQSection } from "./faq-section"
import { TestimonialsSection } from "./testimonials-section"
import { PortalSection } from "./portal-section"

interface SectionRendererProps {
  section: Section
  pageData: PageData
  onUpdate: (data: PageData) => void
}

export function SectionRenderer({ section, pageData, onUpdate }: SectionRendererProps) {
  switch (section.type) {
    case "hero":
      return <HeroSection section={section} pageData={pageData} onUpdate={onUpdate} />
    case "listings":
      return <ListingsSection section={section} pageData={pageData} onUpdate={onUpdate} />
    case "about":
      return <AboutSection section={section} pageData={pageData} onUpdate={onUpdate} />
    case "faq":
      return <FAQSection section={section} pageData={pageData} onUpdate={onUpdate} />
    case "testimonials":
      return <TestimonialsSection section={section} pageData={pageData} onUpdate={onUpdate} />
    case "portal":
      return <PortalSection section={section} pageData={pageData} onUpdate={onUpdate} />
    default:
      return null
  }
}

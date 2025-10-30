import type { Section } from "../../lib/schemas";
import { HeroSection } from "./hero";
import { FAQSection } from "./faq";
import { AboutSection } from "./about";
import { ListingsSection } from "./listings";
import { TestimonialsSection } from "./testimonials";
import { PortalSection } from "./portal";

export function PageRender({ sections }: { sections: Section[] }) {
  return (
    <div>
      {sections.map((s, idx) => {
        switch (s.type) {
          case "hero":
            return <HeroSection key={idx} {...s} />;
          case "faq":
            return <FAQSection key={idx} items={s.items} />;
          case "about":
            return <AboutSection key={idx} richText={s.richText} teamPhotos={s.teamPhotos} />;
          case "listings":
            return <ListingsSection key={idx} properties={s.properties} layout={s.layout} categories={s.categories ?? []} />;
          case "testimonials":
            return <TestimonialsSection key={idx} items={s.items} />;
          case "portal":
            return <PortalSection key={idx} heading={s.heading} showContactForm={s.showContactForm} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
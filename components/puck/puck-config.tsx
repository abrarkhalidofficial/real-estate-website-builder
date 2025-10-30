"use client"

import type { Config } from "@measured/puck"
import { HeroBlock } from "./blocks/hero-block"
import { ListingsBlock } from "./blocks/listings-block"
import { AboutBlock } from "./blocks/about-block"
import { FAQBlock } from "./blocks/faq-block"
import { TestimonialsBlock } from "./blocks/testimonials-block"
import { PortalBlock } from "./blocks/portal-block"

export const puckConfig: Config = {
  components: {
    Hero: {
      label: "Hero Section",
      fields: {
        heading: {
          type: "text",
          label: "Heading",
        },
        subheading: {
          type: "text",
          label: "Subheading",
        },
        ctaLabel: {
          type: "text",
          label: "CTA Label",
        },
        ctaHref: {
          type: "text",
          label: "CTA Link",
        },
        bgSrc: {
          type: "text",
          label: "Background Image URL",
        },
        overlayOpacity: {
          type: "number",
          label: "Overlay Opacity",
        },
      },
      render: (props) => <HeroBlock {...props} />,
      defaultProps: {
        heading: "Welcome",
        subheading: "Your subtitle here",
        ctaLabel: "Get Started",
        ctaHref: "#",
        bgSrc: "/abstract-hero-background.png",
        overlayOpacity: 0.3,
      },
    },
    Listings: {
      label: "Listings Section",
      fields: {
        title: {
          type: "text",
          label: "Section Title",
        },
        layout: {
          type: "select",
          label: "Layout",
          options: [
            { label: "Grid", value: "grid" },
            { label: "Masonry", value: "masonry" },
          ],
        },
      },
      render: (props) => <ListingsBlock {...props} />,
      defaultProps: {
        title: "Featured Properties",
        layout: "grid",
      },
    },
    About: {
      label: "About Section",
      fields: {
        title: {
          type: "text",
          label: "Title",
        },
        content: {
          type: "textarea",
          label: "Content",
        },
        image: {
          type: "text",
          label: "Image URL",
        },
      },
      render: (props) => <AboutBlock {...props} />,
      defaultProps: {
        title: "About Us",
        content: "Add your content here",
        image: "/about-section.png",
      },
    },
    FAQ: {
      label: "FAQ Section",
      fields: {
        title: {
          type: "text",
          label: "Section Title",
        },
      },
      render: (props) => <FAQBlock {...props} />,
      defaultProps: {
        title: "Frequently Asked Questions",
      },
    },
    Testimonials: {
      label: "Testimonials Section",
      fields: {
        title: {
          type: "text",
          label: "Section Title",
        },
      },
      render: (props) => <TestimonialsBlock {...props} />,
      defaultProps: {
        title: "What Our Clients Say",
      },
    },
    Portal: {
      label: "Contact Portal",
      fields: {
        title: {
          type: "text",
          label: "Title",
        },
        subtitle: {
          type: "text",
          label: "Subtitle",
        },
      },
      render: (props) => <PortalBlock {...props} />,
      defaultProps: {
        title: "Get in Touch",
        subtitle: "Contact us today",
      },
    },
  },
}

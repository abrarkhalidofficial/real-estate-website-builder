"use client";

import React, { useMemo } from "react";
import { Puck, type Config, type Data } from "@measured/puck";
import "@measured/puck/puck.css";
import type { PageData, Section } from "@/lib/schemas";
import { HeroSection } from "../site/hero";
import { FAQSection } from "../site/faq";
import { AboutSection } from "../site/about";
import { ListingsSection } from "../site/listings";
import { TestimonialsSection } from "../site/testimonials";
import { PortalSection } from "../site/portal";

export type PuckComponents = {
  Hero: {
    heading: string;
    subheading?: string;
    ctaLabel?: string;
    ctaHref?: string;
    bgType?: "image" | "video";
    bgSrc?: string;
    overlayOpacity?: number;
    id: string;
  };
  FAQ: {
    items: { q: string; a: string }[];
    id: string;
  };
  About: {
    richText: string;
    teamPhotos?: string[];
    id: string;
  };
  Listings: {
    layout?: "grid" | "masonry";
    categories?: string[];
    // We will not expose property editing yet in the editor
    id: string;
  };
  Testimonials: {
    items: { name: string; quote: string; avatar?: string }[];
    id: string;
  };
  Portal: {
    heading: string;
    showContactForm?: boolean;
    id: string;
  };
};

export const puckConfig: Config<PuckComponents> = {
  components: {
    Hero: {
      fields: {
        heading: { type: "text", label: "Heading" },
        subheading: { type: "textarea", label: "Subheading" },
        ctaLabel: { type: "text", label: "CTA Label" },
        ctaHref: { type: "text", label: "CTA Href" },
        bgType: {
          type: "select",
          label: "Background Type",
          options: [
            { label: "Image", value: "image" },
            { label: "Video", value: "video" },
          ],
        },
        bgSrc: { type: "text", label: "Background Src" },
        overlayOpacity: { type: "number", label: "Overlay Opacity" },
        id: { type: "text", label: "Component Id" },
      },
      render: (props) => (
        <HeroSection
          heading={props.heading}
          subheading={props.subheading}
          ctaLabel={props.ctaLabel}
          ctaHref={props.ctaHref}
          bgType={props.bgType}
          bgSrc={props.bgSrc}
          overlayOpacity={props.overlayOpacity}
        />
      ),
      defaultProps: {
        heading: "Welcome to Our Properties",
        subheading: "Discover luxury homes and prime commercial spaces.",
        ctaLabel: "Explore Listings",
        ctaHref: "/listings",
        bgType: "image",
        bgSrc: "/images/hero.jpg",
        overlayOpacity: 0.4,
        id: "Hero-1",
      },
    },
    FAQ: {
      fields: {
        items: {
          type: "array",
          label: "FAQ Items",
          arrayFields: {
            q: { type: "text", label: "Question" },
            a: { type: "textarea", label: "Answer" },
          },
        },
        id: { type: "text", label: "Component Id" },
      },
      render: (props) => <FAQSection items={props.items} />,
      defaultProps: {
        items: [
          { q: "What properties are available?", a: "We offer a wide range of residential and commercial properties." },
          { q: "How do I schedule a viewing?", a: "Contact our agents through the portal to schedule a visit." },
        ],
        id: "FAQ-1",
      },
    },
    About: {
      fields: {
        richText: { type: "textarea", label: "Text" },
        teamPhotos: {
          type: "array",
          label: "Team Photos",
          arrayFields: { url: { type: "text", label: "Image URL" } },
        } as any, // Puck doesn't support array of primitive directly; we'll map in/out
        id: { type: "text", label: "Component Id" },
      },
      render: (props) => (
        <AboutSection
          richText={props.richText}
          teamPhotos={Array.isArray((props as any).teamPhotos)
            ? (props as any).teamPhotos.map((it: any) => (typeof it === "string" ? it : it?.url)).filter(Boolean)
            : []}
        />
      ),
      defaultProps: {
        richText: "We are a trusted real estate brand.",
        teamPhotos: [],
        id: "About-1",
      },
    },
    Listings: {
      fields: {
        layout: {
          type: "select",
          label: "Layout",
          options: [
            { label: "Grid", value: "grid" },
            { label: "Masonry", value: "masonry" },
          ],
        },
        categories: {
          type: "array",
          label: "Categories",
          arrayFields: { value: { type: "text", label: "Category" } },
        } as any,
        id: { type: "text", label: "Component Id" },
      },
      render: (props) => (
        <ListingsSection
          layout={props.layout}
          categories={Array.isArray((props as any).categories)
            ? (props as any).categories.map((it: any) => (typeof it === "string" ? it : it?.value)).filter(Boolean)
            : []}
        />
      ),
      defaultProps: {
        layout: "grid",
        categories: ["Villas", "Apartments", "Commercial"],
        id: "Listings-1",
      },
    },
    Testimonials: {
      fields: {
        items: {
          type: "array",
          label: "Testimonials",
          arrayFields: {
            name: { type: "text", label: "Name" },
            quote: { type: "textarea", label: "Quote" },
            avatar: { type: "text", label: "Avatar URL" },
          },
        },
        id: { type: "text", label: "Component Id" },
      },
      render: (props) => <TestimonialsSection items={props.items} />,
      defaultProps: {
        items: [
          { name: "Aisha", quote: "The builder made our site launch effortless!" },
          { name: "Bilal", quote: "Beautiful templates and easy customization." },
        ],
        id: "Testimonials-1",
      },
    },
    Portal: {
      fields: {
        heading: { type: "text", label: "Heading" },
        showContactForm: { type: "radio", label: "Show Form", options: [
          { label: "Yes", value: "true" },
          { label: "No", value: "false" },
        ] },
        id: { type: "text", label: "Component Id" },
      },
      render: (props) => (
        <PortalSection heading={props.heading} showContactForm={String(props.showContactForm) !== "false"} />
      ),
      defaultProps: {
        heading: "Contact Us",
        showContactForm: true as any,
        id: "Portal-1",
      },
    },
  },
};

// Helpers to map between our PageData.sections and Puck's Data.content
function sectionToComponentData(section: Section, index: number) {
  switch (section.type) {
    case "hero":
      return {
        type: "Hero",
        props: {
          id: `Hero-${index + 1}`,
          heading: section.heading,
          subheading: section.subheading,
          ctaLabel: section.ctaLabel,
          ctaHref: section.ctaHref,
          bgType: section.bgType,
          bgSrc: section.bgSrc,
          overlayOpacity: section.overlayOpacity,
        },
      };
    case "faq":
      return {
        type: "FAQ",
        props: {
          id: `FAQ-${index + 1}`,
          items: section.items,
        },
      };
    case "about":
      return {
        type: "About",
        props: {
          id: `About-${index + 1}`,
          richText: section.richText,
          teamPhotos: section.teamPhotos ?? [],
        },
      };
    case "listings":
      return {
        type: "Listings",
        props: {
          id: `Listings-${index + 1}`,
          layout: section.layout,
          categories: section.categories ?? [],
        },
      };
    case "testimonials":
      return {
        type: "Testimonials",
        props: {
          id: `Testimonials-${index + 1}`,
          items: section.items,
        },
      };
    case "portal":
      return {
        type: "Portal",
        props: {
          id: `Portal-${index + 1}`,
          heading: section.heading,
          showContactForm: section.showContactForm,
        },
      };
    default:
      // Unsupported blocks are ignored for Puck for now
      return null;
  }
}

function mapSectionsToPuckData(page: PageData): Partial<Data> {
  const content = page.sections
    .map(sectionToComponentData)
    .filter(Boolean) as { type: string; props: Record<string, any> }[];

  return {
    content,
    root: {
      props: {
        title: page.name ?? "Untitled",
      },
    },
    zones: {},
  };
}

function componentDataToSection(item: { type: string; props: any }): Section | null {
  switch (item.type) {
    case "Hero":
      return {
        type: "hero",
        heading: item.props?.heading ?? "",
        subheading: item.props?.subheading,
        ctaLabel: item.props?.ctaLabel,
        ctaHref: item.props?.ctaHref,
        bgType: item.props?.bgType ?? "image",
        bgSrc: item.props?.bgSrc,
        overlayOpacity: item.props?.overlayOpacity ?? 0.4,
      };
    case "FAQ":
      return {
        type: "faq",
        items: Array.isArray(item.props?.items) ? item.props.items : [],
      };
    case "About":
      return {
        type: "about",
        richText: item.props?.richText ?? "",
        teamPhotos: Array.isArray(item.props?.teamPhotos)
          ? item.props.teamPhotos.map((it: any) => (typeof it === "string" ? it : it?.url)).filter(Boolean)
          : [],
      };
    case "Listings":
      return {
        type: "listings",
        properties: [],
        layout: item.props?.layout ?? "grid",
        categories: Array.isArray(item.props?.categories)
          ? item.props.categories.map((it: any) => (typeof it === "string" ? it : it?.value)).filter(Boolean)
          : [],
      };
    case "Testimonials":
      return {
        type: "testimonials",
        items: Array.isArray(item.props?.items) ? item.props.items : [],
      };
    case "Portal":
      return {
        type: "portal",
        heading: item.props?.heading ?? "Contact Us",
        showContactForm: Boolean(item.props?.showContactForm ?? true),
      };
    default:
      return null;
  }
}

export function mapPuckDataToPageData(data: Partial<Data>, existing?: PageData): PageData {
  const content = Array.isArray(data.content) ? data.content : [];
  const sections = content
    .map((item) => componentDataToSection(item as any))
    .filter(Boolean) as Section[];

  return {
    ...(existing ?? {
      id: `page-${Date.now()}`,
      name: (data.root as any)?.props?.title ?? "Untitled",
      theme: "system",
      sections: [],
      seo: undefined,
      templateId: "",
      updatedAt: new Date().toISOString(),
    }),
    sections,
    updatedAt: new Date().toISOString(),
  };
}

type PuckProviderProps = {
  data: PageData;
  onPublish?: (page: PageData) => void;
};

export function PuckProvider({ data, onPublish }: PuckProviderProps) {
  const initialData: Partial<Data> = useMemo(() => mapSectionsToPuckData(data), [data]);

  return (
    <div className="p-4 border rounded-md">
      <Puck
        config={puckConfig}
        data={initialData}
        onPublish={(published) => {
          // Convert Puck data back into our PageData shape
          const pageData = mapPuckDataToPageData(published, data);
          onPublish?.(pageData);
        }}
      />
    </div>
  );
}
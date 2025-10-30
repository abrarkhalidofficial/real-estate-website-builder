"use client"

import type { PageData, Section } from "@/lib/schemas"
import { Plus, Trash2 } from "lucide-react"
import { v4 as uuidv4 } from "uuid"

interface BuilderSidebarProps {
  pageData: PageData
  onUpdate: (data: PageData) => void
}

const SECTION_TYPES = [
  { type: "hero", label: "Hero" },
  { type: "listings", label: "Listings" },
  { type: "about", label: "About" },
  { type: "faq", label: "FAQ" },
  { type: "testimonials", label: "Testimonials" },
  { type: "portal", label: "Contact Portal" },
]

export function BuilderSidebar({ pageData, onUpdate }: BuilderSidebarProps) {
  const addSection = (type: string) => {
    let newSection: Section

    switch (type) {
      case "hero":
        newSection = {
          id: uuidv4(),
          type: "hero",
          heading: "New Section",
          subheading: "Add your content here",
          ctaLabel: "Learn More",
          ctaHref: "#",
          bgType: "image",
          bgSrc: "/abstract-hero-background.png",
          overlayOpacity: 0.3,
        }
        break
      case "listings":
        newSection = {
          id: uuidv4(),
          type: "listings",
          title: "Featured Properties",
          layout: "grid",
          properties: [],
        }
        break
      case "about":
        newSection = {
          id: uuidv4(),
          type: "about",
          title: "About Us",
          content: "Add your content here",
          image: "/about-section.png",
        }
        break
      case "faq":
        newSection = {
          id: uuidv4(),
          type: "faq",
          title: "Frequently Asked Questions",
          items: [],
        }
        break
      case "testimonials":
        newSection = {
          id: uuidv4(),
          type: "testimonials",
          title: "What Our Clients Say",
          items: [],
        }
        break
      case "portal":
        newSection = {
          id: uuidv4(),
          type: "portal",
          title: "Get in Touch",
          subtitle: "Contact us today",
        }
        break
      default:
        return
    }

    onUpdate({
      ...pageData,
      sections: [...pageData.sections, newSection],
    })
  }

  const removeSection = (id: string) => {
    onUpdate({
      ...pageData,
      sections: pageData.sections.filter((s) => s.id !== id),
    })
  }

  const moveSection = (id: string, direction: "up" | "down") => {
    const index = pageData.sections.findIndex((s) => s.id === id)
    if ((direction === "up" && index === 0) || (direction === "down" && index === pageData.sections.length - 1)) {
      return
    }

    const newSections = [...pageData.sections]
    const newIndex = direction === "up" ? index - 1 : index + 1
    ;[newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]]

    onUpdate({
      ...pageData,
      sections: newSections,
    })
  }

  return (
    <div className="w-80 bg-white dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-bold text-primary dark:text-neutral-50 mb-4">Sections</h2>

        <div className="space-y-2 mb-6">
          {SECTION_TYPES.map((section) => (
            <button
              key={section.type}
              onClick={() => addSection(section.type)}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-accent hover:opacity-90 transition-colors text-accent-foreground text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add {section.label}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-3">Page Sections</h3>
          {pageData.sections.map((section, index) => (
            <div
              key={section.id}
              className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-between group"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-primary dark:text-neutral-50">
                  {section.type.charAt(0).toUpperCase() + section.type.slice(1)}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {"title" in section ? section.title : "heading" in section ? section.heading : "Section"}
                </p>
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {index > 0 && (
                  <button
                    onClick={() => moveSection(section.id, "up")}
                    className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded"
                    title="Move up"
                  >
                    ↑
                  </button>
                )}
                {index < pageData.sections.length - 1 && (
                  <button
                    onClick={() => moveSection(section.id, "down")}
                    className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded"
                    title="Move down"
                  >
                    ↓
                  </button>
                )}
                <button
                  onClick={() => removeSection(section.id)}
                  className="p-1 hover:bg-red-100 dark:hover:bg-red-900 rounded text-error"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

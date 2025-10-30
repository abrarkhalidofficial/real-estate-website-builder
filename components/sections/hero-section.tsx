"use client"

import type { Section, PageData } from "@/lib/schemas"
import { Edit2 } from "lucide-react"
import { useState } from "react"

interface HeroSectionProps {
  section: Extract<Section, { type: "hero" }>
  pageData: PageData
  onUpdate: (data: PageData) => void
}

export function HeroSection({ section, pageData, onUpdate }: HeroSectionProps) {
  const [isEditing, setIsEditing] = useState(false)

  const handleUpdate = (updates: Partial<typeof section>) => {
    const updatedSections = pageData.sections.map((s) => (s.id === section.id ? { ...s, ...updates } : s))
    onUpdate({ ...pageData, sections: updatedSections })
  }

  return (
    <div className="relative group">
      <div
        className="relative h-96 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url('${section.bgSrc}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: `rgba(0, 0, 0, ${section.overlayOpacity})` }}
        >
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">{section.heading}</h1>
            <p className="text-xl mb-8">{section.subheading}</p>
            <button className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-neutral-100 transition-colors">
              {section.ctaLabel}
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsEditing(!isEditing)}
        className="absolute top-4 right-4 p-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Edit2 className="w-4 h-4 text-primary dark:text-neutral-50" />
      </button>

      {isEditing && (
        <div className="mt-4 p-4 bg-neutral-100 dark:bg-neutral-700 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary dark:text-neutral-50 mb-1">Heading</label>
            <input
              type="text"
              value={section.heading}
              onChange={(e) => handleUpdate({ heading: e.target.value })}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary dark:text-neutral-50 mb-1">Subheading</label>
            <input
              type="text"
              value={section.subheading}
              onChange={(e) => handleUpdate({ subheading: e.target.value })}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary dark:text-neutral-50 mb-1">CTA Label</label>
            <input
              type="text"
              value={section.ctaLabel}
              onChange={(e) => handleUpdate({ ctaLabel: e.target.value })}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary dark:text-neutral-50 mb-1">
              Overlay Opacity (0-1)
            </label>
            <input
              type="number"
              min="0"
              max="1"
              step="0.1"
              value={section.overlayOpacity}
              onChange={(e) => handleUpdate({ overlayOpacity: Number.parseFloat(e.target.value) })}
              className="input-field"
            />
          </div>
        </div>
      )}
    </div>
  )
}

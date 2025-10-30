"use client"

import type { Section, PageData } from "@/lib/schemas"
import { Edit2 } from "lucide-react"
import { useState } from "react"

interface AboutSectionProps {
  section: Extract<Section, { type: "about" }>
  pageData: PageData
  onUpdate: (data: PageData) => void
}

export function AboutSection({ section, pageData, onUpdate }: AboutSectionProps) {
  const [isEditing, setIsEditing] = useState(false)

  const handleUpdate = (updates: Partial<typeof section>) => {
    const updatedSections = pageData.sections.map((s) => (s.id === section.id ? { ...s, ...updates } : s))
    onUpdate({ ...pageData, sections: updatedSections })
  }

  return (
    <div className="p-6 group">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-primary dark:text-neutral-50">{section.title}</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit2 className="w-4 h-4 text-primary dark:text-neutral-50" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">{section.content}</p>
        </div>
        <img src={section.image || "/placeholder.svg"} alt={section.title} className="w-full rounded-lg shadow-lg" />
      </div>

      {isEditing && (
        <div className="mt-6 p-4 bg-neutral-100 dark:bg-neutral-700 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary dark:text-neutral-50 mb-1">Title</label>
            <input
              type="text"
              value={section.title}
              onChange={(e) => handleUpdate({ title: e.target.value })}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary dark:text-neutral-50 mb-1">Content</label>
            <textarea
              value={section.content}
              onChange={(e) => handleUpdate({ content: e.target.value })}
              className="input-field min-h-32"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary dark:text-neutral-50 mb-1">Image URL</label>
            <input
              type="text"
              value={section.image}
              onChange={(e) => handleUpdate({ image: e.target.value })}
              className="input-field"
            />
          </div>
        </div>
      )}
    </div>
  )
}

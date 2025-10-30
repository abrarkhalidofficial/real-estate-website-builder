"use client"

import type React from "react"

import type { Section, PageData } from "@/lib/schemas"
import { Edit2 } from "lucide-react"
import { useState } from "react"

interface PortalSectionProps {
  section: Extract<Section, { type: "portal" }>
  pageData: PageData
  onUpdate: (data: PageData) => void
}

export function PortalSection({ section, pageData, onUpdate }: PortalSectionProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleUpdate = (updates: Partial<typeof section>) => {
    const updatedSections = pageData.sections.map((s) => (s.id === section.id ? { ...s, ...updates } : s))
    onUpdate({ ...pageData, sections: updatedSections })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Form submitted! (Frontend only - no backend)")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="p-6 group bg-neutral-100 dark:bg-neutral-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-primary dark:text-neutral-50">{section.title}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">{section.subtitle}</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit2 className="w-4 h-4 text-primary dark:text-neutral-50" />
        </button>
      </div>

      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-field"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input-field"
            required
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="input-field min-h-32"
            required
          />
          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>

      {isEditing && (
        <div className="mt-6 p-4 bg-white dark:bg-neutral-800 rounded-lg space-y-4">
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
            <label className="block text-sm font-medium text-primary dark:text-neutral-50 mb-1">Subtitle</label>
            <input
              type="text"
              value={section.subtitle}
              onChange={(e) => handleUpdate({ subtitle: e.target.value })}
              className="input-field"
            />
          </div>
        </div>
      )}
    </div>
  )
}

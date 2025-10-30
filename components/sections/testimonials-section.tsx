"use client"

import type { Section, PageData, Testimonial } from "@/lib/schemas"
import { Edit2, Plus, Trash2 } from "lucide-react"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

interface TestimonialsSectionProps {
  section: Extract<Section, { type: "testimonials" }>
  pageData: PageData
  onUpdate: (data: PageData) => void
}

export function TestimonialsSection({ section, pageData, onUpdate }: TestimonialsSectionProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

  const handleUpdate = (updates: Partial<typeof section>) => {
    const updatedSections = pageData.sections.map((s) => (s.id === section.id ? { ...s, ...updates } : s))
    onUpdate({ ...pageData, sections: updatedSections })
  }

  const addTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: uuidv4(),
      name: "Client Name",
      role: "Client Role",
      content: "Testimonial content goes here",
      image: "/abstract-profile.png",
    }
    handleUpdate({ items: [...section.items, newTestimonial] })
  }

  const updateTestimonial = (id: string, updates: Partial<Testimonial>) => {
    const updatedItems = section.items.map((item) => (item.id === id ? { ...item, ...updates } : item))
    handleUpdate({ items: updatedItems })
  }

  const removeTestimonial = (id: string) => {
    handleUpdate({ items: section.items.filter((item) => item.id !== id) })
  }

  return (
    <div className="p-6 group bg-neutral-100 dark:bg-neutral-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-primary dark:text-neutral-50">{section.title}</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit2 className="w-4 h-4 text-primary dark:text-neutral-50" />
        </button>
      </div>

      {isEditing && (
        <div className="mb-6 p-4 bg-white dark:bg-neutral-800 rounded-lg">
          <button
            onClick={addTestimonial}
            className="w-full flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-light transition-colors text-white rounded-lg"
          >
            <Plus className="w-4 h-4" />
            Add Testimonial
          </button>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {section.items.map((testimonial) => (
          <div key={testimonial.id} className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
            {testimonial.image && (
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
            )}
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 italic">"{testimonial.content}"</p>
            <p className="font-bold text-primary dark:text-neutral-50">{testimonial.name}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.role}</p>

            {editingId === testimonial.id ? (
              <div className="mt-4 space-y-2">
                <input
                  type="text"
                  value={testimonial.name}
                  onChange={(e) => updateTestimonial(testimonial.id, { name: e.target.value })}
                  className="input-field text-sm"
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={testimonial.role}
                  onChange={(e) => updateTestimonial(testimonial.id, { role: e.target.value })}
                  className="input-field text-sm"
                  placeholder="Role"
                />
                <textarea
                  value={testimonial.content}
                  onChange={(e) => updateTestimonial(testimonial.id, { content: e.target.value })}
                  className="input-field text-sm min-h-20"
                  placeholder="Testimonial"
                />
                <button
                  onClick={() => setEditingId(null)}
                  className="w-full px-3 py-1 bg-success hover:bg-green-600 text-white rounded text-sm"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setEditingId(testimonial.id)}
                  className="flex-1 px-3 py-1 bg-accent hover:bg-accent-light text-white rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeTestimonial(testimonial.id)}
                  className="px-3 py-1 bg-error hover:bg-red-600 text-white rounded text-sm"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

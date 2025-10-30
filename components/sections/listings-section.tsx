"use client"

import type { Section, PageData, Property } from "@/lib/schemas"
import { Edit2, Plus, Trash2 } from "lucide-react"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

interface ListingsSectionProps {
  section: Extract<Section, { type: "listings" }>
  pageData: PageData
  onUpdate: (data: PageData) => void
}

export function ListingsSection({ section, pageData, onUpdate }: ListingsSectionProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editingPropertyId, setEditingPropertyId] = useState<string | null>(null)

  const handleUpdate = (updates: Partial<typeof section>) => {
    const updatedSections = pageData.sections.map((s) => (s.id === section.id ? { ...s, ...updates } : s))
    onUpdate({ ...pageData, sections: updatedSections })
  }

  const addProperty = () => {
    const newProperty: Property = {
      id: uuidv4(),
      title: "New Property",
      description: "Property description",
      price: 0,
      location: "Location",
      bedrooms: 0,
      bathrooms: 0,
      areaSqFt: 0,
      images: ["/diverse-property-showcase.png"],
      features: [],
      status: "for-sale",
    }
    handleUpdate({ properties: [...section.properties, newProperty] })
  }

  const updateProperty = (id: string, updates: Partial<Property>) => {
    const updatedProperties = section.properties.map((p) => (p.id === id ? { ...p, ...updates } : p))
    handleUpdate({ properties: updatedProperties })
  }

  const removeProperty = (id: string) => {
    handleUpdate({ properties: section.properties.filter((p) => p.id !== id) })
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

      {isEditing && (
        <div className="mb-6 p-4 bg-neutral-100 dark:bg-neutral-700 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary dark:text-neutral-50 mb-1">Section Title</label>
            <input
              type="text"
              value={section.title}
              onChange={(e) => handleUpdate({ title: e.target.value })}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary dark:text-neutral-50 mb-1">Layout</label>
            <select
              value={section.layout}
              onChange={(e) => handleUpdate({ layout: e.target.value as "grid" | "masonry" })}
              className="input-field"
            >
              <option value="grid">Grid</option>
              <option value="masonry">Masonry</option>
            </select>
          </div>
          <button
            onClick={addProperty}
            className="w-full flex items-center gap-2 px-4 py-2 bg-accent hover:opacity-90 transition-colors text-accent-foreground rounded-lg"
          >
            <Plus className="w-4 h-4" />
            Add Property
          </button>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {section.properties.map((property) => (
          <div key={property.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={property.images[0] || "/placeholder.svg"}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-primary dark:text-neutral-50 mb-2">{property.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{property.description}</p>
              <p className="text-2xl font-bold text-accent mb-2">${property.price.toLocaleString()}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">{property.location}</p>
              {property.bedrooms > 0 && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  {property.bedrooms} Beds | {property.bathrooms} Baths
                </p>
              )}

              {editingPropertyId === property.id ? (
                <div className="space-y-2 mt-4">
                  <input
                    type="text"
                    value={property.title}
                    onChange={(e) => updateProperty(property.id, { title: e.target.value })}
                    className="input-field text-sm"
                    placeholder="Title"
                  />
                  <input
                    type="number"
                    value={property.price}
                    onChange={(e) => updateProperty(property.id, { price: Number.parseFloat(e.target.value) })}
                    className="input-field text-sm"
                    placeholder="Price"
                  />
                  <button
                    onClick={() => setEditingPropertyId(null)}
                    className="w-full px-3 py-1 bg-primary hover:opacity-90 text-primary-foreground rounded text-sm"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setEditingPropertyId(property.id)}
                    className="flex-1 px-3 py-1 bg-accent hover:opacity-90 text-accent-foreground rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeProperty(property.id)}
                    className="px-3 py-1 bg-destructive hover:opacity-90 text-destructive-foreground rounded text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

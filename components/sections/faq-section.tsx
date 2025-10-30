"use client"

import type { Section, PageData, FAQItem } from "@/lib/schemas"
import { Edit2, Plus, Trash2 } from "lucide-react"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

interface FAQSectionProps {
  section: Extract<Section, { type: "faq" }>
  pageData: PageData
  onUpdate: (data: PageData) => void
}

export function FAQSection({ section, pageData, onUpdate }: FAQSectionProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleUpdate = (updates: Partial<typeof section>) => {
    const updatedSections = pageData.sections.map((s) => (s.id === section.id ? { ...s, ...updates } : s))
    onUpdate({ ...pageData, sections: updatedSections })
  }

  const addItem = () => {
    const newItem: FAQItem = {
      id: uuidv4(),
      question: "New Question",
      answer: "Answer goes here",
    }
    handleUpdate({ items: [...section.items, newItem] })
  }

  const updateItem = (id: string, updates: Partial<FAQItem>) => {
    const updatedItems = section.items.map((item) => (item.id === id ? { ...item, ...updates } : item))
    handleUpdate({ items: updatedItems })
  }

  const removeItem = (id: string) => {
    handleUpdate({ items: section.items.filter((item) => item.id !== id) })
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
        <div className="mb-6 p-4 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
          <button
            onClick={addItem}
            className="w-full flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-light transition-colors text-white rounded-lg"
          >
            <Plus className="w-4 h-4" />
            Add FAQ Item
          </button>
        </div>
      )}

      <div className="max-w-2xl mx-auto space-y-3">
        {section.items.map((item) => (
          <details
            key={item.id}
            open={expandedId === item.id}
            onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
            className="group/details p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md transition-shadow"
          >
            <summary className="cursor-pointer font-semibold text-primary dark:text-neutral-50 flex items-center justify-between">
              {item.question}
              <span className="text-neutral-400 group-open/details:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-neutral-600 dark:text-neutral-400">
              {isEditing ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={item.question}
                    onChange={(e) => updateItem(item.id, { question: e.target.value })}
                    className="input-field"
                    placeholder="Question"
                  />
                  <textarea
                    value={item.answer}
                    onChange={(e) => updateItem(item.id, { answer: e.target.value })}
                    className="input-field min-h-24"
                    placeholder="Answer"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-full px-3 py-1 bg-error hover:bg-red-600 text-white rounded text-sm flex items-center gap-2 justify-center"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              ) : (
                <p>{item.answer}</p>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

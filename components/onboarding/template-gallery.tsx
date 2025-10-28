"use client"

import { Card } from "@/components/ui/card"

interface TemplateGalleryProps {
  selected: string
  onSelect: (template: string) => void
}

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary design",
    preview: "/modern-real-estate-template.png",
  },
  {
    id: "luxury",
    name: "Luxury",
    description: "Premium and elegant layout",
    preview: "/luxury-real-estate-template.png",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and focused design",
    preview: "/minimal-real-estate-template.png",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Corporate and trustworthy",
    preview: "/professional-real-estate-template.jpg",
  },
]

export function TemplateGallery({ selected, onSelect }: TemplateGalleryProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Choose a Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <Card
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={`overflow-hidden cursor-pointer transition-all border-2 ${
              selected === template.id ? "border-primary" : "border-border hover:border-primary/50"
            }`}
          >
            <img
              src={template.preview || "/placeholder.svg"}
              alt={template.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-1">{template.name}</h3>
              <p className="text-sm text-muted">{template.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

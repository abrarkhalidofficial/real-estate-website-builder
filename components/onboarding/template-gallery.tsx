"use client"

import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { CheckIcon } from "lucide-react"

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
            className={`overflow-hidden cursor-pointer transition-all border-2 relative ${
              selected === template.id ? "border-primary ring-1 ring-primary/30" : "border-border hover:border-primary/50"
            }`}
          >
            <AspectRatio ratio={16 / 9}>
              <img
                src={template.preview || "/placeholder.svg"}
                alt={template.name}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{template.name}</h3>
              <p className="text-sm text-muted-foreground">{template.description}</p>
            </div>
            {selected === template.id && (
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full p-1">
                <CheckIcon className="size-4" aria-hidden="true" />
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}

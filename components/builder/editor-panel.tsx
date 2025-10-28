"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface EditorPanelProps {
  selectedSection: string
}

export function EditorPanel({ selectedSection }: EditorPanelProps) {
  const [content, setContent] = useState({
    title: "Luxury Villa in Paradise",
    subtitle: "Experience luxury living at its finest",
    description: "This stunning villa offers breathtaking views and world-class amenities.",
    price: "$2,500,000",
    bedrooms: "5",
    bathrooms: "4",
    area: "8,500 sqft",
  })

  const renderEditor = () => {
    switch (selectedSection) {
      case "hero":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Hero Title</label>
              <Input
                value={content.title}
                onChange={(e) => setContent({ ...content, title: e.target.value })}
                className="bg-input border-border text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subtitle</label>
              <Input
                value={content.subtitle}
                onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
                className="bg-input border-border text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Hero Image</label>
              <Card className="border-2 border-dashed border-border p-8 text-center cursor-pointer hover:border-primary transition">
                <div className="text-4xl mb-2">🖼️</div>
                <p className="text-muted mb-2">Click to upload hero image</p>
              </Card>
            </div>
          </div>
        )

      case "featured":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Property Title</label>
              <Input
                value={content.title}
                onChange={(e) => setContent({ ...content, title: e.target.value })}
                className="bg-input border-border text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Price</label>
              <Input
                value={content.price}
                onChange={(e) => setContent({ ...content, price: e.target.value })}
                className="bg-input border-border text-foreground"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Bedrooms</label>
                <Input
                  value={content.bedrooms}
                  onChange={(e) => setContent({ ...content, bedrooms: e.target.value })}
                  className="bg-input border-border text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bathrooms</label>
                <Input
                  value={content.bathrooms}
                  onChange={(e) => setContent({ ...content, bathrooms: e.target.value })}
                  className="bg-input border-border text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Area (sqft)</label>
                <Input
                  value={content.area}
                  onChange={(e) => setContent({ ...content, area: e.target.value })}
                  className="bg-input border-border text-foreground"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={content.description}
                onChange={(e) => setContent({ ...content, description: e.target.value })}
                className="w-full p-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
              />
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Contact Form Title</label>
              <Input defaultValue="Get in Touch" className="bg-input border-border text-foreground" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Form Fields</label>
              <Card className="bg-input border-border p-4 space-y-2">
                <div className="flex items-center justify-between p-2 bg-surface rounded">
                  <span>Name</span>
                  <span className="text-xs text-muted">Required</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-surface rounded">
                  <span>Email</span>
                  <span className="text-xs text-muted">Required</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-surface rounded">
                  <span>Message</span>
                  <span className="text-xs text-muted">Required</span>
                </div>
              </Card>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <p className="text-muted">Select a section to edit</p>
          </div>
        )
    }
  }

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="max-w-2xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Edit {selectedSection}</h2>
        <Card className="bg-surface border-border p-8">{renderEditor()}</Card>
      </div>
    </div>
  )
}

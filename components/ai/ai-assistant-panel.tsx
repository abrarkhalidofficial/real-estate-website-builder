"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface AIAssistantPanelProps {
  onGenerateText: (text: string) => void
  onGenerateImage: (imageUrl: string) => void
}

export function AIAssistantPanel({ onGenerateText, onGenerateImage }: AIAssistantPanelProps) {
  const [activeTab, setActiveTab] = useState<"text" | "image" | "seo">("text")
  const [isGenerating, setIsGenerating] = useState(false)

  return (
    <div className="w-80 border-l border-border bg-surface overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span> AI Assistant
        </h2>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-input rounded-lg p-1">
          {["text", "image", "seo"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-all ${
                activeTab === tab ? "bg-primary text-primary-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              {tab === "text" ? "Text" : tab === "image" ? "Images" : "SEO"}
            </button>
          ))}
        </div>

        {/* Text Generation */}
        {activeTab === "text" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">What would you like to generate?</label>
              <select className="w-full p-2 bg-input border border-border rounded-lg text-foreground text-sm">
                <option>Property Description</option>
                <option>Catchy Headline</option>
                <option>SEO Meta Description</option>
                <option>Call-to-Action Text</option>
                <option>About Section</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Property Details</label>
              <textarea
                placeholder="E.g., 5 bedroom villa with ocean view, modern kitchen, pool..."
                className="w-full p-2 bg-input border border-border rounded-lg text-foreground text-sm placeholder:text-muted"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tone</label>
              <select className="w-full p-2 bg-input border border-border rounded-lg text-foreground text-sm">
                <option>Professional</option>
                <option>Luxury</option>
                <option>Friendly</option>
                <option>Minimalist</option>
              </select>
            </div>

            <Button
              onClick={() => {
                setIsGenerating(true)
                setTimeout(() => {
                  onGenerateText(
                    "Discover luxury living in this stunning 5-bedroom villa featuring breathtaking ocean views, a modern chef's kitchen, resort-style pool, and premium finishes throughout. Perfect for discerning buyers seeking the ultimate coastal lifestyle.",
                  )
                  setIsGenerating(false)
                }, 1500)
              }}
              disabled={isGenerating}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isGenerating ? "Generating..." : "Generate Text"}
            </Button>
          </div>
        )}

        {/* Image Generation */}
        {activeTab === "image" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Image Type</label>
              <select className="w-full p-2 bg-input border border-border rounded-lg text-foreground text-sm">
                <option>Hero Image</option>
                <option>Property Photo</option>
                <option>Room Interior</option>
                <option>Exterior View</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                placeholder="Describe the image you want to generate..."
                className="w-full p-2 bg-input border border-border rounded-lg text-foreground text-sm placeholder:text-muted"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Style</label>
              <select className="w-full p-2 bg-input border border-border rounded-lg text-foreground text-sm">
                <option>Photorealistic</option>
                <option>Modern</option>
                <option>Luxury</option>
                <option>Minimalist</option>
              </select>
            </div>

            <Button
              onClick={() => {
                setIsGenerating(true)
                setTimeout(() => {
                  onGenerateImage("/luxury-villa-exterior.jpg")
                  setIsGenerating(false)
                }, 2000)
              }}
              disabled={isGenerating}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isGenerating ? "Generating..." : "Generate Image"}
            </Button>
          </div>
        )}

        {/* SEO Optimization */}
        {activeTab === "seo" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Page Title</label>
              <Input placeholder="Your page title" className="bg-input border-border text-foreground text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Main Keywords</label>
              <Input
                placeholder="E.g., luxury villa, ocean view, real estate"
                className="bg-input border-border text-foreground text-sm"
              />
            </div>

            <Button
              onClick={() => {
                setIsGenerating(true)
                setTimeout(() => {
                  setIsGenerating(false)
                }, 1500)
              }}
              disabled={isGenerating}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isGenerating ? "Optimizing..." : "Optimize for SEO"}
            </Button>

            <Card className="bg-input border-border p-3 text-sm">
              <p className="font-semibold mb-2">SEO Score: 92/100</p>
              <ul className="space-y-1 text-xs text-muted">
                <li>✓ Meta description optimized</li>
                <li>✓ Keywords properly distributed</li>
                <li>✓ Heading structure correct</li>
                <li>⚠ Add more internal links</li>
              </ul>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

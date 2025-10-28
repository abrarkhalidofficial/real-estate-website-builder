"use client"

import { useState } from "react"
import { Eye, Check } from "lucide-react"

const TEMPLATES = [
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Clean and contemporary design",
    image: "/modern-minimal-real-estate-website.jpg",
    features: ["Responsive", "Fast Loading", "SEO Optimized"],
  },
  {
    id: "luxury-premium",
    name: "Luxury Premium",
    description: "Elegant design for high-end properties",
    image: "/luxury-premium-real-estate-website.jpg",
    features: ["Video Support", "Gallery", "Virtual Tours"],
  },
  {
    id: "corporate-pro",
    name: "Corporate Pro",
    description: "Professional agency template",
    image: "/corporate-professional-real-estate-website.jpg",
    features: ["Team Pages", "CRM Ready", "Analytics"],
  },
  {
    id: "vibrant-modern",
    name: "Vibrant Modern",
    description: "Bold and colorful design",
    image: "/vibrant-modern-real-estate-website.jpg",
    features: ["Animations", "Interactive", "Mobile First"],
  },
  {
    id: "classic-elegant",
    name: "Classic Elegant",
    description: "Timeless and sophisticated",
    image: "/classic-elegant-real-estate-website.jpg",
    features: ["Traditional", "Trustworthy", "Professional"],
  },
  {
    id: "startup-fresh",
    name: "Startup Fresh",
    description: "Modern startup aesthetic",
    image: "/startup-fresh-real-estate-website.jpg",
    features: ["Trendy", "Fast", "Scalable"],
  },
]

export function TemplateSelection({
  onSelect,
  websiteData,
}: {
  onSelect: (templateId: string) => void
  websiteData: any
}) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Choose Your Template</h1>
          <p className="text-slate-400">Select a design that matches your brand. You can customize it later.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {TEMPLATES.map((template) => (
            <div
              key={template.id}
              className={`rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                selectedTemplate === template.id
                  ? "border-blue-600 shadow-lg shadow-blue-600/20"
                  : "border-slate-700 hover:border-slate-600"
              }`}
            >
              <div className="relative h-48 bg-slate-700 overflow-hidden">
                <img
                  src={template.image || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => setPreviewTemplate(template.id)}
                    className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-100"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                </div>
              </div>

              <div className="p-4 bg-slate-800">
                <h3 className="text-lg font-bold text-white mb-1">{template.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{template.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {template.features.map((feature) => (
                    <span key={feature} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setSelectedTemplate(template.id)
                    onSelect(template.id)
                  }}
                  className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                    selectedTemplate === template.id
                      ? "bg-blue-600 text-white"
                      : "bg-slate-700 text-white hover:bg-slate-600"
                  }`}
                >
                  {selectedTemplate === template.id ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4" />
                      Selected
                    </span>
                  ) : (
                    "Select Template"
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Modal */}
        {previewTemplate && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">
                  {TEMPLATES.find((t) => t.id === previewTemplate)?.name} Preview
                </h2>
                <button onClick={() => setPreviewTemplate(null)} className="text-slate-400 hover:text-white text-2xl">
                  ×
                </button>
              </div>
              <div className="p-8">
                <img
                  src={TEMPLATES.find((t) => t.id === previewTemplate)?.image || "/placeholder.svg"}
                  alt="Template preview"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

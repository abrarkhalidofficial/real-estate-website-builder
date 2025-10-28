"use client"

import { useState } from "react"
import { Eye, Check, Sparkles, Zap, Globe, BarChart3 } from "lucide-react"

const LUXURY_TEMPLATES = [
  {
    id: "ultra-luxury",
    name: "Ultra Luxury",
    description: "Premium showcase for high-end properties",
    image: "/luxury-premium-real-estate-website.jpg",
    price: "$299/month",
    features: [
      "4K Video Support",
      "Virtual 360° Tours",
      "AI Property Descriptions",
      "Advanced Analytics",
      "White Label Options",
      "Priority Support",
    ],
    pages: ["Home", "Listings", "Property Detail", "About", "Contact", "Blog"],
    colors: ["Gold", "Black", "White"],
    animations: true,
    seo: true,
    crmIntegration: true,
  },
  {
    id: "modern-elite",
    name: "Modern Elite",
    description: "Contemporary design for premium agencies",
    image: "/modern-minimal-real-estate-website.jpg",
    price: "$249/month",
    features: [
      "Responsive Design",
      "AI Content Generation",
      "Lead Capture Forms",
      "Email Marketing",
      "Social Media Integration",
      "Mobile App Ready",
    ],
    pages: ["Home", "Listings", "Property Detail", "Team", "Contact", "Resources"],
    colors: ["Blue", "Gray", "White"],
    animations: true,
    seo: true,
    crmIntegration: true,
  },
  {
    id: "corporate-excellence",
    name: "Corporate Excellence",
    description: "Professional template for large agencies",
    image: "/corporate-professional-real-estate-website.jpg",
    price: "$199/month",
    features: [
      "Multi-Agent Support",
      "Team Management",
      "Advanced Reporting",
      "CRM Integration",
      "API Access",
      "Custom Branding",
    ],
    pages: ["Home", "Listings", "Property Detail", "Team", "About", "Contact", "Blog"],
    colors: ["Navy", "Gray", "White"],
    animations: false,
    seo: true,
    crmIntegration: true,
  },
  {
    id: "boutique-luxury",
    name: "Boutique Luxury",
    description: "Exclusive design for boutique firms",
    image: "/vibrant-modern-real-estate-website.jpg",
    price: "$279/month",
    features: [
      "Custom Animations",
      "Portfolio Showcase",
      "Client Testimonials",
      "AI Image Enhancement",
      "Advanced Filtering",
      "Exclusive Listings",
    ],
    pages: ["Home", "Portfolio", "Listings", "Property Detail", "About", "Contact"],
    colors: ["Rose", "Cream", "Black"],
    animations: true,
    seo: true,
    crmIntegration: false,
  },
  {
    id: "investment-pro",
    name: "Investment Pro",
    description: "Specialized for investment properties",
    image: "/startup-fresh-real-estate-website.jpg",
    price: "$229/month",
    features: [
      "ROI Calculator",
      "Market Analysis",
      "Investment Metrics",
      "AI Valuation",
      "Portfolio Tracking",
      "Investor Dashboard",
    ],
    pages: ["Home", "Listings", "Property Detail", "Analysis", "Dashboard", "Contact"],
    colors: ["Green", "Gray", "White"],
    animations: true,
    seo: true,
    crmIntegration: true,
  },
]

export function LuxuryTemplates({
  onSelect,
  websiteData,
}: {
  onSelect: (templateId: string) => void
  websiteData: any
}) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [detailTemplate, setDetailTemplate] = useState<string | null>(null)

  const template = LUXURY_TEMPLATES.find((t) => t.id === detailTemplate)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber-500" />
            <span className="text-amber-500 font-semibold">Premium Collection</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Luxury Real Estate Templates</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose from our curated collection of premium templates designed for high-end real estate professionals
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {LUXURY_TEMPLATES.map((template) => (
            <div
              key={template.id}
              className={`rounded-xl overflow-hidden border-2 transition-all cursor-pointer group ${
                selectedTemplate === template.id
                  ? "border-amber-500 shadow-2xl shadow-amber-500/20 bg-slate-800/50"
                  : "border-slate-700 hover:border-slate-600 bg-slate-800/30"
              }`}
            >
              {/* Image */}
              <div className="relative h-56 bg-slate-700 overflow-hidden">
                <img
                  src={template.image || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => setDetailTemplate(template.id)}
                    className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-100"
                  >
                    <Eye className="w-4 h-4" />
                    Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-slate-800/50 backdrop-blur">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{template.name}</h3>
                    <p className="text-sm text-slate-400">{template.description}</p>
                  </div>
                </div>

                <div className="text-2xl font-bold text-amber-500 mb-4">{template.price}</div>

                {/* Quick Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                  {template.features.length > 3 && (
                    <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">
                      +{template.features.length - 3} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => {
                    setSelectedTemplate(template.id)
                    onSelect(template.id)
                  }}
                  className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                    selectedTemplate === template.id
                      ? "bg-amber-500 text-slate-900 hover:bg-amber-600"
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

        {/* Detail Modal */}
        {detailTemplate && template && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-slate-700">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 p-6 flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{template.name}</h2>
                  <p className="text-slate-400">{template.description}</p>
                </div>
                <button
                  onClick={() => setDetailTemplate(null)}
                  className="text-slate-400 hover:text-white text-3xl font-light"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Preview Image */}
                <div>
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full rounded-xl border border-slate-700"
                  />
                </div>

                {/* Pricing and Key Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="text-sm text-slate-400 mb-1">Pricing</div>
                    <div className="text-2xl font-bold text-amber-500">{template.price}</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="text-sm text-slate-400 mb-1">Pages Included</div>
                    <div className="text-2xl font-bold text-white">{template.pages.length}</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="text-sm text-slate-400 mb-1">Features</div>
                    <div className="text-2xl font-bold text-white">{template.features.length}</div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    Premium Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {template.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 bg-slate-700/30 p-3 rounded-lg border border-slate-600"
                      >
                        <Zap className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pages */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-500" />
                    Included Pages
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {template.pages.map((page) => (
                      <div
                        key={page}
                        className="bg-slate-700/30 p-3 rounded-lg border border-slate-600 text-center text-slate-300"
                      >
                        {page}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-green-500" />
                    Capabilities
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Check className={`w-5 h-5 ${template.animations ? "text-green-500" : "text-slate-600"}`} />
                      <span>Advanced Animations</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Check className={`w-5 h-5 ${template.seo ? "text-green-500" : "text-slate-600"}`} />
                      <span>SEO Optimized</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Check className={`w-5 h-5 ${template.crmIntegration ? "text-green-500" : "text-slate-600"}`} />
                      <span>CRM Integration</span>
                    </div>
                  </div>
                </div>

                {/* Color Scheme */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Color Scheme</h3>
                  <div className="flex gap-4">
                    {template.colors.map((color) => (
                      <div key={color} className="flex items-center gap-2">
                        <div
                          className={`w-12 h-12 rounded-lg border-2 border-slate-600 ${
                            color === "Gold"
                              ? "bg-amber-500"
                              : color === "Black"
                                ? "bg-slate-900"
                                : color === "White"
                                  ? "bg-white"
                                  : color === "Blue"
                                    ? "bg-blue-600"
                                    : color === "Gray"
                                      ? "bg-slate-500"
                                      : color === "Navy"
                                        ? "bg-blue-900"
                                        : color === "Rose"
                                          ? "bg-rose-500"
                                          : color === "Cream"
                                            ? "bg-amber-100"
                                            : color === "Green"
                                              ? "bg-green-600"
                                              : "bg-slate-400"
                          }`}
                        />
                        <span className="text-slate-300">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    setSelectedTemplate(template.id)
                    onSelect(template.id)
                    setDetailTemplate(null)
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-3 rounded-lg transition-all"
                >
                  Select This Template
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

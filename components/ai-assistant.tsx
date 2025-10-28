"use client"

import { useState } from "react"
import { Sparkles, Wand2, ImageIcon, FileText, Zap } from "lucide-react"

export function AIAssistant({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"content" | "images" | "seo" | "branding">("content")
  const [isGenerating, setIsGenerating] = useState(false)

  const generateContent = async (type: string) => {
    setIsGenerating(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsGenerating(false)
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 rounded-2xl max-w-2xl w-full border border-slate-700 shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-900 to-slate-900 border-b border-slate-700 p-6 flex justify-between items-center rounded-t-2xl">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">AI Assistant</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-2xl">
            ×
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-700 bg-slate-800/50">
          {[
            { id: "content", label: "Content", icon: FileText },
            { id: "images", label: "Images", icon: ImageIcon },
            { id: "seo", label: "SEO", icon: Zap },
            { id: "branding", label: "Branding", icon: Sparkles },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex-1 px-4 py-3 font-semibold flex items-center justify-center gap-2 transition-colors ${
                activeTab === id
                  ? "text-purple-400 border-b-2 border-purple-400"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {activeTab === "content" && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Generate Property Descriptions</h3>
              <p className="text-slate-400">Let AI create compelling property descriptions for your listings</p>
              <div className="space-y-3">
                {["Luxury Description", "Investment Focus", "Family Home", "Modern Minimalist"].map((type) => (
                  <button
                    key={type}
                    onClick={() => generateContent(type)}
                    disabled={isGenerating}
                    className="w-full bg-slate-700 hover:bg-slate-600 disabled:bg-slate-700 disabled:opacity-50 text-white p-3 rounded-lg flex items-center justify-between transition-colors"
                  >
                    <span>{type}</span>
                    {isGenerating ? <div className="animate-spin">⚙️</div> : <Wand2 className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "images" && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">AI Image Enhancement</h3>
              <p className="text-slate-400">Enhance and generate property images with AI</p>
              <div className="space-y-3">
                {["Enhance Quality", "Virtual Staging", "Remove Objects", "Generate Variations"].map((type) => (
                  <button
                    key={type}
                    onClick={() => generateContent(type)}
                    disabled={isGenerating}
                    className="w-full bg-slate-700 hover:bg-slate-600 disabled:bg-slate-700 disabled:opacity-50 text-white p-3 rounded-lg flex items-center justify-between transition-colors"
                  >
                    <span>{type}</span>
                    {isGenerating ? <div className="animate-spin">⚙️</div> : <ImageIcon className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "seo" && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">SEO Optimization</h3>
              <p className="text-slate-400">Optimize your content for search engines</p>
              <div className="space-y-3">
                {["Generate Meta Tags", "Create Keywords", "Optimize Headings", "Generate Schema"].map((type) => (
                  <button
                    key={type}
                    onClick={() => generateContent(type)}
                    disabled={isGenerating}
                    className="w-full bg-slate-700 hover:bg-slate-600 disabled:bg-slate-700 disabled:opacity-50 text-white p-3 rounded-lg flex items-center justify-between transition-colors"
                  >
                    <span>{type}</span>
                    {isGenerating ? <div className="animate-spin">⚙️</div> : <Zap className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "branding" && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Brand Generation</h3>
              <p className="text-slate-400">Generate brand elements and guidelines</p>
              <div className="space-y-3">
                {["Generate Logo", "Color Palette", "Brand Guidelines", "Social Media Kit"].map((type) => (
                  <button
                    key={type}
                    onClick={() => generateContent(type)}
                    disabled={isGenerating}
                    className="w-full bg-slate-700 hover:bg-slate-600 disabled:bg-slate-700 disabled:opacity-50 text-white p-3 rounded-lg flex items-center justify-between transition-colors"
                  >
                    <span>{type}</span>
                    {isGenerating ? <div className="animate-spin">⚙️</div> : <Sparkles className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-800/50 border-t border-slate-700 p-4 rounded-b-2xl">
          <p className="text-xs text-slate-500 text-center">
            AI features are powered by advanced machine learning models. Results may vary.
          </p>
        </div>
      </div>
    </div>
  )
}

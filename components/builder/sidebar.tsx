"use client"

import { Card } from "@/components/ui/card"

interface SidebarProps {
  selectedSection: string
  onSelectSection: (section: string) => void
}

const sections = [
  { id: "hero", name: "Hero Section", icon: "🎯" },
  { id: "listings", name: "Listings Grid", icon: "📋" },
  { id: "featured", name: "Featured Property", icon: "⭐" },
  { id: "about", name: "About Section", icon: "ℹ️" },
  { id: "contact", name: "Contact Form", icon: "📧" },
  { id: "footer", name: "Footer", icon: "👣" },
]

export function Sidebar({ selectedSection, onSelectSection }: SidebarProps) {
  return (
    <div className="w-64 border-r border-border bg-surface overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-bold mb-4">Page Sections</h2>
        <div className="space-y-2">
          {sections.map((section) => (
            <Card
              key={section.id}
              onClick={() => onSelectSection(section.id)}
              className={`p-3 cursor-pointer transition-all border-2 ${
                selectedSection === section.id
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{section.icon}</span>
                <span className="font-medium text-sm">{section.name}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-border">
        <h3 className="text-sm font-bold mb-3 text-muted">DESIGN</h3>
        <div className="space-y-3">
          <div>
            <label className="text-xs font-medium block mb-2">Primary Color</label>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded bg-primary cursor-pointer border-2 border-primary" />
              <div className="w-8 h-8 rounded bg-accent cursor-pointer border-2 border-border hover:border-accent" />
              <div className="w-8 h-8 rounded bg-muted cursor-pointer border-2 border-border hover:border-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

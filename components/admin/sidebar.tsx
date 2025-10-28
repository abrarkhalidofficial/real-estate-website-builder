"use client"

import { Card } from "@/components/ui/card"

interface AdminSidebarProps {
  activeTab: string
  onTabChange: (tab: any) => void
}

const menuItems = [
  { id: "overview", label: "Overview", icon: "📊" },
  { id: "users", label: "Users", icon: "👥" },
  { id: "websites", label: "Websites", icon: "🌐" },
  { id: "templates", label: "Templates", icon: "🎨" },
  { id: "settings", label: "Settings", icon: "⚙️" },
]

export function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  return (
    <div className="w-64 border-r border-border bg-surface h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <div className="text-2xl font-bold text-gradient mb-8">RealEstate.AI</div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`p-3 cursor-pointer transition-all border-2 ${
                activeTab === item.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-sm">{item.label}</span>
              </div>
            </Card>
          ))}
        </nav>
      </div>

      <div className="p-6 border-t border-border">
        <div className="bg-input rounded-lg p-4">
          <p className="text-xs font-medium text-muted mb-2">ADMIN USER</p>
          <p className="font-semibold text-sm">Admin Account</p>
          <p className="text-xs text-muted">admin@realestate.ai</p>
        </div>
      </div>
    </div>
  )
}

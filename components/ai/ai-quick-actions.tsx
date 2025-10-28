"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface AIQuickActionsProps {
  onAction: (action: string) => void
}

export function AIQuickActions({ onAction }: AIQuickActionsProps) {
  const actions = [
    {
      id: "generate-description",
      title: "Generate Description",
      description: "AI-powered property description",
      icon: "📝",
    },
    {
      id: "generate-headline",
      title: "Create Headline",
      description: "Catchy and SEO-friendly headline",
      icon: "✨",
    },
    {
      id: "generate-image",
      title: "Generate Image",
      description: "AI-generated property image",
      icon: "🖼️",
    },
    {
      id: "optimize-seo",
      title: "Optimize SEO",
      description: "Improve search engine ranking",
      icon: "🔍",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {actions.map((action) => (
        <Card
          key={action.id}
          onClick={() => onAction(action.id)}
          className="bg-surface border-border p-4 cursor-pointer hover:border-primary transition"
        >
          <div className="text-3xl mb-2">{action.icon}</div>
          <h3 className="font-semibold mb-1">{action.title}</h3>
          <p className="text-xs text-muted mb-3">{action.description}</p>
          <Button variant="outline" className="w-full border-border hover:bg-surface bg-transparent text-xs">
            Use AI
          </Button>
        </Card>
      ))}
    </div>
  )
}

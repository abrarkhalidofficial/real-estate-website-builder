"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AISuggestionsProps {
  suggestions: Array<{
    id: string
    title: string
    description: string
    type: "text" | "image" | "seo"
  }>
  onApply: (id: string) => void
}

export function AISuggestions({ suggestions, onApply }: AISuggestionsProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-sm">AI Suggestions</h3>
      {suggestions.map((suggestion) => (
        <Card key={suggestion.id} className="bg-input border-border p-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <p className="font-medium text-sm">{suggestion.title}</p>
              <p className="text-xs text-muted mt-1">{suggestion.description}</p>
            </div>
            <Button
              onClick={() => onApply(suggestion.id)}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
            >
              Apply
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}

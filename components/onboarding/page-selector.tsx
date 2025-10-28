"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PageSelectorProps {
  selected: string[]
  onSelect: (pages: string[]) => void
  onNext: () => void
  onBack: () => void
}

const availablePages = [
  { id: "home", name: "Home", description: "Hero banner and featured listings" },
  { id: "listings", name: "Listings", description: "Property grid with filters" },
  { id: "detail", name: "Property Detail", description: "Individual property showcase" },
  { id: "about", name: "About", description: "Your story and team information" },
  { id: "contact", name: "Contact", description: "Contact form and location map" },
  { id: "blog", name: "Blog", description: "Articles and market insights" },
]

export function PageSelector({ selected, onSelect, onNext, onBack }: PageSelectorProps) {
  const togglePage = (pageId: string) => {
    if (selected.includes(pageId)) {
      onSelect(selected.filter((p) => p !== pageId))
    } else {
      onSelect([...selected, pageId])
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Select Pages for Your Website</h2>
      <div className="space-y-3 mb-8">
        {availablePages.map((page) => (
          <Card
            key={page.id}
            onClick={() => togglePage(page.id)}
            className={`p-4 cursor-pointer transition-all border-2 flex items-center ${
              selected.includes(page.id) ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
            }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(page.id)}
              onChange={() => {}}
              className="w-5 h-5 rounded border-border cursor-pointer"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{page.name}</h3>
              <p className="text-sm text-muted">{page.description}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack} className="flex-1 border-border hover:bg-surface bg-transparent">
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={selected.length === 0}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

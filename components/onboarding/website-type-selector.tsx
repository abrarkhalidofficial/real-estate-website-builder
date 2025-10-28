"use client"

import { Card } from "@/components/ui/card"

interface WebsiteTypeSelectorProps {
  selected: string
  onSelect: (type: string) => void
}

const websiteTypes = [
  {
    id: "agency",
    title: "Real Estate Agency",
    description: "Showcase your agency and list properties",
    icon: "🏢",
  },
  {
    id: "developer",
    title: "Property Developer",
    description: "Highlight development projects and properties",
    icon: "🏗️",
  },
  {
    id: "villa",
    title: "Villa Listing",
    description: "Feature luxury villas and properties",
    icon: "🏰",
  },
  {
    id: "commercial",
    title: "Commercial Real Estate",
    description: "Showcase commercial properties and spaces",
    icon: "🏢",
  },
]

export function WebsiteTypeSelector({ selected, onSelect }: WebsiteTypeSelectorProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">What type of website do you need?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {websiteTypes.map((type) => (
          <Card
            key={type.id}
            onClick={() => onSelect(type.id)}
            className={`p-6 cursor-pointer transition-all border-2 ${
              selected === type.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
            }`}
          >
            <div className="text-4xl mb-3">{type.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
            <p className="text-muted text-sm">{type.description}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

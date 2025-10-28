"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function DashboardPage() {
  const [websites, setWebsites] = useState([
    {
      id: 1,
      name: "Luxury Villa Listing",
      template: "Modern",
      status: "Published",
      views: 1234,
      created: "2025-01-15",
    },
    {
      id: 2,
      name: "Downtown Apartments",
      template: "Professional",
      status: "Draft",
      views: 0,
      created: "2025-01-20",
    },
    {
      id: 3,
      name: "Commercial Space",
      template: "Minimal",
      status: "Published",
      views: 856,
      created: "2025-01-10",
    },
  ])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">My Websites</h1>
            <p className="text-muted">Manage and create your real estate websites</p>
          </div>
          <Link href="/onboarding">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Create New Website</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {websites.length === 0 ? (
          <Card className="bg-surface border-border p-12 text-center">
            <div className="text-5xl mb-4">🌐</div>
            <h2 className="text-2xl font-bold mb-2">No websites yet</h2>
            <p className="text-muted mb-6">Create your first real estate website to get started</p>
            <Link href="/onboarding">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Create Website</Button>
            </Link>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websites.map((website) => (
              <Card
                key={website.id}
                className="bg-surface border-border overflow-hidden hover:border-primary transition"
              >
                <div className="bg-input h-40 flex items-center justify-center">
                  <span className="text-muted">Website Preview</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{website.name}</h3>
                  <div className="space-y-2 mb-4 text-sm text-muted">
                    <p>Template: {website.template}</p>
                    <p>Created: {website.created}</p>
                    <p>Views: {website.views}</p>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        website.status === "Published" ? "bg-primary/20 text-primary" : "bg-muted/20 text-muted"
                      }`}
                    >
                      {website.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/builder/${website.id}`} className="flex-1">
                      <Button variant="outline" className="w-full border-border hover:bg-surface bg-transparent">
                        Edit
                      </Button>
                    </Link>
                    <Link href={`/preview/${website.id}`} className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">View</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import type { Property } from "@/lib/schemas"
import { getActivePageData, getAllProperties } from "@/lib/client-project"

export default function ComparePage() {
  const [projectId, setProjectId] = useState<string | null>(null)
  const [properties, setProperties] = useState<Property[]>([])
  const [compareIds, setCompareIds] = useState<string[]>([])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id") || undefined
    const page = getActivePageData(id)
    if (!page) return
    setProjectId(page.id)
    const all = getAllProperties(page)
    setProperties(all)
    const key = `compare:${page.id}`
    const raw = localStorage.getItem(key)
    const list = raw ? (JSON.parse(raw) as string[]) : []
    setCompareIds(list)
  }, [])

  const items = useMemo(() => {
    return properties.filter((p) => compareIds.includes(p.id))
  }, [properties, compareIds])

  const fields = ["Price", "Location", "Bedrooms", "Bathrooms", "Area (sqft)", "Status", "Features"] as const

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-40 bg-popover/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">RE</span>
            </div>
            <span className="font-bold text-lg text-primary">Compare</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            {projectId ? <span>Project: {projectId}</span> : <span>Using default data</span>}
          </div>
        </div>
      </nav>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {items.length < 2 ? (
            <div className="card p-6 text-center">
              <p className="text-muted-foreground mb-4">Add at least two properties to compare.</p>
              <Link href={`/listings${projectId ? `?id=${encodeURIComponent(projectId)}` : ""}`} className="btn-primary inline-block">
                Browse Listings
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto card">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-3">Field</th>
                    {items.map((p) => (
                      <th key={p.id} className="text-left p-3">{p.title}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fields.map((f) => (
                    <tr key={f} className="border-t">
                      <td className="p-3 font-medium">{f}</td>
                      {items.map((p) => (
                        <td key={p.id + f} className="p-3">
                          {f === "Price" && (p.price ? `$${p.price.toLocaleString()}` : "—")}
                          {f === "Location" && p.location}
                          {f === "Bedrooms" && (p.bedrooms ?? "—")}
                          {f === "Bathrooms" && (p.bathrooms ?? "—")}
                          {f === "Area (sqft)" && (p.areaSqFt ?? "—")}
                          {f === "Status" && (p.status ?? "—")}
                          {f === "Features" && (p.features?.length ? p.features.join(", ") : "—")}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
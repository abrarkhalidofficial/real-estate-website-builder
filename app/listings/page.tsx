"use client"

import { useEffect, useMemo, useState } from "react"
import type { Property } from "@/lib/schemas"
import { getActivePageData, getAllProperties } from "@/lib/client-project"
import { TEMPLATES } from "@/lib/templates"
import { PropertyCard, slugify } from "@/components/site/property-card"
import Link from "next/link"

export default function ListingsPage() {
  const [projectId, setProjectId] = useState<string | null>(null)
  const [properties, setProperties] = useState<Property[]>([])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id") || null
    const page = getActivePageData(id || undefined) || TEMPLATES["luxury-villas"]
    if (page) {
      setProjectId(page.id ?? "default")
      setProperties(getAllProperties(page))
    }
  }, [])

  const [q, setQ] = useState("")
  const [minPrice, setMinPrice] = useState<number | "">("")
  const [maxPrice, setMaxPrice] = useState<number | "">("")
  const [bedrooms, setBedrooms] = useState<number | "">("")
  const [bathrooms, setBathrooms] = useState<number | "">("")
  const [status, setStatus] = useState<string>("")

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesQ = q
        ? [p.title, p.location, p.description, ...(p.features || [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        : true
      const matchesMin = minPrice !== "" ? p.price >= Number(minPrice) : true
      const matchesMax = maxPrice !== "" ? p.price <= Number(maxPrice) : true
      const matchesBeds = bedrooms !== "" ? (p.bedrooms ?? 0) >= Number(bedrooms) : true
      const matchesBaths = bathrooms !== "" ? (p.bathrooms ?? 0) >= Number(bathrooms) : true
      const matchesStatus = status ? p.status === status : true
      return matchesQ && matchesMin && matchesMax && matchesBeds && matchesBaths && matchesStatus
    })
  }, [properties, q, minPrice, maxPrice, bedrooms, bathrooms, status])

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-40 bg-popover/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">RE</span>
            </div>
            <span className="font-bold text-lg text-primary">Listings</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            {projectId ? <span>Project: {projectId}</span> : <span>Using default data</span>}
          </div>
        </div>
      </nav>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          <aside className="card p-4 md:col-span-1">
            <h2 className="text-xl font-bold text-primary mb-4">Filters</h2>
            <div className="space-y-3">
              <input className="input-field" placeholder="Search keywords" value={q} onChange={(e) => setQ(e.target.value)} />
              <div className="grid grid-cols-2 gap-3">
                <input
                  className="input-field"
                  type="number"
                  placeholder="Min price"
                  value={minPrice === "" ? "" : String(minPrice)}
                  onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : "")}
                />
                <input
                  className="input-field"
                  type="number"
                  placeholder="Max price"
                  value={maxPrice === "" ? "" : String(maxPrice)}
                  onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : "")}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  className="input-field"
                  type="number"
                  placeholder="Min beds"
                  value={bedrooms === "" ? "" : String(bedrooms)}
                  onChange={(e) => setBedrooms(e.target.value ? Number(e.target.value) : "")}
                />
                <input
                  className="input-field"
                  type="number"
                  placeholder="Min baths"
                  value={bathrooms === "" ? "" : String(bathrooms)}
                  onChange={(e) => setBathrooms(e.target.value ? Number(e.target.value) : "")}
                />
              </div>
              <select className="input-field" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Any status</option>
                <option value="for-sale">For Sale</option>
                <option value="for-rent">For Rent</option>
                <option value="sold">Sold</option>
              </select>
            </div>
          </aside>

          <div className="md:col-span-3">
            <div className="grid md:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <PropertyCard key={`${p.id}-${slugify(p.title)}`} property={p} projectId={projectId ?? "default"} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="card p-6 mt-6 text-center text-muted-foreground">No properties match the filters.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
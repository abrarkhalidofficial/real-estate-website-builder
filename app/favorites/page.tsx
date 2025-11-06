"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import type { Property } from "@/lib/schemas"
import { getActivePageData, getAllProperties } from "@/lib/client-project"
import { PropertyCard, slugify } from "@/components/site/property-card"

export default function FavoritesPage() {
  const [projectId, setProjectId] = useState<string | null>(null)
  const [properties, setProperties] = useState<Property[]>([])
  const [favoriteIds, setFavoriteIds] = useState<string[]>([])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id") || undefined
    const page = getActivePageData(id)
    if (!page) return
    setProjectId(page.id)
    const all = getAllProperties(page)
    setProperties(all)
    const key = `favorites:${page.id}`
    const raw = localStorage.getItem(key)
    const favs = raw ? (JSON.parse(raw) as string[]) : []
    setFavoriteIds(favs)
  }, [])

  const favorites = useMemo(() => {
    return properties.filter((p) => favoriteIds.includes(p.id))
  }, [properties, favoriteIds])

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-40 bg-popover/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">RE</span>
            </div>
            <span className="font-bold text-lg text-primary">Favorites</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            {projectId ? <span>Project: {projectId}</span> : <span>Using default data</span>}
          </div>
        </div>
      </nav>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {favorites.length === 0 ? (
            <div className="card p-6 text-center">
              <p className="text-muted-foreground mb-4">No favorites yet.</p>
              <Link href={`/listings${projectId ? `?id=${encodeURIComponent(projectId)}` : ""}`} className="btn-primary inline-block">
                Browse Listings
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {favorites.map((p) => (
                <PropertyCard key={`${p.id}-${slugify(p.title)}`} property={p} projectId={projectId ?? "default"} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
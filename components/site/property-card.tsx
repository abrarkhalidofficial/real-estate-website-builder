"use client"

import Link from "next/link"
import { Heart, Scale } from "lucide-react"
import type { Property } from "@/lib/schemas"

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

export function PropertyCard({ property, projectId }: { property: Property; projectId: string }) {
  const slug = slugify(property.title)

  const toggleFavorite = (id: string) => {
    try {
      const key = `favorites:${projectId}`
      const raw = typeof window !== "undefined" ? localStorage.getItem(key) : null
      const favs = raw ? (JSON.parse(raw) as string[]) : []
      const next = favs.includes(id) ? favs.filter((x) => x !== id) : [...favs, id]
      localStorage.setItem(key, JSON.stringify(next))
    } catch (e) {
      console.error("Failed to toggle favorite", e)
    }
  }

  const toggleCompare = (id: string) => {
    try {
      const key = `compare:${projectId}`
      const raw = typeof window !== "undefined" ? localStorage.getItem(key) : null
      const list = raw ? (JSON.parse(raw) as string[]) : []
      let next = list
      if (list.includes(id)) {
        next = list.filter((x) => x !== id)
      } else if (list.length < 4) {
        next = [...list, id]
      }
      localStorage.setItem(key, JSON.stringify(next))
    } catch (e) {
      console.error("Failed to toggle compare", e)
    }
  }

  return (
    <div className="card overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={property.images[0] || "/placeholder.svg"}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-primary dark:text-neutral-50 mb-1">{property.title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{property.location}</p>
        <p className="text-2xl font-bold text-accent mb-2">
          {property.price ? `$${property.price.toLocaleString()}` : "Price on request"}
        </p>
        {property.bedrooms !== undefined && property.bathrooms !== undefined && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
            {property.bedrooms} Beds • {property.bathrooms} Baths • {property.areaSqFt ?? "—"} sqft
          </p>
        )}

        <div className="flex gap-2 mt-4">
          <Link
            href={`/listings/${slug}?id=${encodeURIComponent(projectId)}&pid=${encodeURIComponent(property.id)}`}
            className="flex-1 btn-primary text-center"
          >
            View Details
          </Link>
          <button
            onClick={() => toggleFavorite(property.id)}
            className="px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600"
            title="Toggle Favorite"
          >
            <Heart className="w-4 h-4" />
          </button>
          <button
            onClick={() => toggleCompare(property.id)}
            className="px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600"
            title="Add to Compare"
          >
            <Scale className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
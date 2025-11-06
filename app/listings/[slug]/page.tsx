"use client"

import { useEffect, useMemo, useState } from "react"
import { useParams, useSearchParams } from "next/navigation"
import type { Property } from "@/lib/schemas"
import { getActivePageData, getAllProperties } from "@/lib/client-project"
import { TEMPLATES } from "@/lib/templates"
import Link from "next/link"
import { Heart, Scale, MapPin, Bath, Bed, SquareM, Mail } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { slugify } from "@/components/site/property-card"

export default function PropertyDetailPage() {
  const params = useParams<{ slug: string }>()
  const search = useSearchParams()
  const [projectId, setProjectId] = useState<string | null>(null)
  const [property, setProperty] = useState<Property | null>(null)
  const [all, setAll] = useState<Property[]>([])

  useEffect(() => {
    const id = search.get("id") || undefined
    const pid = search.get("pid") || undefined
    const page = getActivePageData(id) || TEMPLATES["luxury-villas"]
    setProjectId(page.id ?? "default")
    const props = getAllProperties(page)
    setAll(props)
    let found: Property | undefined
    if (pid) {
      found = props.find((p) => p.id === pid)
    }
    if (!found) {
      found = props.find((p) => slugify(p.title) === params.slug)
    }
    setProperty(found ?? null)
  }, [params.slug, search])

  const similar = useMemo(() => {
    if (!property) return [] as Property[]
    const pool = all.filter((p) => p.id !== property.id)
    const sameStatus = pool.filter((p) => p.status === property.status)
    return (sameStatus.length > 0 ? sameStatus : pool).slice(0, 3)
  }, [all, property])

  const toggleFavorite = (id: string) => {
    if (!projectId) return
    try {
      const key = `favorites:${projectId}`
      const raw = localStorage.getItem(key)
      const favs = raw ? (JSON.parse(raw) as string[]) : []
      const next = favs.includes(id) ? favs.filter((x) => x !== id) : [...favs, id]
      localStorage.setItem(key, JSON.stringify(next))
      toast({ title: next.includes(id) ? "Added to favorites" : "Removed from favorites" })
    } catch (e) {
      console.error(e)
    }
  }

  const toggleCompare = (id: string) => {
    if (!projectId) return
    try {
      const key = `compare:${projectId}`
      const raw = localStorage.getItem(key)
      const list = raw ? (JSON.parse(raw) as string[]) : []
      let next = list
      if (list.includes(id)) {
        next = list.filter((x) => x !== id)
      } else if (list.length < 4) {
        next = [...list, id]
      }
      localStorage.setItem(key, JSON.stringify(next))
      toast({ title: list.includes(id) ? "Removed from compare" : "Added to compare" })
    } catch (e) {
      console.error(e)
    }
  }

  const submitInquiry = (form: HTMLFormElement) => {
    if (!projectId || !property) return
    const fd = new FormData(form)
    const payload = {
      pid: property.id,
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
      createdAt: new Date().toISOString(),
    }
    try {
      const key = `inquiries:${projectId}`
      const raw = localStorage.getItem(key)
      const list = raw ? (JSON.parse(raw) as any[]) : []
      localStorage.setItem(key, JSON.stringify([payload, ...list]))
      toast({ title: "Inquiry submitted", description: "We’ll get back to you soon." })
      form.reset()
    } catch (e) {
      console.error(e)
    }
  }

  if (!property) {
    return (
      <div className="min-h-screen">
        <nav className="sticky top-0 z-40 bg-popover/80 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/listings" className="font-bold text-primary">← Back to Listings</Link>
            <div className="text-sm text-muted-foreground">{projectId ? `Project: ${projectId}` : "Using default data"}</div>
          </div>
        </nav>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center card p-8">Property not found.</div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-40 bg-popover/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/listings" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">RE</span>
            </div>
            <span className="font-bold text-lg text-primary">Details</span>
          </Link>
          <div className="flex items-center gap-2">
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
      </nav>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="card overflow-hidden">
              <img
                src={property.images[0] || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold text-primary mb-2">{property.title}</h1>
                <p className="text-muted-foreground mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" />{property.location}</p>
                <p className="text-3xl font-bold text-accent mb-4">
                  {property.price ? `$${property.price.toLocaleString()}` : "Price on request"}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  {property.bedrooms !== undefined && (
                    <span className="inline-flex items-center gap-1"><Bed className="w-4 h-4" />{property.bedrooms} Beds</span>
                  )}
                  {property.bathrooms !== undefined && (
                    <span className="inline-flex items-center gap-1"><Bath className="w-4 h-4" />{property.bathrooms} Baths</span>
                  )}
                  {property.areaSqFt !== undefined && (
                    <span className="inline-flex items-center gap-1"><SquareM className="w-4 h-4" />{property.areaSqFt} sqft</span>
                  )}
                  {property.status && (
                    <span className="inline-flex items-center gap-1">Status: {property.status}</span>
                  )}
                </div>

                {property.description && (
                  <div className="prose dark:prose-invert max-w-none mb-6">
                    <p>{property.description}</p>
                  </div>
                )}

                {property.features?.length ? (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((f, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            {similar.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Similar Properties</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {similar.map((p) => (
                    <div key={p.id} className="card overflow-hidden">
                      <img src={p.images[0] || "/placeholder.svg"} alt={p.title} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">{p.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{p.location}</p>
                        <Link
                          href={`/listings/${slugify(p.title)}?id=${encodeURIComponent(projectId ?? "")}&pid=${encodeURIComponent(p.id)}`}
                          className="btn-primary inline-block"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="card p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Mail className="w-5 h-5" />Contact Agent</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                submitInquiry(e.currentTarget)
              }}
              className="space-y-3"
            >
              <input name="name" className="input-field" placeholder="Your name" required />
              <input name="email" type="email" className="input-field" placeholder="Email" required />
              <input name="phone" className="input-field" placeholder="Phone" />
              <textarea name="message" className="input-field" placeholder="Message" rows={4} />
              <button type="submit" className="btn-primary w-full">Send Inquiry</button>
            </form>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button onClick={() => toggleFavorite(property.id)} className="w-full px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600">
                Add to Favorites
              </button>
              <button onClick={() => toggleCompare(property.id)} className="w-full px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600">
                Add to Compare
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
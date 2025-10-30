"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Puck } from "@measured/puck"
import "@measured/puck/puck.css"
import { TEMPLATES } from "@/lib/templates"
import type { PageData, Section } from "@/lib/schemas"
import { saveProject, getProject } from "@/lib/storage"
import { BuilderHeader } from "@/components/builder/builder-header"
import { puckConfig } from "@/components/puck/puck-config"
import { v4 as uuidv4 } from "uuid"

export default function BuilderPage() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template")
  const projectId = searchParams.get("project")

  const [pageData, setPageData] = useState<PageData | null>(null)
  const [puckData, setPuckData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (projectId) {
      const project = getProject(projectId)
      if (project) {
        setPageData(project)
        setPuckData(convertPageDataToPuck(project))
      }
    } else if (templateId && TEMPLATES[templateId]) {
      const template = TEMPLATES[templateId]
      const newProject: PageData = {
        ...template,
        id: `${templateId}-${uuidv4()}`,
        updatedAt: new Date().toISOString(),
      }
      setPageData(newProject)
      setPuckData(convertPageDataToPuck(newProject))
    }
    setLoading(false)
  }, [templateId, projectId])

  const handleSave = (updatedData: PageData) => {
    setPageData(updatedData)
    saveProject(updatedData)
  }

  const handlePuckPublish = (published: any) => {
    if (!pageData) return
    setPuckData(published)
    const nextPage = convertPuckToPageData(published, pageData)
    handleSave(nextPage)
  }

  const convertPageDataToPuck = (data: PageData) => {
    return {
      content: data.sections.map((section) => {
        switch (section.type) {
          case "hero":
            return {
              type: "Hero",
              props: {
                id: section.id,
                heading: section.heading,
                subheading: section.subheading,
                ctaLabel: section.ctaLabel,
                ctaHref: section.ctaHref,
                bgSrc: section.bgSrc,
                overlayOpacity: section.overlayOpacity,
              },
            }
          case "listings":
            return {
              type: "Listings",
              props: {
                id: section.id,
                title: section.title,
                layout: section.layout,
                properties: (section.properties || []).map((p) => ({
                  id: p.id,
                  title: p.title,
                  description: p.description,
                  price: p.price,
                  location: p.location,
                  bedrooms: p.bedrooms,
                  bathrooms: p.bathrooms,
                  areaSqFt: p.areaSqFt,
                  images: (p.images || []).slice(),
                  features: (p.features || []).slice(),
                  status: p.status,
                  contactEmail: p.contactEmail,
                })),
              },
            }
          case "about":
            return {
              type: "About",
              props: {
                id: section.id,
                title: section.title,
                content: section.content,
                image: section.image,
              },
            }
          case "faq":
            return {
              type: "FAQ",
              props: {
                id: section.id,
                title: section.title,
                items: (section.items || []).map((it) => ({ id: it.id, question: it.question, answer: it.answer })),
              },
            }
          case "testimonials":
            return {
              type: "Testimonials",
              props: {
                id: section.id,
                title: section.title,
                items: (section.items || []).map((t) => ({
                  id: t.id,
                  name: t.name,
                  role: t.role,
                  content: t.content,
                  image: t.image,
                })),
              },
            }
          case "portal":
            return {
              type: "Portal",
              props: {
                id: section.id,
                title: section.title,
                subtitle: section.subtitle,
              },
            }
          default:
            return null
        }
      }),
      root: {},
    }
  }

  const convertPuckToPageData = (puck: any, existing: PageData): PageData => {
    const content: Array<{ type: string; props: any }> = Array.isArray(puck?.content) ? puck.content : []

    const sections: Section[] = content
      .map((item) => {
        const id = item.props?.id ?? uuidv4()
        switch (item.type) {
          case "Hero":
            return {
              id,
              type: "hero",
              heading: item.props?.heading ?? "",
              subheading: item.props?.subheading ?? "",
              ctaLabel: item.props?.ctaLabel ?? "",
              ctaHref: item.props?.ctaHref ?? "#",
              bgType: "image",
              bgSrc: item.props?.bgSrc ?? "",
              overlayOpacity: Number(item.props?.overlayOpacity ?? 0.3),
            }
          case "Listings":
            return {
              id,
              type: "listings",
              title: item.props?.title ?? "",
              layout: item.props?.layout ?? "grid",
              properties: Array.isArray(item.props?.properties)
                ? item.props.properties.map((p: any) => ({
                    id: p.id || uuidv4(),
                    title: p.title || "",
                    description: p.description || "",
                    price: typeof p.price === "number" ? p.price : Number(p.price || 0),
                    location: p.location || "",
                    bedrooms: p.bedrooms ? Number(p.bedrooms) : undefined,
                    bathrooms: p.bathrooms ? Number(p.bathrooms) : undefined,
                    areaSqFt: p.areaSqFt ? Number(p.areaSqFt) : undefined,
                    images: Array.isArray(p.images)
                      ? p.images.map((u: any) => (typeof u === "string" ? u : u?.url)).filter(Boolean)
                      : [],
                    features: Array.isArray(p.features)
                      ? p.features.map((f: any) => (typeof f === "string" ? f : f?.value)).filter(Boolean)
                      : [],
                    status: p.status === "for-sale" || p.status === "for-rent" || p.status === "sold" ? p.status : "for-sale",
                    contactEmail: p.contactEmail || undefined,
                  }))
                : existing.sections.find((s) => s.id === id && s.type === "listings")?.properties ?? [],
            }
          case "About":
            return {
              id,
              type: "about",
              title: item.props?.title ?? "",
              content: item.props?.content ?? "",
              image: item.props?.image ?? "",
            }
          case "FAQ":
            return {
              id,
              type: "faq",
              title: item.props?.title ?? "",
              items: Array.isArray(item.props?.items)
                ? item.props.items.map((it: any) => ({
                    id: it.id || uuidv4(),
                    question: it.question || "",
                    answer: it.answer || "",
                  }))
                : existing.sections.find((s) => s.id === id && s.type === "faq")?.items ?? [],
            }
          case "Testimonials":
            return {
              id,
              type: "testimonials",
              title: item.props?.title ?? "",
              items: Array.isArray(item.props?.items)
                ? item.props.items.map((t: any) => ({
                    id: t.id || uuidv4(),
                    name: t.name || "",
                    role: t.role || "",
                    content: t.content || "",
                    image: t.image || undefined,
                  }))
                : existing.sections.find((s) => s.id === id && s.type === "testimonials")?.items ?? [],
            }
          case "Portal":
            return {
              id,
              type: "portal",
              title: item.props?.title ?? "",
              subtitle: item.props?.subtitle ?? "",
            }
          default:
            return null
        }
      })
      .filter(Boolean) as Section[]

    return {
      ...existing,
      sections,
      updatedAt: new Date().toISOString(),
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400">Loading editor...</p>
        </div>
      </div>
    )
  }

  if (!pageData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary dark:text-neutral-50 mb-2">Template not found</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Please select a valid template to get started.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <BuilderHeader pageData={pageData} onSave={handleSave} />
      <div className="flex-1 overflow-auto">
        {puckData && (
          <div className="max-w-7xl mx-auto p-4">
            <Puck config={puckConfig} data={puckData} onPublish={handlePuckPublish} onChange={handlePuckPublish} />
          </div>
        )}
      </div>
    </div>
  )
}

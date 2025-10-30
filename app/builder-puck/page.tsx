"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Puck } from "@puckeditor/puck"
import "@puckeditor/puck/puck.css"
import { TEMPLATES } from "@/lib/templates"
import type { PageData } from "@/lib/schemas"
import { getProject } from "@/lib/storage"
import { puckConfig } from "@/components/puck/puck-config"
import { v4 as uuidv4 } from "uuid"

export default function PuckBuilderPage() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template")
  const projectId = searchParams.get("project")

  const [puckData, setPuckData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (projectId) {
      const project = getProject(projectId)
      if (project) {
        setPuckData(convertPageDataToPuck(project))
      }
    } else if (templateId && TEMPLATES[templateId]) {
      const template = TEMPLATES[templateId]
      const newProject: PageData = {
        ...template,
        id: `${templateId}-${uuidv4()}`,
        updatedAt: new Date().toISOString(),
      }
      setPuckData(convertPageDataToPuck(newProject))
    }
    setLoading(false)
  }, [templateId, projectId])

  const convertPageDataToPuck = (pageData: PageData) => {
    return {
      content: pageData.sections.map((section) => {
        switch (section.type) {
          case "hero":
            return {
              type: "Hero",
              props: {
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
                title: section.title,
                layout: section.layout,
              },
            }
          case "about":
            return {
              type: "About",
              props: {
                title: section.title,
                content: section.content,
                image: section.image,
              },
            }
          case "faq":
            return {
              type: "FAQ",
              props: {
                title: section.title,
              },
            }
          case "testimonials":
            return {
              type: "Testimonials",
              props: {
                title: section.title,
              },
            }
          case "portal":
            return {
              type: "Portal",
              props: {
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

  const handleSave = (data: any) => {
    setPuckData(data)
    // Save to localStorage
    localStorage.setItem("puck-data", JSON.stringify(data))
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

  if (!puckData) {
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
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Puck config={puckConfig} data={puckData} onPublish={handleSave} onChange={handleSave} />
    </div>
  )
}

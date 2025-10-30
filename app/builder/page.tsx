"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { TEMPLATES } from "@/lib/templates"
import type { PageData } from "@/lib/schemas"
import { saveProject, getProject } from "@/lib/storage"
import { BuilderHeader } from "@/components/builder/builder-header"
import { BuilderCanvas } from "@/components/builder/builder-canvas"
import { BuilderSidebar } from "@/components/builder/builder-sidebar"
import { v4 as uuidv4 } from "uuid"

export default function BuilderPage() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template")
  const projectId = searchParams.get("project")

  const [pageData, setPageData] = useState<PageData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (projectId) {
      const project = getProject(projectId)
      if (project) {
        setPageData(project)
      }
    } else if (templateId && TEMPLATES[templateId]) {
      const template = TEMPLATES[templateId]
      const newProject: PageData = {
        ...template,
        id: `${templateId}-${uuidv4()}`,
        updatedAt: new Date().toISOString(),
      }
      setPageData(newProject)
    }
    setLoading(false)
  }, [templateId, projectId])

  const handleSave = (updatedData: PageData) => {
    setPageData(updatedData)
    saveProject(updatedData)
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
      <div className="flex flex-1 overflow-hidden">
        <BuilderSidebar pageData={pageData} onUpdate={handleSave} />
        <BuilderCanvas pageData={pageData} onUpdate={handleSave} />
      </div>
    </div>
  )
}

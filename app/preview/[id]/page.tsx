"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import type { PageData } from "@/lib/schemas"
import { getProject } from "@/lib/storage"
import { SectionRenderer } from "@/components/sections/section-renderer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Download, Share2 } from "lucide-react"
import { ExportModal } from "@/components/export-modal"

export default function PreviewPage() {
  const params = useParams()
  const id = params.id as string
  const [pageData, setPageData] = useState<PageData | null>(null)
  const [loading, setLoading] = useState(true)
  const [showExportModal, setShowExportModal] = useState(false)

  useEffect(() => {
    const project = getProject(id)
    setPageData(project)
    setLoading(false)
  }, [id])

  const handleShare = async () => {
    const url = `${window.location.origin}/preview/${id}`
    if (navigator.share) {
      navigator.share({
        title: pageData?.name,
        text: "Check out my real estate website",
        url,
      })
    } else {
      navigator.clipboard.writeText(url)
      alert("Preview link copied to clipboard!")
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400">Loading preview...</p>
        </div>
      </div>
    )
  }

  if (!pageData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary dark:text-neutral-50 mb-2">Project not found</h1>
          <Link href="/" className="text-accent hover:text-accent-light">
            Return to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <div className="sticky top-0 z-50 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href={`/builder?project=${id}`}
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Editor
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors text-primary dark:text-neutral-50"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>

            <button
              onClick={() => setShowExportModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-light transition-colors text-white"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto">
        {pageData.sections.map((section) => (
          <div key={section.id}>
            <SectionRenderer section={section} pageData={pageData} onUpdate={() => {}} />
          </div>
        ))}
      </main>

      <ExportModal pageData={pageData} isOpen={showExportModal} onClose={() => setShowExportModal(false)} />
    </div>
  )
}

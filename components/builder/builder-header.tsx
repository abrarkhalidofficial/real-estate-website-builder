"use client"

import type { PageData } from "@/lib/schemas"
import { ThemeToggle } from "@/components/theme-toggle"
import { Download, Eye, Save } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ExportModal } from "@/components/export-modal"

interface BuilderHeaderProps {
  pageData: PageData
  onSave: (data: PageData) => void
}

export function BuilderHeader({ pageData, onSave }: BuilderHeaderProps) {
  const [showExportModal, setShowExportModal] = useState(false)

  return (
    <>
      <header className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RE</span>
              </div>
              <span className="font-bold text-primary dark:text-neutral-50">Builder</span>
            </Link>
            <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-700"></div>
            <input
              type="text"
              value={pageData.name}
              onChange={(e) => onSave({ ...pageData, name: e.target.value })}
              className="input-field max-w-xs"
              placeholder="Project name"
            />
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/preview/${pageData.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors text-primary dark:text-neutral-50"
            >
              <Eye className="w-4 h-4" />
              Preview
            </Link>

            <button
              onClick={() => setShowExportModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-light transition-colors text-white"
            >
              <Download className="w-4 h-4" />
              Export
            </button>

            <button
              onClick={() => onSave(pageData)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-success hover:bg-green-600 transition-colors text-white"
            >
              <Save className="w-4 h-4" />
              Save
            </button>

            <ThemeToggle />
          </div>
        </div>
      </header>

      <ExportModal pageData={pageData} isOpen={showExportModal} onClose={() => setShowExportModal(false)} />
    </>
  )
}

"use client"

import { useState } from "react"
import type { PageData } from "@/lib/schemas"
import { exportAsHTML, exportAsReact } from "@/lib/export"
import { Download, Loader2, X } from "lucide-react"

interface ExportModalProps {
  pageData: PageData
  isOpen: boolean
  onClose: () => void
}

export function ExportModal({ pageData, isOpen, onClose }: ExportModalProps) {
  const [exporting, setExporting] = useState<string | null>(null)
  const [exportSuccess, setExportSuccess] = useState<string | null>(null)

  const handleExport = async (format: "html" | "react") => {
    setExporting(format)
    try {
      const blob = format === "html" ? await exportAsHTML(pageData) : await exportAsReact(pageData)
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${pageData.name.replace(/\s+/g, "-")}-${format}.zip`
      a.click()
      URL.revokeObjectURL(url)
      setExportSuccess(format)
      setTimeout(() => setExportSuccess(null), 2000)
    } catch (error) {
      console.error("Export failed:", error)
    } finally {
      setExporting(null)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="text-xl font-bold text-primary dark:text-neutral-50">Export Project</h2>
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Choose how you want to export your website:
            </p>
          </div>

          <button
            onClick={() => handleExport("html")}
            disabled={exporting !== null}
            className="w-full p-4 border-2 border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-accent hover:bg-accent/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-primary dark:text-neutral-50">Export as HTML</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Standalone HTML + CSS files</p>
              </div>
              {exporting === "html" ? (
                <Loader2 className="w-5 h-5 animate-spin text-accent" />
              ) : exportSuccess === "html" ? (
                <span className="text-green-600">✓</span>
              ) : (
                <Download className="w-5 h-5 text-neutral-400" />
              )}
            </div>
          </button>

          <button
            onClick={() => handleExport("react")}
            disabled={exporting !== null}
            className="w-full p-4 border-2 border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-accent hover:bg-accent/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-primary dark:text-neutral-50">Export as React</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">React component + Next.js ready</p>
              </div>
              {exporting === "react" ? (
                <Loader2 className="w-5 h-5 animate-spin text-accent" />
              ) : exportSuccess === "react" ? (
                <span className="text-green-600">✓</span>
              ) : (
                <Download className="w-5 h-5 text-neutral-400" />
              )}
            </div>
          </button>

          <div className="bg-neutral-100 dark:bg-neutral-700 p-4 rounded-lg">
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Both exports include all necessary files and can be deployed immediately. HTML exports are perfect for
              static hosting, while React exports integrate seamlessly with Next.js projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

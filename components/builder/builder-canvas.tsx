"use client"

import type { PageData } from "@/lib/schemas"
import { SectionRenderer } from "@/components/sections/section-renderer"

interface BuilderCanvasProps {
  pageData: PageData
  onUpdate: (data: PageData) => void
}

export function BuilderCanvas({ pageData, onUpdate }: BuilderCanvasProps) {
  return (
    <div className="flex-1 overflow-auto bg-neutral-100 dark:bg-neutral-800">
      <div className="max-w-6xl mx-auto py-8 px-4">
        {pageData.sections.map((section) => (
          <div
            key={section.id}
            className="mb-4 bg-white dark:bg-neutral-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <SectionRenderer section={section} pageData={pageData} onUpdate={onUpdate} />
          </div>
        ))}
      </div>
    </div>
  )
}

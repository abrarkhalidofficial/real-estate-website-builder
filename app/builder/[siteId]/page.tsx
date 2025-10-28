"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/builder/sidebar"
import { EditorPanel } from "@/components/builder/editor-panel"
import { PreviewPanel } from "@/components/builder/preview-panel"

export default function BuilderPage({ params }: { params: { siteId: string } }) {
  const [selectedSection, setSelectedSection] = useState<string>("hero")
  const [isSaving, setIsSaving] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-surface sticky top-0 z-40">
        <div className="px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gradient">RealEstate.AI</h1>
            <p className="text-sm text-muted">My Luxury Villa Listing</p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setShowPreview(!showPreview)}
              className="border-border hover:bg-surface bg-transparent"
            >
              {showPreview ? "Edit" : "Preview"}
            </Button>
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isSaving ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Editor */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Page Structure */}
        <Sidebar selectedSection={selectedSection} onSelectSection={setSelectedSection} />

        {/* Center - Editor Panel */}
        {!showPreview && <EditorPanel selectedSection={selectedSection} />}

        {/* Right - Preview Panel */}
        {showPreview && <PreviewPanel />}
      </div>
    </div>
  )
}

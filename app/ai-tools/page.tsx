"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AIQuickActions } from "@/components/ai/ai-quick-actions"
import { AIChat } from "@/components/ai/ai-chat"

export default function AIToolsPage() {
  const [generatedContent, setGeneratedContent] = useState<string>("")
  const [generatedImage, setGeneratedImage] = useState<string>("")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gradient mb-2">AI Tools</h1>
          <p className="text-muted">Generate content, images, and optimize your website with AI</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Quick Actions */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <AIQuickActions onAction={(action) => console.log("Action:", action)} />
          </div>

          {/* Center - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Generated Content */}
            {generatedContent && (
              <Card className="bg-surface border-border p-6">
                <h3 className="font-semibold mb-4">Generated Content</h3>
                <div className="bg-input rounded-lg p-4 mb-4">
                  <p className="text-foreground">{generatedContent}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => navigator.clipboard.writeText(generatedContent)}
                    variant="outline"
                    className="flex-1 border-border hover:bg-surface bg-transparent"
                  >
                    Copy
                  </Button>
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Use in Website
                  </Button>
                </div>
              </Card>
            )}

            {/* Generated Image */}
            {generatedImage && (
              <Card className="bg-surface border-border p-6">
                <h3 className="font-semibold mb-4">Generated Image</h3>
                <img src={generatedImage || "/placeholder.svg"} alt="Generated" className="w-full rounded-lg mb-4" />
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 border-border hover:bg-surface bg-transparent">
                    Download
                  </Button>
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Use in Website
                  </Button>
                </div>
              </Card>
            )}

            {/* AI Chat */}
            <Card className="bg-surface border-border p-6">
              <h3 className="font-semibold mb-4">AI Assistant Chat</h3>
              <div className="h-96">
                <AIChat />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface ContentUploadProps {
  onNext: () => void
  onBack: () => void
}

export function ContentUpload({ onNext, onBack }: ContentUploadProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Upload Your Content</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Business Name</label>
          <Input
            type="text"
            placeholder="Your Real Estate Business"
            className="bg-input border-border text-foreground placeholder:text-muted"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Business Description</label>
          <textarea
            placeholder="Tell us about your business..."
            className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Logo or Images</label>
          <Card className="border-2 border-dashed border-border p-8 text-center cursor-pointer hover:border-primary transition">
            <div className="text-4xl mb-2">📸</div>
            <p className="text-muted mb-2">Drag and drop your images here</p>
            <p className="text-xs text-muted">or click to browse</p>
          </Card>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Sample Properties (Optional)</label>
          <Card className="border-2 border-dashed border-border p-8 text-center cursor-pointer hover:border-primary transition">
            <div className="text-4xl mb-2">📋</div>
            <p className="text-muted mb-2">Upload CSV or JSON with property data</p>
            <p className="text-xs text-muted">or click to browse</p>
          </Card>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <Button variant="outline" onClick={onBack} className="flex-1 border-border hover:bg-surface bg-transparent">
          Back
        </Button>
        <Button onClick={onNext} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
          Next
        </Button>
      </div>
    </div>
  )
}

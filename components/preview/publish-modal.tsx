"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface PublishModalProps {
  onClose: () => void;
  onPublish: () => void;
}

export function PublishModal({ onClose, onPublish }: PublishModalProps) {
  const [domain, setDomain] = useState("luxuryvilla");
  const [isPublishing, setIsPublishing] = useState(false);

  const handlePublish = async () => {
    setIsPublishing(true);
    // Simulate API call
    setTimeout(() => {
      setIsPublishing(false);
      onPublish();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="p-8 max-w-md w-full mx-4 bg-secondary text-secondary-foreground">
        <h2 className="text-2xl font-bold mb-6">Publish Your Website</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Custom Domain (Optional)
            </label>
            <div className="flex gap-2">
              <Input
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-1 bg-input border-border text-foreground"
              />
              <span className="flex items-center text-muted">
                .RealEstate.devscot
              </span>
            </div>
            <p className="text-xs text-muted mt-2">
              Your website will be available at: {domain}.RealEstate.devscot
            </p>
          </div>

          <div className="bg-input rounded-lg p-4">
            <h3 className="font-semibold mb-3">Before Publishing</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> All content is filled in
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Images are uploaded
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Contact form is
                configured
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border hover:bg-surface bg-transparent"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePublish}
              disabled={isPublishing}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isPublishing ? "Publishing..." : "Publish Now"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

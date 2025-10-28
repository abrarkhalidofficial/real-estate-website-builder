"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface ShareModalProps {
  onClose: () => void;
}

export function ShareModal({ onClose }: ShareModalProps) {
  const shareUrl = "https://luxuryvilla.RealEstate.devscot";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className=" p-8 max-w-md w-full mx-4 bg-secondary text-secondary-foreground">
        <h2 className="text-2xl font-bold mb-6">Share Your Website</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Website URL
            </label>
            <div className="flex gap-2">
              <Input
                value={shareUrl}
                readOnly
                className="flex-1 bg-input border-border text-foreground"
              />
              <Button
                onClick={handleCopy}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4"
              >
                Copy
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">
              Share on Social Media
            </label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="border-border hover:bg-surface bg-transparent"
              >
                Facebook
              </Button>
              <Button
                variant="outline"
                className="border-border hover:bg-surface bg-transparent"
              >
                Twitter
              </Button>
              <Button
                variant="outline"
                className="border-border hover:bg-surface bg-transparent"
              >
                LinkedIn
              </Button>
              <Button
                variant="outline"
                className="border-border hover:bg-surface bg-transparent"
              >
                WhatsApp
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Embed Code</label>
            <textarea
              readOnly
              value={`<iframe src="${shareUrl}" width="100%" height="600"></iframe>`}
              className="w-full p-3 bg-input border border-border rounded-lg text-foreground text-xs font-mono"
              rows={3}
            />
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Done
          </Button>
        </div>
      </Card>
    </div>
  );
}

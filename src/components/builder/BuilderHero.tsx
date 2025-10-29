import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const BuilderHero = () => {
  const [title, setTitle] = useState("Find Your Dream Property");
  const [subtitle, setSubtitle] = useState("Discover luxury living in prime locations");
  const [ctaText, setCtaText] = useState("Browse Properties");

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h2 className="text-2xl font-bold">Hero Section</h2>
        <p className="text-muted-foreground">Customize your main banner content</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Main Heading</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="subtitle">Subtitle</Label>
          <Textarea
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="mt-1"
            rows={2}
          />
        </div>

        <div>
          <Label htmlFor="cta">Call-to-Action Button Text</Label>
          <Input
            id="cta"
            value={ctaText}
            onChange={(e) => setCtaText(e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      {/* Preview */}
      <div className="mt-8 p-8 rounded-lg gradient-hero border-2 border-primary/20">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{subtitle}</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

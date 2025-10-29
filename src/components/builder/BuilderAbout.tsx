import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const BuilderAbout = () => {
  const [heading, setHeading] = useState("About Our Agency");
  const [content, setContent] = useState("We are a leading real estate agency with over 20 years of experience in helping clients find their dream properties. Our dedicated team of professionals is committed to providing exceptional service and expertise in the real estate market.");

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h2 className="text-2xl font-bold">About Us Section</h2>
        <p className="text-muted-foreground">Tell your story and build trust</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="about-heading">Section Heading</Label>
          <Input
            id="about-heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="about-content">Content</Label>
          <Textarea
            id="about-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1"
            rows={6}
          />
        </div>
      </div>

      {/* Preview */}
      <div className="mt-8 p-8 rounded-lg bg-secondary/30 border border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
};

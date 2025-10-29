import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface BuilderPropertiesProps {
  selectedSection: string | null;
}

export const BuilderProperties = ({ selectedSection }: BuilderPropertiesProps) => {
  const [heroTitle, setHeroTitle] = useState("Find Your Dream Property");
  const [heroSubtitle, setHeroSubtitle] = useState("Discover luxury living in prime locations");
  const [heroCta, setHeroCta] = useState("Browse Properties");

  const [aboutHeading, setAboutHeading] = useState("About Our Agency");
  const [aboutContent, setAboutContent] = useState("We are a leading real estate agency with over 20 years of experience in helping clients find their dream properties.");

  if (!selectedSection) {
    return (
      <div className="w-80 border-l border-border bg-card p-6">
        <div className="text-center text-muted-foreground text-sm">
          Select a section to edit its properties
        </div>
      </div>
    );
  }

  const renderProperties = () => {
    switch (selectedSection) {
      case "hero":
        return (
          <div className="space-y-6">
            <div>
              <div className="mb-4">
                <h3 className="font-semibold text-sm mb-1">Page</h3>
                <p className="text-xs text-muted-foreground">Hero</p>
              </div>
              <Separator />
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="hero-title" className="text-xs">title</Label>
                <Input
                  id="hero-title"
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="hero-subtitle" className="text-xs">description</Label>
                <Textarea
                  id="hero-subtitle"
                  value={heroSubtitle}
                  onChange={(e) => setHeroSubtitle(e.target.value)}
                  className="mt-1"
                  rows={3}
                />
              </div>

              <Separator />

              <div>
                <Label className="text-xs mb-2 block">buttons</Label>
                <div className="space-y-2">
                  <Input
                    value={heroCta}
                    onChange={(e) => setHeroCta(e.target.value)}
                    placeholder="Button text"
                  />
                  <Button variant="outline" size="sm" className="w-full">
                    + Add button
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <Label className="text-xs mb-2 block">align</Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Left
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1">
                    Center
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Right
                  </Button>
                </div>
              </div>

              <div>
                <Label className="text-xs mb-2 block">image</Label>
                <Input placeholder="Image URL" />
              </div>
            </div>
          </div>
        );

      case "listings":
        return (
          <div className="space-y-6">
            <div>
              <div className="mb-4">
                <h3 className="font-semibold text-sm mb-1">Page</h3>
                <p className="text-xs text-muted-foreground">Property Listings</p>
              </div>
              <Separator />
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-xs">Section Title</Label>
                <Input value="Featured Properties" className="mt-1" />
              </div>

              <Separator />

              <div>
                <Label className="text-xs mb-2 block">Properties</Label>
                <div className="space-y-2">
                  <div className="p-2 border border-border rounded text-xs">Property 1</div>
                  <div className="p-2 border border-border rounded text-xs">Property 2</div>
                  <div className="p-2 border border-border rounded text-xs">Property 3</div>
                  <Button variant="outline" size="sm" className="w-full">
                    + Add Property
                  </Button>
                </div>
              </div>

              <div>
                <Label className="text-xs">Columns</Label>
                <Input type="number" value="3" className="mt-1" />
              </div>
            </div>
          </div>
        );

      case "about":
        return (
          <div className="space-y-6">
            <div>
              <div className="mb-4">
                <h3 className="font-semibold text-sm mb-1">Page</h3>
                <p className="text-xs text-muted-foreground">About Us</p>
              </div>
              <Separator />
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="about-heading" className="text-xs">heading</Label>
                <Input
                  id="about-heading"
                  value={aboutHeading}
                  onChange={(e) => setAboutHeading(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="about-content" className="text-xs">content</Label>
                <Textarea
                  id="about-content"
                  value={aboutContent}
                  onChange={(e) => setAboutContent(e.target.value)}
                  className="mt-1"
                  rows={6}
                />
              </div>

              <Separator />

              <div>
                <Label className="text-xs">Background Color</Label>
                <div className="flex gap-2 mt-1">
                  <div className="w-8 h-8 rounded bg-secondary/30 border-2 border-primary cursor-pointer" />
                  <div className="w-8 h-8 rounded bg-accent/30 border border-border cursor-pointer" />
                  <div className="w-8 h-8 rounded bg-primary/10 border border-border cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        );

      case "testimonials":
        return (
          <div className="space-y-6">
            <div>
              <div className="mb-4">
                <h3 className="font-semibold text-sm mb-1">Page</h3>
                <p className="text-xs text-muted-foreground">Testimonials</p>
              </div>
              <Separator />
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-xs">Section Title</Label>
                <Input value="What Our Clients Say" className="mt-1" />
              </div>

              <div>
                <Label className="text-xs">Subtitle</Label>
                <Input value="Don't just take our word for it" className="mt-1" />
              </div>

              <Separator />

              <div>
                <Label className="text-xs mb-2 block">Testimonials</Label>
                <div className="space-y-2">
                  <div className="p-2 border border-border rounded text-xs">Sarah Johnson</div>
                  <div className="p-2 border border-border rounded text-xs">Michael Chen</div>
                  <div className="p-2 border border-border rounded text-xs">Emily Rodriguez</div>
                  <Button variant="outline" size="sm" className="w-full">
                    + Add Testimonial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case "faq":
        return (
          <div className="space-y-6">
            <div>
              <div className="mb-4">
                <h3 className="font-semibold text-sm mb-1">Page</h3>
                <p className="text-xs text-muted-foreground">FAQ</p>
              </div>
              <Separator />
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-xs">Section Title</Label>
                <Input value="Frequently Asked Questions" className="mt-1" />
              </div>

              <Separator />

              <div>
                <Label className="text-xs mb-2 block">Questions</Label>
                <div className="space-y-2">
                  <div className="p-2 border border-border rounded text-xs">Question 1</div>
                  <div className="p-2 border border-border rounded text-xs">Question 2</div>
                  <div className="p-2 border border-border rounded text-xs">Question 3</div>
                  <Button variant="outline" size="sm" className="w-full">
                    + Add Question
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-80 border-l border-border bg-card">
      <ScrollArea className="h-full">
        <div className="p-4">
          {renderProperties()}
        </div>
      </ScrollArea>
    </div>
  );
};

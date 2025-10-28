"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StepIndicator } from "@/components/onboarding/step-indicator";
import { WebsiteTypeSelector } from "@/components/onboarding/website-type-selector";
import { TemplateGallery } from "@/components/onboarding/template-gallery";
import { PageSelector } from "@/components/onboarding/page-selector";
import { ContentUpload } from "@/components/onboarding/content-upload";

type Step = "type" | "template" | "pages" | "content" | "review";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState<Step>("type");
  const [websiteType, setWebsiteType] = useState<string>("");
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  const steps: { id: Step; label: string }[] = [
    { id: "type", label: "Website Type" },
    { id: "template", label: "Choose Template" },
    { id: "pages", label: "Select Pages" },
    { id: "content", label: "Upload Content" },
    { id: "review", label: "Review" },
  ];

  const handleNext = () => {
    const stepIndex = steps.findIndex((s) => s.id === currentStep);
    if (stepIndex < steps.length - 1) {
      setCurrentStep(steps[stepIndex + 1].id);
    }
  };

  const handleBack = () => {
    const stepIndex = steps.findIndex((s) => s.id === currentStep);
    if (stepIndex > 0) {
      setCurrentStep(steps[stepIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-2xl font-bold text-gradient">Real Estate </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Create Your Website</h1>
          <p className="text-muted">
            Follow these steps to build your professional real estate website
          </p>
        </div>

        <StepIndicator steps={steps} currentStep={currentStep} />

        <Card className="bg-surface border-border p-8 mt-8">
          {currentStep === "type" && (
            <WebsiteTypeSelector
              selected={websiteType}
              onSelect={(type) => {
                setWebsiteType(type);
                handleNext();
              }}
            />
          )}

          {currentStep === "template" && (
            <TemplateGallery
              selected={selectedTemplate}
              onSelect={(template) => {
                setSelectedTemplate(template);
                handleNext();
              }}
            />
          )}

          {currentStep === "pages" && (
            <PageSelector
              selected={selectedPages}
              onSelect={setSelectedPages}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {currentStep === "content" && (
            <ContentUpload onNext={handleNext} onBack={handleBack} />
          )}

          {currentStep === "review" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Review Your Setup</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-input rounded-lg">
                    <span className="text-muted">Website Type:</span>
                    <span className="font-semibold">{websiteType}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-input rounded-lg">
                    <span className="text-muted">Template:</span>
                    <span className="font-semibold">{selectedTemplate}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-input rounded-lg">
                    <span className="text-muted">Pages:</span>
                    <span className="font-semibold">
                      {selectedPages.length} selected
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1 border-border hover:bg-surface bg-transparent"
                >
                  Back
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Create Website
                </Button>
              </div>
            </div>
          )}

          {currentStep !== "review" && (
            <div className="flex gap-4 mt-8">
              {currentStep !== "type" && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1 border-border hover:bg-surface bg-transparent"
                >
                  Back
                </Button>
              )}
              {currentStep !== "pages" && (
                <Button
                  onClick={handleNext}
                  disabled={
                    (currentStep === "type" && !websiteType) ||
                    (currentStep === "template" && !selectedTemplate) ||
                    (currentStep === "content" && false)
                  }
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                >
                  Next
                </Button>
              )}
            </div>
          )}
        </Card>
      </main>
    </div>
  );
}

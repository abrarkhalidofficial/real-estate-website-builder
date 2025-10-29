import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Info, 
  HelpCircle, 
  Star, 
  DoorOpen,
  Save,
  Download,
  ArrowLeft,
  Monitor,
  Smartphone,
  Tablet
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BuilderSidebar } from "@/components/builder/BuilderSidebar";
import { BuilderCanvas } from "@/components/builder/BuilderCanvas";
import { BuilderProperties } from "@/components/builder/BuilderProperties";
import { toast } from "sonner";

const sections = [
  { id: "hero", label: "Hero Section", icon: Home },
  { id: "listings", label: "Property Listings", icon: DoorOpen },
  { id: "about", label: "About Us", icon: Info },
  { id: "testimonials", label: "Testimonials", icon: Star },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

const Builder = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState<string | null>("hero");
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const handleSave = () => {
    toast.success("Template saved successfully!");
  };

  const handleExport = () => {
    toast.success("Exporting template...");
  };

  const getViewModeWidth = () => {
    switch (viewMode) {
      case "mobile":
        return "375px";
      case "tablet":
        return "768px";
      default:
        return "100%";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-sm font-semibold capitalize">
                {templateId?.replace("-", " ")} Builder
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 border border-border rounded-md p-1">
              <Button
                variant={viewMode === "desktop" ? "secondary" : "ghost"}
                size="icon"
                className="h-7 w-7"
                onClick={() => setViewMode("desktop")}
              >
                <Monitor className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "tablet" ? "secondary" : "ghost"}
                size="icon"
                className="h-7 w-7"
                onClick={() => setViewMode("tablet")}
              >
                <Tablet className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "mobile" ? "secondary" : "ghost"}
                size="icon"
                className="h-7 w-7"
                onClick={() => setViewMode("mobile")}
              >
                <Smartphone className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-xs text-muted-foreground px-2">96% (Auto)</div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleSave}
            >
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button
              size="sm"
              onClick={handleExport}
            >
              <Download className="h-4 w-4 mr-2" />
              Publish
            </Button>
          </div>
        </div>
      </div>

      <div className="flex pt-14 h-screen">
        {/* Left Sidebar - Components */}
        <BuilderSidebar />

        {/* Center - Canvas Preview */}
        <div className="flex-1 bg-muted/30 overflow-auto">
          <div 
            className="mx-auto transition-all duration-300 bg-background"
            style={{ width: getViewModeWidth(), minHeight: "100%" }}
          >
            <BuilderCanvas 
              selectedSection={selectedSection}
              onSelectSection={setSelectedSection}
            />
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <BuilderProperties selectedSection={selectedSection} />
      </div>
    </div>
  );
};

export default Builder;

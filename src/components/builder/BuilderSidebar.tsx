import { Home, DoorOpen, Info, Star, HelpCircle, LayoutGrid, Type, Box } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const componentCategories = [
  {
    category: "LAYOUT",
    items: [
      { id: "grid", label: "Grid", icon: LayoutGrid },
      { id: "flex", label: "Flex", icon: Box },
    ]
  },
  {
    category: "TYPOGRAPHY",
    items: [
      { id: "heading", label: "Heading", icon: Type },
      { id: "text", label: "Text", icon: Type },
    ]
  },
  {
    category: "SECTIONS",
    items: [
      { id: "hero", label: "Hero", icon: Home },
      { id: "listings", label: "Property Listings", icon: DoorOpen },
      { id: "about", label: "About Us", icon: Info },
      { id: "testimonials", label: "Testimonials", icon: Star },
      { id: "faq", label: "FAQ", icon: HelpCircle },
    ]
  }
];

export const BuilderSidebar = () => {
  return (
    <div className="w-64 border-r border-border bg-card">
      <ScrollArea className="h-full">
        <div className="p-4">
          <h2 className="text-sm font-semibold mb-4">Components</h2>
          
          {componentCategories.map((category) => (
            <div key={category.category} className="mb-6">
              <h3 className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-2">
                <span className="w-4 h-px bg-border" />
                {category.category}
              </h3>
              <div className="space-y-1">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-accent cursor-move text-sm"
                      draggable
                    >
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span>{item.label}</span>
                      <span className="ml-auto text-muted-foreground">⠿</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

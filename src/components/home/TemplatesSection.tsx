import { TemplateCard } from "./TemplateCard";

const templates = [
  {
    id: "luxury-villas",
    title: "Luxury Villas",
    description: "Perfect for showcasing high-end residential properties with elegant design and premium features.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    category: "Residential"
  },
  {
    id: "commercial-properties",
    title: "Commercial Properties",
    description: "Professional template for offices, retail spaces, and commercial real estate listings.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Commercial"
  },
  {
    id: "housing-society",
    title: "Housing Society",
    description: "Comprehensive template for housing communities with amenities and floor plans showcase.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    category: "Community"
  }
];

export const TemplatesSection = () => {
  return (
    <section id="templates" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Template
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our professionally designed templates and customize them to match your brand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {templates.map((template, index) => (
            <div
              key={template.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TemplateCard {...template} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

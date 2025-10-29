import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Bed, Bath, Maximize } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface BuilderCanvasProps {
  selectedSection: string | null;
  onSelectSection: (section: string | null) => void;
}

const sampleProperties = [
  {
    id: 1,
    title: "Modern Villa",
    price: "$850,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
  },
  {
    id: 2,
    title: "Downtown Apartment",
    price: "$420,000",
    beds: 2,
    baths: 2,
    sqft: "1,400",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    price: "$1,200,000",
    beds: 5,
    baths: 4,
    sqft: "4,800",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    content: "The team helped us find our perfect home! Their expertise and dedication made the entire process smooth and stress-free.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    content: "Outstanding service and market knowledge. They helped me build a successful real estate portfolio with their expert guidance.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    content: "As a first-time buyer, I was nervous, but they made everything easy to understand and helped me every step of the way.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  }
];

const faqs = [
  {
    id: "1",
    question: "How do I schedule a property viewing?",
    answer: "You can schedule a property viewing by contacting us through our website or calling our office directly."
  },
  {
    id: "2",
    question: "What documents do I need to buy a property?",
    answer: "You'll need proof of identity, proof of income, bank statements, and pre-approval for a mortgage if applicable."
  },
  {
    id: "3",
    question: "Do you offer property management services?",
    answer: "Yes, we offer comprehensive property management services including tenant screening and rent collection."
  }
];

export const BuilderCanvas = ({ selectedSection, onSelectSection }: BuilderCanvasProps) => {
  const getSectionClasses = (sectionId: string) => {
    const baseClasses = "transition-all cursor-pointer relative";
    const isSelected = selectedSection === sectionId;
    return `${baseClasses} ${isSelected ? "ring-2 ring-primary ring-offset-2" : "hover:ring-1 hover:ring-muted-foreground/30"}`;
  };

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <div
        className={getSectionClasses("hero")}
        onClick={() => onSelectSection("hero")}
      >
        {selectedSection === "hero" && (
          <div className="absolute -top-6 left-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
            Hero
          </div>
        )}
        <div className="gradient-hero p-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Discover luxury living in prime locations
          </p>
          <Button size="lg">Browse Properties</Button>
        </div>
      </div>

      {/* Property Listings Section */}
      <div
        className={getSectionClasses("listings")}
        onClick={() => onSelectSection("listings")}
      >
        {selectedSection === "listings" && (
          <div className="absolute -top-6 left-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
            Property Listings
          </div>
        )}
        <div className="p-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sampleProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent">Featured</Badge>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{property.title}</h3>
                    <span className="text-primary font-bold">{property.price}</span>
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      {property.beds}
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      {property.baths}
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize className="h-4 w-4" />
                      {property.sqft} sqft
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        className={getSectionClasses("about")}
        onClick={() => onSelectSection("about")}
      >
        {selectedSection === "about" && (
          <div className="absolute -top-6 left-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
            About Us
          </div>
        )}
        <div className="p-16 bg-secondary/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About Our Agency</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a leading real estate agency with over 20 years of experience in helping clients find their dream properties. Our dedicated team of professionals is committed to providing exceptional service.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className={getSectionClasses("testimonials")}
        onClick={() => onSelectSection("testimonials")}
      >
        {selectedSection === "testimonials" && (
          <div className="absolute -top-6 left-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
            Testimonials
          </div>
        )}
        <div className="p-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
            <p className="text-muted-foreground">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2">
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div
        className={getSectionClasses("faq")}
        onClick={() => onSelectSection("faq")}
      >
        {selectedSection === "faq" && (
          <div className="absolute -top-6 left-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
            FAQ
          </div>
        )}
        <div className="p-16 bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

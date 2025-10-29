import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

export const BuilderTestimonials = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <p className="text-muted-foreground">Show client feedback and build credibility</p>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">What Our Clients Say</h3>
        <p className="text-muted-foreground">Don't just take our word for it</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border-2">
            <CardContent className="pt-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

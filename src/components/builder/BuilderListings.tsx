import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Bed, Bath, Maximize } from "lucide-react";

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

export const BuilderListings = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h2 className="text-2xl font-bold">Property Listings</h2>
        <p className="text-muted-foreground">Showcase your featured properties</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProperties.map((property) => (
          <Card key={property.id} className="overflow-hidden hover:shadow-medium transition-shadow">
            <div className="relative aspect-[4/3]">
              <img
                src={property.image}
                alt={property.title}
                className="object-cover w-full h-full"
              />
              <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                Featured
              </Badge>
            </div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{property.title}</h3>
                <span className="text-primary font-bold text-lg">{property.price}</span>
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TemplateCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const TemplateCard = ({ id, title, description, image, category }: TemplateCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-1 border-2">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full bg-accent/90 backdrop-blur-sm text-accent-foreground text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="pt-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      
      <CardFooter>
        <Button
          onClick={() => navigate(`/builder/${id}`)}
          className="w-full group/btn bg-primary hover:bg-primary/90"
        >
          Use Template
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

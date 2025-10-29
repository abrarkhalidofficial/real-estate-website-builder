import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onGuestStudyClick: () => void;
}

export const Hero = ({ onGuestStudyClick }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container relative z-10 mx-auto px-4 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">No Coding Required</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Create Your Real Estate
          <br />
          Website Easily
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Build stunning property websites with our drag-and-drop builder. 
          Choose from professional templates and customize everything.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={onGuestStudyClick}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium px-8 py-6 text-lg"
          >
            Browse Templates
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg border-2"
          >
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20">
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Templates</div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground mt-1">Websites Created</div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground mt-1">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

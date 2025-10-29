import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { TemplatesSection } from "@/components/home/TemplatesSection";

const Home = () => {
  const scrollToTemplates = () => {
    const element = document.getElementById("templates");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero onGuestStudyClick={scrollToTemplates} />
        <TemplatesSection />
      </main>
    </div>
  );
};

export default Home;

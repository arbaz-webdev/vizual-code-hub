import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Hi, I'm <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Arbaz Khan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-white/95 drop-shadow-md">
            Website Developer & Ecommerce Specialist
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 drop-shadow-md">
            I craft fast, responsive, and conversion-focused websites using Shopify, WordPress & custom code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("portfolio")}
            >
              View My Work
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
            </Button>
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60 hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      
      {/* Featured Work CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground animate-fade-in">
            Ready to See My Work?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Explore 20+ successful projects across e-commerce, healthcare, education, and more
          </p>
          <Link to="/portfolio">
            <Button variant="hero" size="lg" className="animate-pulse-glow">
              View Portfolio <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Experience />
      <Testimonials />
    </main>
  );
};

export default Home;

import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "L'CHEAR Pakistan",
      platform: "Shopify",
      description: "Responsive Shopify store for cosmetics and beauty products with secure transactions",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
      location: "Karachi, Pakistan",
    },
    {
      title: "Lili Valente",
      platform: "Shopify",
      description: "Visually engaging author store showcasing books and promotional materials",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
      location: "Maui, Hawaii, USA",
    },
    {
      title: "Abwin Labs",
      platform: "Shopify",
      description: "Professional health and wellness products store with easy checkout functionality",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&h=600&fit=crop",
      location: "Pakistan",
    },
    {
      title: "CoHo Retail",
      platform: "Shopify",
      description: "Modern women's loungewear store with seamless navigation and mobile responsiveness",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      location: "Pakistan",
    },
    {
      title: "EMK HandBall Féminin",
      platform: "Custom",
      description: "Female Handball Club website with event management and club store",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop",
      location: "Mulhouse-Kingersheim, France",
    },
    {
      title: "Mitochon",
      platform: "Shopify",
      description: "Elegant men's facewash e-commerce with custom product bundles",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=600&fit=crop",
      location: "Pakistan",
    },
    {
      title: "Tattoo Supply ACCE",
      platform: "Custom",
      description: "Tattoo supply business platform with comprehensive product catalog",
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&h=600&fit=crop",
      location: "Hombourg, France",
    },
    {
      title: "Pebbles Solutions",
      platform: "WordPress",
      description: "IT services and solutions provider with modern design and functionality",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      location: "Lahore, Pakistan",
    },
    {
      title: "The Pietas",
      platform: "Custom",
      description: "Arts, News & Literature showcasing website with submission forms",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
      location: "Lahore, Pakistan",
    },
    {
      title: "Topia Hanger",
      platform: "Custom",
      description: "Clothes hanger manufacturer company website with product showcase",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop",
      location: "Pakistan",
    },
    {
      title: "AL-Rayaz Hospital Trust",
      platform: "WordPress",
      description: "Trust hospital providing free medical treatment with appointment system",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      location: "Karachi, Pakistan",
    },
    {
      title: "Global Writerz",
      platform: "Custom",
      description: "Academic writing services platform with portfolio and blog functionality",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=600&fit=crop",
      location: "London, England",
    },
    {
      title: "MOK Auto-Parts",
      platform: "Custom",
      description: "Auto-parts distributor with brand showcase and client management",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
      location: "UAE",
    },
    {
      title: "MMK Mediatech",
      platform: "WordPress",
      description: "Digital agency and IT institute with service portfolio and career section",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      location: "Karachi, Pakistan",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            My Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of {projects.length}+ successful projects across e-commerce, healthcare, education, and more
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl overflow-hidden hover:shadow-[var(--shadow-intense)] transition-all duration-500 hover:-translate-y-3 animate-fade-in-up border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <ExternalLink className="text-primary-foreground w-10 h-10 animate-float" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-lg">
                    {project.platform}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  {project.location}
                </p>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Button variant="hero" size="lg" className="animate-pulse-glow">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

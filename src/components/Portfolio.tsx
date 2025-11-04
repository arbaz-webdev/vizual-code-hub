import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Portfolio = () => {
  const projects = [
    // E-commerce Stores
    {
      title: "The Modo House",
      platform: "Shopify",
      description: "Luxury home decor e-commerce store with elegant design and seamless shopping experience",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=600&fit=crop",
      location: "USA",
      url: "https://themodohouse.com/",
      category: "E-commerce"
    },
    {
      title: "Abwin Labs",
      platform: "Shopify",
      description: "Professional health and wellness products store with easy checkout functionality",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&h=600&fit=crop",
      location: "Pakistan",
      url: "https://abwinlabs.com/",
      category: "E-commerce"
    },
    {
      title: "CoHo Retail",
      platform: "Shopify",
      description: "Modern women's loungewear store with seamless navigation and mobile responsiveness",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      location: "Pakistan",
      url: "https://cohoretail.com/",
      category: "E-commerce"
    },
    {
      title: "Flourish",
      platform: "Shopify",
      description: "Premium online boutique featuring curated fashion and lifestyle products",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
      location: "Pakistan",
      url: "https://www.flourish.com.pk/",
      category: "E-commerce"
    },
    {
      title: "L'CHEAR Pakistan",
      platform: "Shopify",
      description: "Responsive Shopify store for cosmetics and beauty products with secure transactions",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
      location: "Karachi, Pakistan",
      url: "https://lchear.pk/",
      category: "E-commerce"
    },
    {
      title: "Mitochon",
      platform: "Shopify",
      description: "Elegant men's facewash e-commerce with custom product bundles",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=600&fit=crop",
      location: "UK",
      url: "https://mitochon.co.uk/",
      category: "E-commerce"
    },
    {
      title: "AI Health Predictor Shop",
      platform: "Shopify",
      description: "Innovative health tech products store with AI-powered recommendations",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      location: "USA",
      url: "https://shop.aihealthpred.com/",
      category: "E-commerce"
    },
    {
      title: "Wishholic",
      platform: "Shopify",
      description: "Modern gift and lifestyle products store with personalized shopping experience",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=600&fit=crop",
      location: "Pakistan",
      url: "https://wishholic.com/",
      category: "E-commerce"
    },
    {
      title: "Desires PK",
      platform: "Shopify",
      description: "Fashion-forward online store featuring trending apparel and accessories",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      location: "Pakistan",
      url: "https://desirespk.com/",
      category: "E-commerce"
    },
    // Business Websites
    {
      title: "The Tax Global",
      platform: "WordPress",
      description: "Professional tax consulting and financial services website with client portal",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      location: "Global",
      url: "https://thetaxglobal.com/",
      category: "Business"
    },
    {
      title: "AL-Rayaz Hospital Trust",
      platform: "WordPress",
      description: "Trust hospital providing free medical treatment with appointment system",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      location: "Karachi, Pakistan",
      url: "https://alrayazhospitaltrust.org/",
      category: "Healthcare"
    },
    {
      title: "VoIP Backup",
      platform: "WordPress",
      description: "Telecommunications service provider with custom VoIP solutions",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop",
      location: "USA",
      url: "https://voipbackup.com/",
      category: "Technology"
    },
    {
      title: "Hussain Laundry",
      platform: "Custom",
      description: "Professional laundry services website with online booking system",
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&h=600&fit=crop",
      location: "Pakistan",
      url: "https://hussainlaundry.com/",
      category: "Services"
    },
    {
      title: "Green Glow London",
      platform: "WordPress",
      description: "Eco-friendly cleaning services with sustainable practices showcase",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop",
      location: "London, UK",
      url: "https://greenglowlondon.com/",
      category: "Services"
    },
    {
      title: "Florida Gifts For Less",
      platform: "Custom",
      description: "Gift shop and souvenir store with local Florida products",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=600&fit=crop",
      location: "Florida, USA",
      url: "https://floridagiftsforless.com/",
      category: "Retail"
    },
    {
      title: "Agency365",
      platform: "Custom",
      description: "Digital marketing agency with comprehensive service portfolio",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      location: "UK",
      url: "https://agency365.co/",
      category: "Agency"
    },
    {
      title: "Afza Academy",
      platform: "WordPress",
      description: "Educational institution website with course management and enrollment system",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      location: "Pakistan",
      url: "https://afza-academy.com/",
      category: "Education"
    },
    // Wix Studio
    {
      title: "Applied AI Studio",
      platform: "Wix Studio",
      description: "AI consulting and development studio showcasing innovative AI solutions",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      location: "USA",
      url: "https://www.appliedai.studio/",
      category: "Technology"
    }
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
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group bg-card rounded-xl overflow-hidden hover:shadow-[var(--shadow-intense)] transition-all duration-500 hover:-translate-y-3 animate-fade-in-up border border-border block"
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
                <div className="absolute top-4 left-4">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-background/90 text-foreground font-medium shadow-lg">
                    {project.category}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import { Code, ShoppingCart, Palette, Zap, Search, Smartphone } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description: "Custom Shopify, WooCommerce, and e-commerce solutions with payment integration, inventory management, and conversion optimization.",
      features: ["Shopify Store Setup", "Custom Theme Development", "Payment Gateway Integration", "Product Management Systems"]
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end web development using modern technologies including React, PHP, MySQL, and custom CMS solutions.",
      features: ["Custom Web Applications", "API Development & Integration", "Database Design", "Server Management"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive, conversion-focused designs that enhance user experience and drive business results.",
      features: ["Responsive Design", "Figma to Code", "User Interface Design", "Brand Identity"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Technical and on-page SEO strategies to improve search rankings and drive organic traffic to your website.",
      features: ["Technical SEO Audit", "On-Page Optimization", "Schema Markup", "Performance Enhancement"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization and performance tuning to achieve 95+ PageSpeed scores and faster load times.",
      features: ["Code Optimization", "Image Compression", "Caching Strategies", "Core Web Vitals"]
    },
    {
      icon: Smartphone,
      title: "WordPress Development",
      description: "Custom WordPress websites with theme development, plugin integration, and maintenance services.",
      features: ["Custom Theme Development", "Plugin Customization", "WooCommerce Setup", "Site Migration"]
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              My Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Comprehensive web development solutions tailored to your business needs. From e-commerce stores to custom web applications, I deliver high-quality, scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-card rounded-xl p-8 border border-border hover:border-accent transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-intense)] animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-primary-foreground" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Let's collaborate to bring your vision to life with cutting-edge web solutions
          </p>
          <a href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-[var(--shadow-intense)] transition-all duration-300 hover:-translate-y-1">
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;

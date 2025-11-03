import { Award, Briefcase, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "3+" },
    { icon: Award, label: "Projects Completed", value: "20+" },
    { icon: Users, label: "Happy Clients", value: "15+" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] mb-12">
            <p className="text-lg text-card-foreground leading-relaxed">
              Results-driven Full Stack Web Developer with 3+ years of experience building and optimizing 
              high-performance websites. Skilled in Shopify, WordPress, and CMS development with a focus on 
              SEO, UX, and performance. Passionate about creating digital experiences that not only look 
              stunning but also drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 text-center hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <div className="text-3xl font-bold mb-2 text-card-foreground">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

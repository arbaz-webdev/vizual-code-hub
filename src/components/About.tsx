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
          
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-glow)] mb-12 border border-border animate-fade-in-up hover:shadow-[var(--shadow-intense)] transition-all duration-500">
            <p className="text-lg text-card-foreground leading-relaxed mb-4">
              I'm Arbaz Khan, a passionate Web Developer with over 3+ years of experience in creating functional, 
              visually appealing, and user-friendly websites. Specializing in Shopify, WordPress, and CMS development, 
              I focus on delivering high-performing, secure, and tailored digital solutions that align with client needs 
              and business goals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise lies in front-end and back-end development, code optimization, and enhancing user experiences. 
              I'm dedicated to creating digital experiences that not only look stunning but also drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 text-center hover:shadow-[var(--shadow-intense)] transition-all duration-500 hover:-translate-y-2 border border-border animate-slide-in-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300 group-hover:animate-pulse-glow">
                  <stat.icon className="w-10 h-10 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Syed Asad Haseeb",
      role: "FCA at Alrayaz Hospital Trust",
      content: "Arbaz's web development skills are exceptional. His creativity and productivity brought our charity hospital's website to life in ways we never imagined. From design to functionality, Arbaz delivered beyond expectations, creating a platform that beautifully represents our mission. Highly recommend!",
      company: "Alrayaz Hospital Trust",
    },
    {
      name: "Addal Charaf",
      role: "CEO at Tattoo Supply ACCE",
      content: "Arbaz is a web development wizard! He took my Tattoo Items supply website idea and turned it into a masterpiece. His creativity and productivity are unmatched, resulting in a visually stunning and highly functional site. Working with him was a breeze, and I couldn't be happier with the outcome. Strongly endorsed.",
      company: "Tattoo Supply ACCE",
    },
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Happy Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-intense)] transition-all duration-500 border border-border animate-fade-in-up group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -top-6 -right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-32 h-32 text-accent" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white group-hover:animate-pulse-glow">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-card-foreground leading-relaxed mb-4 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-sm font-semibold text-accent">{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

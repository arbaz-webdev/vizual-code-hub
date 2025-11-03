const Experience = () => {
  const experiences = [
    {
      period: "2024 – Present",
      role: "Full Stack Web Developer",
      company: "Freelance",
      highlights: [
        "Built 15+ eCommerce websites with 20% conversion rate improvement",
        "Achieved 95+ PageSpeed scores through optimization",
        "Integrated payment gateways and third-party APIs",
      ],
    },
    {
      period: "2024 – 2025",
      role: "Web Developer",
      company: "Agency365",
      highlights: [
        "Developed high-performing client websites",
        "Improved SEO rankings and site performance",
        "Collaborated with design teams on UX improvements",
      ],
    },
    {
      period: "2023 – 2024",
      role: "CMS Developer",
      company: "Pebbles Solutions",
      highlights: [
        "Designed responsive WordPress websites",
        "Reduced bounce rates through UX optimization",
        "Maintained client websites and provided support",
      ],
    },
    {
      period: "2023",
      role: "WordPress Developer",
      company: "MMK Media",
      highlights: [
        "Optimized website speed and performance",
        "Enhanced UX through clean, maintainable code",
        "Implemented custom WordPress themes",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border-l-4 border-accent hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-card-foreground">{exp.role}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <span className="text-muted-foreground text-sm md:text-base">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-muted-foreground flex items-start">
                    <span className="text-accent mr-2 mt-1.5">▪</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

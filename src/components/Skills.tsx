import { Code, Palette, Rocket, Search } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      skills: ["HTML/CSS", "JavaScript", "PHP", "Liquid", "MySQL", "Python"],
    },
    {
      icon: Palette,
      title: "CMS & Tools",
      skills: ["Shopify", "WordPress", "Wix Studio", "WooCommerce", "Figma", "Git"],
    },
    {
      icon: Search,
      title: "Specializations",
      skills: ["SEO Optimization", "Performance", "UX/UI Design", "API Integration", "CRO"],
    },
    {
      icon: Rocket,
      title: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Time Management", "Creativity"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1"
            >
              <category.icon className="w-10 h-10 mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-muted-foreground flex items-center"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent mr-2" />
                    {skill}
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

export default Skills;

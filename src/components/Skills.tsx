import { Progress } from "./ui/progress";

const Skills = () => {
  const skills = [
    { name: "WordPress, Shopify & CMS", level: 93 },
    { name: "Photo & Video Editing", level: 90 },
    { name: "HTML, CSS & JavaScript", level: 76 },
    { name: "AI Tools", level: 76 },
    { name: "Adobe Suite", level: 71 },
    { name: "PHP, MySQL & Python", level: 68 },
  ];

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Time Management",
    "Creativity",
    "Collaboration",
    "Adaptability",
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-20 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-card-foreground group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-accent font-bold">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3 bg-secondary border border-border" />
              </div>
            ))}
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Professional Skills</h3>
            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-glow)] border border-border">
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all group border border-border/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                    <span className="text-sm font-medium text-card-foreground group-hover:text-accent transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

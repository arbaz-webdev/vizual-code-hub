import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "KASB Institute of Technology",
      period: "2023 – 2027",
      status: "In Progress",
    },
    {
      degree: "Higher Diploma in Software Engineering",
      institution: "Aptech Computer Education",
      period: "2020 – 2023",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Education & Certifications
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border-l-4 border-accent hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-card-foreground">{edu.degree}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full w-fit ${
                      edu.status === "Completed" 
                        ? "bg-accent/20 text-accent" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

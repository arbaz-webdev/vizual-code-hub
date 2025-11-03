import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, text: "North Karachi, Karachi, Pakistan" },
    { icon: Mail, text: "hearbaz@gmail.com", link: "mailto:hearbaz@gmail.com" },
    { icon: Phone, text: "+92 318 2887509, +92 328 2864484", link: "tel:+923182887509" },
  ];

  const socialLinks = [
    { icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, link: "https://github.com", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground group">
                  <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  {info.link ? (
                    <a href={info.link} className="hover:text-accent transition-colors">
                      {info.text}
                    </a>
                  ) : (
                    <span>{info.text}</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-3 rounded-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1 border border-border"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-accent" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-8 shadow-[var(--shadow-glow)] border border-border animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full animate-pulse-glow">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

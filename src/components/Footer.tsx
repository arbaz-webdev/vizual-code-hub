import { Linkedin, Mail, Github, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Arbaz Khan</h3>
            <p className="text-primary-foreground/80 text-sm">
              Full Stack Website Developer specializing in Shopify, WordPress, and custom web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Me</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a href="https://www.linkedin.com/in/arbaz-khan-webdeveloper/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/hearbazz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a href="mailto:hearbaz@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                <Mail size={18} />
                <span>hearbaz@gmail.com</span>
              </a>
              <a href="tel:+923182887509" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                <Phone size={18} />
                <span>+92 318 2887509</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Arbaz Khan. All rights reserved. Built with passion for creating exceptional web experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

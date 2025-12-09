import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  { href: "https://linkedin.com/in/mariem-abouda/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/", icon: Github, label: "GitHub" },
  { href: "mailto:abouda.mariem@esprit.tn", icon: Mail, label: "Email" },
];

const navLinks = ["Home", "About", "Experience", "Skills", "Services", "Projects", "Contact"];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo and tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="font-display font-bold text-3xl mb-2">
              <span className="bg-gradient-to-r from-primary via-blue-medium to-accent bg-clip-text text-transparent">
                Mariem
              </span>
              <span className="text-foreground"> ABOUDA</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Web & DevOps Developer
            </p>
          </motion.div>

          {/* Navigation links */}
          <motion.nav 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Copyright and back to top */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-between w-full gap-4"
          >
            <p className="text-muted-foreground text-sm flex items-center gap-1.5">
              © {currentYear} Made with 
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> 
              by Mariem ABOUDA
            </p>
            
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <span>Back to top</span>
              <div className="p-1.5 rounded-lg bg-card/50 border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import profilePicture from "@/assets/profile-picture.jpg";
export const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <motion.div animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <motion.div animate={{
        scale: [1, 1.3, 1],
        x: [0, 20, 0],
        y: [0, -20, 0]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }} className="absolute top-1/3 right-1/4 w-64 h-64 bg-pastel-lavender/40 rounded-full blur-3xl" />
        
        {/* Grid pattern with gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(28,117,188,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(28,117,188,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
        
        {/* Animated particles */}
        {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-primary/40 rounded-full" style={{
        left: `${15 + i * 15}%`,
        top: `${20 + i % 3 * 25}%`
      }} animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.8, 0.3]
      }} transition={{
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3
      }} />)}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8,
          rotate: -10
        }} animate={{
          opacity: 1,
          scale: 1,
          rotate: 0
        }} transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.4
        }} className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer glow ring */}
              <motion.div animate={{
              rotate: 360
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-blue-medium to-accent opacity-30 blur-xl" />
              
              {/* Decorative ring with gradient */}
              <motion.div animate={{
              rotate: -360
            }} transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute inset-0 rounded-full p-1" style={{
              background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--blue-medium)), hsl(var(--accent)), hsl(var(--primary)))"
            }}>
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>
              
              {/* Profile picture with circular mask */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-border/50 shadow-2xl">
                <img src={profilePicture} alt="Mariem ABOUDA - Web & DevOps Developer" className="w-full h-full object-cover" />
              </div>

              {/* Floating badges with glassmorphism */}
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0,
              y: [0, -8, 0]
            }} transition={{
              opacity: {
                delay: 0.8,
                duration: 0.5
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }} className="absolute -right-2 md:-right-4 top-8 glass-card px-4 py-2 rounded-2xl shadow-lg border border-primary/20">
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-blue-medium bg-clip-text text-transparent flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  DevOps
                </span>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0,
              y: [0, 8, 0]
            }} transition={{
              opacity: {
                delay: 1,
                duration: 0.5
              },
              y: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }} className="absolute -left-2 md:-left-4 bottom-16 glass-card px-4 py-2 rounded-2xl shadow-lg border border-accent/20">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-medium to-accent bg-clip-text flex items-center gap-1.5 text-primary">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  Web Dev
                </span>
              </motion.div>
              
              {/* Additional floating element */}
              <motion.div initial={{
              opacity: 0,
              scale: 0
            }} animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, 10, 0]
            }} transition={{
              opacity: {
                delay: 1.2,
                duration: 0.5
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }} className="absolute -bottom-2 right-8 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-border/30 flex items-center justify-center">
                <span className="text-lg">🚀</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Greeting badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-blue-medium to-accent bg-clip-text text-transparent">
                  Mariem
                </span>
                <motion.span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-medium to-accent rounded-full" initial={{
                scaleX: 0
              }} animate={{
                scaleX: 1
              }} transition={{
                delay: 0.8,
                duration: 0.6
              }} />
              </span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-muted-foreground mb-6">
              DevOps, Cloud and Software Engineering Student
            </motion.p>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Building <span className="text-foreground font-medium">scalable applications</span>, 
              modern <span className="text-foreground font-medium">cloud architectures</span>, and 
              automated <span className="text-foreground font-medium">CI/CD pipelines</span>. 
              Passionate about solving technical challenges.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7
          }} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <DownloadCVButton size="lg" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 rounded-xl px-6" />
              <Button size="lg" variant="outline" className="gap-2 rounded-xl px-6 border-2 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300" asChild>
                <a href="#contact">Let's Talk</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8
          }} className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-sm text-muted-foreground mr-2">Find me on</span>
              {[{
              href: "https://linkedin.com/in/mariem-abouda/",
              icon: Linkedin,
              label: "LinkedIn"
            }, {
              href: "https://github.com/",
              icon: Github,
              label: "GitHub"
            }, {
              href: "mailto:abouda.mariem@esprit.tn",
              icon: Mail,
              label: "Email"
            }].map((social, index) => <motion.a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group relative p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.9 + index * 0.1
            }}>
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>)}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a href="#about" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.4
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <motion.div animate={{
        y: [0, 6, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }} className="p-2 rounded-full border border-border/50 group-hover:border-primary/50 transition-colors">
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>;
};
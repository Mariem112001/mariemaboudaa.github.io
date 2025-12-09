import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Sparkles, User, ArrowRight } from "lucide-react";

const education = [
  {
    degree: "Computer Engineering",
    school: "ESPRIT",
    period: "2023 – 2026",
    status: "Expected Graduation 2026",
  },
  {
    degree: "Bachelor's Degree in Computer Systems Engineering",
    specialization: "IoT & Embedded Systems",
    school: "ISTIC",
    period: "2020 – 2023",
    status: "Diplômée",
  },
];

const traits = [
  { label: "Problem Solver", emoji: "🧩" },
  { label: "Team Player", emoji: "🤝" },
  { label: "Quick Learner", emoji: "⚡" },
  { label: "Detail-Oriented", emoji: "🎯" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" 
      />
      
      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-40 left-10 w-20 h-20 border border-primary/20 rounded-2xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className="absolute bottom-40 right-20 w-16 h-16 border border-accent/20 rounded-full hidden lg:block"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
          >
            <User className="w-4 h-4" />
            About Me
          </motion.span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Get to{" "}
            <span className="bg-gradient-to-r from-primary via-blue-medium to-accent bg-clip-text text-transparent">
              Know Me
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer dedicated to building innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl" />
              
              <div className="glass-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    Who I Am
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Passionnée par le développement web et DevOps, je crée des solutions performantes et scalables. 
                  Curieuse et motivée, j'aime relever des défis technologiques et apprendre de nouvelles innovations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I specialize in building robust backend systems, implementing CI/CD pipelines, 
                  and creating modern cloud-native applications. My approach combines technical excellence 
                  with a keen eye for user experience and system reliability.
                </p>

                <div className="flex flex-wrap gap-3">
                  {traits.map((trait, index) => (
                    <motion.span
                      key={trait.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="group px-4 py-2.5 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 text-foreground text-sm font-medium transition-all duration-300 flex items-center gap-2"
                    >
                      <span>{trait.emoji}</span>
                      {trait.label}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-blue-medium shadow-lg shadow-primary/20">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground">
                Education
              </h3>
            </div>

            <div className="relative">
              {/* Timeline line with gradient */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-medium to-accent/30" />

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                    className="relative pl-16 group"
                  >
                    {/* Timeline dot with pulse */}
                    <div className="absolute left-4 top-4 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-blue-medium shadow-lg shadow-primary/30 flex items-center justify-center">
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-primary"
                      />
                      <div className="w-2 h-2 rounded-full bg-primary-foreground relative z-10" />
                    </div>

                    <div className="glass-card p-6 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group-hover:-translate-y-1">
                      <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      {edu.specialization && (
                        <p className="text-sm text-muted-foreground mb-2">
                          {edu.specialization}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4" />
                        {edu.school}
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs font-medium border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {edu.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

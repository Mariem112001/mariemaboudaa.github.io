import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, Building2, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "AsteelFlash",
    role: "Summer Internship",
    period: "2025",
    description: "Développement & déploiement d'une plateforme de gestion d'API sécurisée",
    tasks: [
      "Backend .NET, authentification & autorisation",
      "Portail de supervision des performances",
      "Déploiement IIS",
    ],
    tech: [".NET", "C#", "SQL Server", "IIS"],
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-400/10",
  },
  {
    company: "Wevioo",
    role: "Summer Internship",
    period: "2024",
    description: "Architecture microservices complète",
    tasks: [
      "Architecture microservices (Config Server, Eureka, Gateway)",
      "API REST + communication inter-services (Feign Client)",
      "Load balancing, circuit breaker, distributed tracing",
      "Docker + Zipkin",
    ],
    tech: ["Spring Boot", "PostgreSQL", "Docker"],
    gradient: "from-violet-500 to-purple-400",
    bgGradient: "from-violet-500/10 to-purple-400/10",
  },
  {
    company: "Sagemcom",
    role: "End-of-studies Internship",
    period: "2023",
    description: "Dashboard KPI sécurisé",
    tasks: [
      "Visualisations interactives",
      "Gestion des données historiques",
      "Processus batch automatisés",
    ],
    tech: ["Spring Boot", "Angular", "Spring Batch"],
    gradient: "from-orange-500 to-amber-400",
    bgGradient: "from-orange-500/10 to-amber-400/10",
  },
  {
    company: "CNI",
    role: "Summer Internship",
    period: "2022",
    description: "API REST interne",
    tasks: ["Développement d'API REST pour usage interne"],
    tech: ["Spring Boot", "MySQL"],
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-500/10 to-teal-400/10",
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" 
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
            <Briefcase className="w-4 h-4" />
            Experience
          </motion.span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary via-blue-medium to-accent bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on industry experience
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-medium to-accent/30 md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot with animation */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 md:-translate-x-1/2 -translate-x-1/2">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${exp.gradient} shadow-lg`} />
                  <motion.div
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.gradient}`}
                  />
                </div>

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className={`glass-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-lg relative overflow-hidden group`}
                  >
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${exp.gradient} shadow-lg`}>
                          <Building2 className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-display font-bold text-lg text-foreground">
                          {exp.company}
                        </span>
                      </div>

                      <div className={`flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/50 border border-border/50">
                          <Briefcase className="w-3.5 h-3.5" />
                          {exp.role}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-foreground font-medium mb-4">{exp.description}</p>

                      <ul className={`space-y-2 mb-5 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {exp.tasks.map((task, i) => (
                          <li key={i} className={`text-sm text-muted-foreground flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium border border-border/50 hover:border-primary/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder, ArrowUpRight, Layers } from "lucide-react";

const projects = [
  {
    title: "API Management Platform",
    company: "AsteelFlash",
    description: "Dashboard + secure API platform with .NET backend and IIS deployment for enterprise API management.",
    tech: [".NET", "C#", "SQL Server", "IIS"],
    gradient: "from-blue-500 to-cyan-400",
    featured: true,
  },
  {
    title: "Microservices Project",
    company: "Wevioo",
    description: "Complete microservices architecture with Config Server, Eureka, Gateway, Feign Client, distributed tracing and containerization.",
    tech: ["Spring Boot", "Docker", "PostgreSQL", "Zipkin"],
    gradient: "from-violet-500 to-purple-400",
    featured: true,
  },
  {
    title: "Cloud Academic Project",
    company: "Academic",
    description: "Full cloud infrastructure with OpenStack, Ansible automation, Spring Boot + Angular web app, Docker & Kubernetes deployment, and Grafana + Prometheus monitoring.",
    tech: ["OpenStack", "Ansible", "Kubernetes", "Grafana", "Prometheus"],
    gradient: "from-emerald-500 to-teal-400",
    featured: true,
  },
  {
    title: "Mobile App",
    company: "Academic",
    description: "Interactive mobile solution developed with FlutterFlow for rapid prototyping and deployment.",
    tech: ["FlutterFlow", "Firebase"],
    gradient: "from-orange-500 to-amber-400",
    featured: false,
  },
  {
    title: "Car Sales Automation",
    company: "Symfony Project",
    description: "Web application automating car purchase and delivery processes with comprehensive workflow management.",
    tech: ["Symfony", "PHP", "MySQL"],
    gradient: "from-indigo-500 to-violet-400",
    featured: false,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1.15, 1, 1.15], rotate: [0, -5, 0] }}
        transition={{ duration: 18, repeat: Infinity, delay: 3 }}
        className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(28,117,188,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(28,117,188,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

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
            <Layers className="w-4 h-4" />
            Projects
          </motion.span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary via-blue-medium to-accent bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my technical expertise
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full border border-border/50 hover:border-primary/30 transition-all duration-300">
                {/* Project header with gradient */}
                <div className={`h-36 bg-gradient-to-br ${project.gradient} p-6 flex items-end relative overflow-hidden`}>
                  {/* Animated pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[size:20px_20px] opacity-20" />
                  
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <Folder className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white/80 text-sm font-medium">
                      {project.company}
                    </span>
                  </div>
                  
                  {/* Hover arrow */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-1">
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <Github className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </button>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-secondary/50 text-secondary-foreground text-xs font-medium border border-border/50 hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="glass-card p-6 rounded-2xl h-full border border-border/50 hover:border-primary/30 transition-all duration-300 flex gap-5 relative overflow-hidden">
                {/* Subtle gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`shrink-0 p-3 rounded-xl bg-gradient-to-br ${project.gradient} h-fit shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <Folder className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-secondary/50">
                      {project.company}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-secondary/50 text-secondary-foreground text-xs font-medium border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Workflow, 
  Database, 
  Cloud, 
  Boxes, 
  BarChart3,
  ArrowRight,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Développement Web & Backend",
    description: "Création d'applications web modernes et performantes avec les dernières technologies.",
    gradient: "from-blue-500 to-cyan-400",
    features: ["React", "Spring Boot", ".NET"],
  },
  {
    icon: Workflow,
    title: "Création d'API RESTful",
    description: "Conception et développement d'APIs robustes et documentées pour vos applications.",
    gradient: "from-violet-500 to-purple-400",
    features: ["REST", "GraphQL", "OpenAPI"],
  },
  {
    icon: Database,
    title: "Intégration & Optimisation BDD",
    description: "Modélisation, optimisation et gestion de bases de données relationnelles.",
    gradient: "from-orange-500 to-amber-400",
    features: ["PostgreSQL", "MySQL", "SQL Server"],
  },
  {
    icon: Cloud,
    title: "DevOps & CI/CD Automation",
    description: "Mise en place de pipelines automatisés pour le déploiement continu.",
    gradient: "from-emerald-500 to-teal-400",
    features: ["GitLab CI", "Jenkins", "Docker"],
  },
  {
    icon: Boxes,
    title: "Microservices Scalables",
    description: "Architecture microservices pour des applications hautement scalables.",
    gradient: "from-indigo-500 to-violet-400",
    features: ["Kubernetes", "Service Mesh", "Eureka"],
  },
  {
    icon: BarChart3,
    title: "Supervision & Observabilité",
    description: "Monitoring avec Prometheus et Grafana pour une visibilité complète.",
    gradient: "from-amber-500 to-orange-400",
    features: ["Prometheus", "Grafana", "Zipkin"],
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2" 
      />
      <motion.div 
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, delay: 3 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" 
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
            <Sparkles className="w-4 h-4" />
            Services
          </motion.span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            What I{" "}
            <span className="bg-gradient-to-r from-primary via-blue-medium to-accent bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="glass-card p-8 rounded-2xl h-full border border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary/50 text-muted-foreground border border-border/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

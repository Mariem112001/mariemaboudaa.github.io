import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Server, 
  GitBranch, 
  Container, 
  Activity, 
  Database, 
  Network, 
  Globe, 
  Award,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Développement",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-400",
    skills: ["Python", "Java", "C#", ".NET", "JavaScript", "TypeScript", "Bash"],
  },
  {
    title: "Frameworks",
    icon: Server,
    gradient: "from-violet-500 to-purple-400",
    skills: ["Spring Boot", "Angular"],
  },
  {
    title: "DevOps & CI/CD",
    icon: GitBranch,
    gradient: "from-orange-500 to-amber-400",
    skills: ["Git", "GitLab CI/CD", "Jenkins", "SonarQube"],
  },
  {
    title: "Conteneurisation",
    icon: Container,
    gradient: "from-emerald-500 to-teal-400",
    skills: ["Docker", "Kubernetes"],
  },
  {
    title: "Observabilité",
    icon: Activity,
    gradient: "from-indigo-500 to-violet-400",
    skills: ["Prometheus", "Grafana"],
  },
  {
    title: "Bases de données",
    icon: Database,
    gradient: "from-amber-500 to-orange-400",
    skills: ["PostgreSQL", "SQL Server", "MySQL"],
  },
  {
    title: "Réseaux",
    icon: Network,
    gradient: "from-cyan-500 to-blue-400",
    skills: ["TCP/IP", "DNS", "VPN", "OSI"],
  },
  {
    title: "Langues",
    icon: Globe,
    gradient: "from-rose-500 to-pink-400",
    skills: ["Arabe (native)", "Français (avancé)", "Anglais (conversationnel)"],
  },
];

const certifications = [
  { name: "CCNA1", icon: "🌐" },
  { name: "AWS Cloud Operations", icon: "☁️" },
  { name: "Big Data Engineering", icon: "📊" },
  { name: "Hashgraph Developer", icon: "⛓️" },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(28,117,188,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(28,117,188,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

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
            <Zap className="w-4 h-4" />
            Skills
          </motion.span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary via-blue-medium to-accent bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="glass-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 h-full transition-all duration-300 relative overflow-hidden">
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.gradient} mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.05 + skillIndex * 0.03 }}
                        className="px-3 py-1.5 rounded-lg bg-secondary/50 text-secondary-foreground text-sm font-medium border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative"
        >
          <div className="glass-card p-8 rounded-2xl border border-border/50 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 shadow-lg shadow-amber-500/20">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Certifications
                  </h3>
                  <p className="text-sm text-muted-foreground">Professional credentials & achievements</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group p-4 rounded-xl bg-gradient-to-br from-background/80 to-secondary/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 text-center"
                  >
                    <span className="text-2xl mb-2 block">{cert.icon}</span>
                    <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                      {cert.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

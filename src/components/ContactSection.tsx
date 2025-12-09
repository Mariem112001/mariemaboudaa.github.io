import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Send, MapPin, MessageSquare, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abouda.mariem@esprit.tn",
    href: "mailto:abouda.mariem@esprit.tn",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+216 55 68 31 99",
    href: "tel:+21655683199",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mariem-abouda",
    href: "https://linkedin.com/in/mariem-abouda/",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tunisia",
    href: null,
    gradient: "from-orange-500 to-amber-400",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    
    try {
      await emailjs.sendForm(
        'service_3lfh29e',
        'template_1noi86d',
        form,
        'W2GdwskkMl5Y3yPNs'
      );
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" 
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
            <MessageSquare className="w-4 h-4" />
            Contact
          </motion.span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-primary via-blue-medium to-accent bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="font-display font-semibold text-2xl text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently available for freelance work and full-time opportunities.
                If you have a project that needs my expertise, don't hesitate to reach out.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 p-5 rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-3" />
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-5 rounded-2xl glass-card border border-border/50">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} shadow-lg`}>
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-8 rounded-2xl border border-border/50 relative overflow-hidden">
              {/* Decorative corner gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full" />
              
              <div className="relative z-10">
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  Send a Message
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Project inquiry"
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

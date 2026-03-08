import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Heart, TrendingUp, Star, CheckCircle, Timer, ArrowRight, Rocket, Target, Lightbulb, Globe } from "lucide-react";

const partnershipModels = [
  {
    title: "Senior Full Stack Developer",
    description: "Building scalable web applications with modern technologies.",
    features: ["React.js, Next.js, Node.js", "Python, Django, FastAPI", "PostgreSQL, MongoDB", "AWS, Docker, Kubernetes"],
    duration: "5.5+ years",
    availability: "Immediate",
    impact: "Ready to contribute to enterprise-level projects",
    icon: Rocket,
  },
  {
    title: "Senior Odoo Developer",
    description: "Expert in Odoo ERP customization and implementation for business transformation.",
    features: ["Odoo Framework & Modules", "Python, XML, JavaScript", "PostgreSQL, API Integration", "Business Process Analysis"],
    duration: "5.5+ years",
    availability: "Immediate",
    impact: "Delivered 91+ successful Odoo projects",
    icon: Target,
  },
  {
    title: "DevOps Engineer",
    description: "Passionate about automation, CI/CD, and cloud infrastructure management.",
    features: ["AWS, Azure, Google Cloud", "Docker, Kubernetes, Jenkins", "Terraform, Ansible", "Monitoring & Security"],
    duration: "3+ years",
    availability: "Immediate",
    impact: "Reduced deployment time by 70%",
    icon: Lightbulb,
  },
  {
    title: "AI/ML Engineer",
    description: "Eager to work on cutting-edge AI solutions and machine learning projects.",
    features: ["Python, TensorFlow, PyTorch", "Computer Vision, NLP", "Data Science, Analytics", "Model Deployment & MLOps"],
    duration: "3+ years",
    availability: "Immediate",
    impact: "Built AI systems for 10+ clients",
    icon: Globe,
  },
];

const benefits = [
  { icon: Timer, title: "Goal-Oriented", desc: "Focused on delivering results and exceeding expectations." },
  { icon: TrendingUp, title: "Fast Learner", desc: "Quick to adapt to new technologies and methodologies." },
  { icon: Star, title: "Team Player", desc: "Excellent collaboration and team leadership experience." },
  { icon: CheckCircle, title: "Proven Track Record", desc: "175+ projects delivered with 99% client satisfaction." },
];

const careerGoals = [
  { step: "01", title: "Join High-Growth Company", desc: "Opportunities in innovative companies with strong growth potential." },
  { step: "02", title: "Technical Leadership", desc: "Aspiring to lead technical teams and mentor junior developers." },
  { step: "03", title: "Innovation & Impact", desc: "Work on products that make a real difference in people's lives." },
  { step: "04", title: "Global Collaboration", desc: "Work with international teams on large-scale projects." },
];

const HireMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hire-me" className="py-28 relative aurora-bg" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Opportunities</p>
          <h2 className="section-heading">
            <span className="gradient-text">Hire Me</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subheading mx-auto mt-4">
            Actively seeking exciting opportunities with high-growth companies.
          </p>
        </motion.div>

        {/* Ready to make impact banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mb-20 glass-card-premium p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Heart size={24} className="text-primary animate-pulse" />
            <span className="text-2xl font-display font-bold text-foreground">Ready to Make an Impact</span>
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Available immediately for full-time positions. Open to remote, hybrid, or on-site opportunities worldwide.
          </p>
        </motion.div>

        {/* Partnership models */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {partnershipModels.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card-premium p-8 group"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)] transition-all duration-500">
                  <model.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-lg">{model.title}</h4>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {model.features.map((f) => (
                  <p key={f} className="text-xs text-muted-foreground flex items-center gap-2.5">
                    <CheckCircle size={12} className="text-primary flex-shrink-0" /> {f}
                  </p>
                ))}
              </div>

              <div className="flex justify-between text-xs text-muted-foreground mb-6">
                <div>
                  <span className="font-bold text-foreground">Experience:</span>
                  <p className="mt-0.5">{model.duration}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-foreground">Availability:</span>
                  <p className="mt-0.5">{model.availability}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex items-center gap-2 mb-6">
                <Star size={14} className="text-primary" />
                <span className="text-xs font-bold text-primary">{model.impact}</span>
              </div>

              <a
                href="https://wa.link/8soaqu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500"
              >
                Get My Resume <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-24">
          <h3 className="text-2xl font-display font-bold text-center mb-12">Why Hire Me?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -6 }}
                className="text-center cursor-default"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)] transition-all duration-500">
                  <b.icon size={28} className="text-primary" />
                </div>
                <h4 className="font-bold text-foreground">{b.title}</h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career goals */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-bold text-center mb-12">My Career Goals</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {careerGoals.map((g) => (
              <motion.div key={g.step} whileHover={{ y: -6 }} className="text-center cursor-default">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-primary-foreground text-lg font-display"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}>
                  {g.step}
                </div>
                <h4 className="font-bold text-foreground">{g.title}</h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="glass-card-premium p-12 text-center"
        >
          <h3 className="text-3xl font-display font-bold mb-4">Ready to Hire Me?</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how I can contribute to your team's success. I'm excited to bring my skills, experience, and passion to your next big project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.link/8soaqu" target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-500 flex items-center justify-center gap-2">
              Schedule Interview <ArrowRight size={14} />
            </a>
            <a href="https://wa.link/8soaqu" target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 rounded-full border border-border text-foreground font-bold text-sm hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] transition-all duration-500">
              Request Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMeSection;
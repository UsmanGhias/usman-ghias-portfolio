import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Heart, TrendingUp, Star, CheckCircle, Timer, ArrowRight, Sparkles } from "lucide-react";

const partnershipModels = [
  {
    title: "Senior Full Stack Developer",
    description: "Building scalable web applications with modern technologies.",
    features: ["React.js, Next.js, Node.js", "Python, Django, FastAPI", "PostgreSQL, MongoDB", "AWS, Docker, Kubernetes"],
    duration: "5.5+ years",
    availability: "Immediate",
    impact: "Ready to contribute to enterprise-level projects",
  },
  {
    title: "Senior Odoo Developer",
    description: "Expert in Odoo ERP customization and implementation for business transformation.",
    features: ["Odoo Framework & Modules", "Python, XML, JavaScript", "PostgreSQL, API Integration", "Business Process Analysis"],
    duration: "5.5+ years",
    availability: "Immediate",
    impact: "Delivered 91+ successful Odoo projects",
  },
  {
    title: "DevOps Engineer",
    description: "Passionate about automation, CI/CD, and cloud infrastructure management.",
    features: ["AWS, Azure, Google Cloud", "Docker, Kubernetes, Jenkins", "Terraform, Ansible", "Monitoring & Security"],
    duration: "3+ years",
    availability: "Immediate",
    impact: "Reduced deployment time by 70%",
  },
  {
    title: "AI/ML Engineer",
    description: "Eager to work on cutting-edge AI solutions and machine learning projects.",
    features: ["Python, TensorFlow, PyTorch", "Computer Vision, NLP", "Data Science, Analytics", "Model Deployment & MLOps"],
    duration: "3+ years",
    availability: "Immediate",
    impact: "Built AI systems for 10+ clients",
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
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Opportunities</p>
          <h2 className="section-heading">
            <span className="gradient-text">Hire Me</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Actively seeking exciting opportunities with high-growth companies.
          </p>
        </motion.div>

        {/* Ready to make impact banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16 glass-card p-8 text-center"
          style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--accent) / 0.08))" }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles size={20} style={{ color: "hsl(var(--primary))" }} />
            <span className="text-lg font-display font-bold text-foreground">Ready to Make an Impact</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Available immediately for full-time positions. Open to remote, hybrid, or on-site opportunities worldwide.
          </p>
        </motion.div>

        {/* Partnership models */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {partnershipModels.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                  <Users size={20} style={{ color: "hsl(var(--primary))" }} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{model.title}</h4>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </div>
              </div>

              <div className="space-y-1 mb-4">
                {model.features.map((f) => (
                  <p key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                    <CheckCircle size={10} className="flex-shrink-0" style={{ color: "hsl(var(--primary))" }} /> {f}
                  </p>
                ))}
              </div>

              <div className="flex justify-between text-xs text-muted-foreground mb-4">
                <div>
                  <span className="font-medium text-foreground">Experience:</span>
                  <p>{model.duration}</p>
                </div>
                <div className="text-right">
                  <span className="font-medium text-foreground">Availability:</span>
                  <p>{model.availability}</p>
                </div>
              </div>

              <div className="p-3 rounded-xl border flex items-center gap-2" style={{ background: "hsl(var(--primary) / 0.05)", borderColor: "hsl(var(--primary) / 0.1)" }}>
                <Star size={14} style={{ color: "hsl(var(--primary))" }} />
                <span className="text-xs font-medium" style={{ color: "hsl(var(--primary))" }}>{model.impact}</span>
              </div>

              <motion.a
                href="https://wa.link/8soaqu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-shadow"
              >
                Get My Resume <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h3 className="text-xl font-display font-bold text-center mb-10">Why Hire Me?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -6 }}
                className="text-center cursor-default"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                  <b.icon size={24} style={{ color: "hsl(var(--primary))" }} />
                </div>
                <h4 className="font-semibold text-sm text-foreground">{b.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career goals */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-bold text-center mb-10">My Career Goals</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {careerGoals.map((g, i) => (
              <motion.div
                key={g.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center cursor-default"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))", color: "hsl(var(--primary-foreground))" }}>
                  {g.step}
                </div>
                <h4 className="font-semibold text-sm text-foreground">{g.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="glass-card p-10 text-center"
          style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.06), hsl(var(--accent) / 0.06))" }}
        >
          <h3 className="text-xl font-display font-bold mb-3">Ready to Hire Me?</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss how I can contribute to your team's success. I'm excited to bring my skills, experience, and passion to your next big project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href="https://wa.link/8soaqu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-shadow flex items-center justify-center gap-2"
            >
              Schedule Interview <ArrowRight size={14} />
            </motion.a>
            <motion.a
              href="https://wa.link/8soaqu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              Request Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMeSection;
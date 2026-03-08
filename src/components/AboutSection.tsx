import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, GraduationCap, Building2, Award, Code, Coffee, Globe, Brain, Rocket, Shield } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: GraduationCap, label: "MSSE @Quantic", sub: "Washington D.C., USA", color: "primary" },
    { icon: GraduationCap, label: "BS PUCIT", sub: "Software Engineering", color: "accent" },
    { icon: Building2, label: "CEO @CODCrafters", sub: "Tech Startup Founder", color: "primary" },
    { icon: Award, label: "Top Rated Upwork", sub: "100% Job Success", color: "accent" },
  ];

  const expertiseAreas = [
    { icon: Code, label: "Full Stack Dev" },
    { icon: Globe, label: "Odoo ERP Expert" },
    { icon: Brain, label: "AI & Blockchain" },
    { icon: Coffee, label: "3D Design" },
    { icon: Rocket, label: "DevOps" },
    { icon: Shield, label: "Cyber Security" },
  ];

  const stats = [
    { val: 175, suffix: "+", label: "Projects Completed" },
    { val: 65, suffix: "+", label: "Happy Clients" },
    { val: 91, suffix: "+", label: "Odoo Projects" },
    { val: 20, suffix: "+", label: "Countries Served" },
    { val: 5, suffix: "/5", label: "Client Satisfaction" },
    { val: 100, suffix: "%", label: "Job Success Rate" },
    { val: 25, suffix: "+", label: "Financial Systems" },
    { val: 40, suffix: "+", label: "Accounting Clients" },
  ];

  return (
    <section id="about" className="py-28 relative aurora-bg" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">About Me</p>
          <h2 className="section-heading">
            Get to Know <span className="gradient-text">My Journey</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-3xl font-display font-bold mb-8">
              Hello! I'm <span className="text-gradient-animate">Muhammad Usman Khan</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              Top Rated Developer — Senior Full Stack Developer and Blockchain Expert with expertise in 
              Odoo customization, Shopify development, WordPress solutions, AI/ML, and 3D designing. 
              Currently pursuing MSSE at Quantic School based in Washington, D.C.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              I've successfully delivered 175+ projects including comprehensive ERP solutions, 
              e-commerce platforms, and blockchain applications. I specialize in Odoo ERP implementations, 
              Shopify theme development, WordPress customization, blockchain/crypto development, and 3D designing 
              using modern technologies. 100% Job Success rate on Upwork generating $100k+ annual revenue.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm border-l-2 border-primary/30 pl-4 italic">
              <strong className="text-foreground not-italic">Title:</strong> Senior Odoo | MERN | Shopify | Flutter | DevOps | WordPress & Full Stack Developer | 
              Blockchain Expert | 3D Designer | MSSE @Quantic | CEO @CODCrafters | Senior Software & AI Engineer
            </p>

            {/* Expertise badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {expertiseAreas.map((area, i) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                >
                  <area.icon size={14} className="text-primary" />
                  <span className="text-xs font-semibold text-foreground">{area.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-3 mb-8">
              {[
                { icon: MapPin, text: "Samundri, Punjab, Pakistan" },
                { icon: Phone, text: "+92 312 691 2440" },
                { icon: Mail, text: "iusmanghias@gmail.com" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-muted-foreground group">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.upwork.com/freelancers/usmanghias"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500"
              >
                View Upwork Profile
              </a>
              <a
                href="https://codcrafters.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-500"
              >
                Visit CODCrafters
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 8 }}
                className="glass-card-premium p-6 flex items-center gap-5"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  item.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                }`}>
                  <item.icon size={24} className={item.color === "primary" ? "text-primary" : "text-accent"} />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg font-display">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card-premium p-5 text-center cursor-default"
                >
                  <p className="text-2xl font-bold gradient-text font-display">
                    <AnimatedCounter end={s.val} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
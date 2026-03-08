import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, GraduationCap, Building2, Award, Code, Coffee, Globe, Brain } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: GraduationCap, label: "MSSE @Quantic", sub: "Washington D.C., USA" },
    { icon: GraduationCap, label: "BS PUCIT", sub: "Software Engineering" },
    { icon: Building2, label: "CEO @CODCrafters", sub: "Tech Startup" },
    { icon: Award, label: "Top Rated Upwork", sub: "100% Job Success" },
  ];

  const expertiseAreas = [
    { icon: Code, label: "Full Stack Dev" },
    { icon: Globe, label: "Odoo ERP Expert" },
    { icon: Brain, label: "AI & Blockchain" },
    { icon: Coffee, label: "3D Design" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">About Me</p>
          <h2 className="section-heading">
            Get to Know <span className="gradient-text">My Journey</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6">
              Hello! I'm <span className="gradient-text">Muhammad Usman Khan</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Top Rated Developer — Senior Full Stack Developer and Blockchain Expert with expertise in 
              Odoo customization, Shopify development, WordPress solutions, AI/ML, and 3D designing. 
              Currently pursuing MSSE at Quantic School based in Washington, D.C.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I've successfully delivered 175+ projects including comprehensive ERP solutions, 
              e-commerce platforms, and blockchain applications. I specialize in Odoo ERP implementations, 
              Shopify theme development, WordPress customization, blockchain/crypto development, and 3D designing 
              using modern technologies. 100% Job Success rate on Upwork generating $100k+ annual revenue.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              <strong className="text-foreground">Title:</strong> Senior Odoo | MERN | Shopify | Flutter | DevOps | WordPress & Full Stack Developer | 
              Blockchain Expert | 3D Designer | MSSE @Quantic | CEO @CODCrafters | Senior Software & AI Engineer
            </p>

            {/* Expertise badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {expertiseAreas.map((area) => (
                <div key={area.label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/5 border border-primary/10">
                  <area.icon size={14} className="text-primary" />
                  <span className="text-xs font-medium text-foreground">{area.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 mb-8">
              {[
                { icon: MapPin, text: "Samundri, Punjab, Pakistan" },
                { icon: Phone, text: "+92 312 691 2440" },
                { icon: Mail, text: "iusmanghias@gmail.com" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-muted-foreground">
                  <Icon size={16} className="text-primary" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.upwork.com/freelancers/usmanghias"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View Upwork Profile
              </a>
              <a
                href="https://codcrafters.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                Visit CODCrafters
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass-card-hover p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { val: "175+", label: "Projects Completed" },
                { val: "65+", label: "Happy Clients" },
                { val: "91+", label: "Odoo Projects" },
                { val: "20+", label: "Countries Served" },
                { val: "5/5", label: "Client Satisfaction" },
                { val: "100%", label: "Job Success Rate" },
                { val: "25+", label: "Financial Systems" },
                { val: "40+", label: "Accounting Clients" },
              ].map((s) => (
                <div key={s.label} className="glass-card p-4 text-center">
                  <p className="text-2xl font-bold gradient-text font-display">{s.val}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

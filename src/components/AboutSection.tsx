import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, GraduationCap, Building2, Award } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: GraduationCap, label: "MSSE @Quantic", sub: "95%+ GPA" },
    { icon: GraduationCap, label: "BS PUCIT", sub: "Distinction" },
    { icon: Building2, label: "CEO @CODCrafters", sub: "Tech Startup" },
    { icon: Award, label: "Top Rated Upwork", sub: "100% Success" },
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
              Top Rated Developer with 5.5+ years of experience — a Senior Full Stack Developer and Blockchain Expert 
              specializing in Odoo customization, Shopify development, WordPress solutions, AI/ML, and 3D designing. 
              Currently pursuing MSSE at Quantic School based in Washington, D.C.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I've successfully delivered 175+ projects including comprehensive ERP solutions, 
              e-commerce platforms, and blockchain applications. I specialize in creating scalable web 
              applications, custom Odoo solutions, and intelligent systems with a 100% Job Success rate on Upwork 
              generating $100k+ annual revenue.
            </p>

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

            <a
              href="https://www.upwork.com/freelancers/usmanghias"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View Upwork Profile
            </a>
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

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { val: "175+", label: "Projects Completed" },
                { val: "65+", label: "Happy Clients" },
                { val: "20+", label: "Countries Served" },
                { val: "5/5", label: "Client Satisfaction" },
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

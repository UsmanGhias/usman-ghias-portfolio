import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profileImg from "@/assets/usman-profile.png";

const roles = [
  "Senior Odoo Developer",
  "Full Stack Architect",
  "AI & Blockchain Expert",
  "MERN Stack Engineer",
  "DevOps Specialist",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const stats = [
    { value: "175+", label: "Projects" },
    { value: "65+", label: "Clients" },
    { value: "5.5+", label: "Years Exp" },
    { value: "20+", label: "Countries" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="hero-glow w-[600px] h-[600px] -top-40 -left-40" />
      <div className="hero-glow w-[400px] h-[400px] bottom-20 right-10 opacity-10" style={{ background: "radial-gradient(circle, hsl(270 80% 60%), transparent)" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="floating-particle"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            bottom: "-10px",
            animationDuration: `${Math.random() * 10 + 8}s`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(142 76% 50%)" }} />
              <span className="text-sm text-muted-foreground">Available for projects</span>
              <span className="skill-badge">Odoo Architect</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg mb-2"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold font-display mb-4 leading-tight"
            >
              Muhammad{" "}
              <span className="gradient-text">Usman</span>{" "}
              Khan
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-12 mb-6"
            >
              <span className="text-2xl md:text-3xl font-display text-primary font-semibold">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Elite Full Stack Developer & AI/Blockchain Expert with 5.5+ years of experience. 
              Founder of CODCrafters. 
              Currently pursuing MSSE at Quantic School, Washington D.C.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center gap-2"
              >
                View Projects <ArrowDown size={18} />
              </a>
              <a
                href="https://codcrafters.org"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full border border-border hover:border-primary/50 text-foreground font-semibold transition-all flex items-center gap-2 hover:bg-primary/5"
              >
                Visit CODCrafters <ExternalLink size={16} />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/UsmanGhias" },
                { icon: Linkedin, href: "https://linkedin.com/in/m-usmanghias" },
                { icon: Mail, href: "mailto:iusmanghias@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:bg-primary/5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl scale-90" />
              
              {/* Image container */}
              <div className="relative glow-border rounded-3xl overflow-hidden w-[340px] h-[440px] md:w-[400px] md:h-[520px]">
                <img
                  src={profileImg}
                  alt="Muhammad Usman Khan"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/90 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -left-8 top-1/4 glass-card p-3 rounded-xl"
              >
                <p className="text-xs text-muted-foreground">Senior Odoo</p>
                <p className="text-sm font-bold text-foreground">Expert</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute -right-8 top-1/3 glass-card p-3 rounded-xl"
              >
                <p className="text-xs text-muted-foreground">MSSE @Quantic</p>
                <p className="text-sm font-bold text-foreground">USA</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -right-4 bottom-20 glass-card p-3 rounded-xl"
              >
                <p className="text-xs text-muted-foreground">Upwork</p>
                <p className="text-sm font-bold text-primary">Odoo Developer</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <p className="stat-number text-4xl md:text-5xl">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

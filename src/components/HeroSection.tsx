import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download, Sparkles } from "lucide-react";
import profileImg from "@/assets/usman-profile.png";
import AnimatedCounter from "./AnimatedCounter";

const roles = [
  "Senior Odoo Developer",
  "Full Stack Architect",
  "AI & Blockchain Expert",
  "MERN Stack Engineer",
  "DevOps Specialist",
  "CEO @CODCrafters",
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
      isDeleting ? 30 : 70
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const stats = [
    { value: 175, suffix: "+", label: "Projects Delivered" },
    { value: 65, suffix: "+", label: "Happy Clients" },
    { value: 5, suffix: ".5+", label: "Years Experience" },
    { value: 20, suffix: "+", label: "Countries Served" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden aurora-bg">
      {/* Background effects */}
      <div className="hero-glow w-[800px] h-[800px] -top-60 -left-60" />
      <div className="hero-glow w-[500px] h-[500px] bottom-10 right-0 opacity-10" style={{ background: "radial-gradient(circle, hsl(270 80% 60%), transparent)" }} />
      <div className="hero-glow w-[300px] h-[300px] top-1/2 left-1/2 opacity-5" style={{ background: "radial-gradient(circle, hsl(30 100% 60%), transparent)" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="floating-particle"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            left: `${Math.random() * 100}%`,
            bottom: "-10px",
            animationDuration: `${Math.random() * 12 + 6}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Orbiting ring decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-border/10 animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/5 animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 mb-8 shimmer"
            >
              <span className="w-2 h-2 rounded-full bg-glow-success animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for projects</span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-primary/15 text-primary border border-primary/25">TOP RATED</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg mb-3 font-light tracking-wide"
            >
              Hi there, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display mb-5 leading-[0.95] tracking-tight"
            >
              Muhammad{" "}
              <span className="text-gradient-animate">Usman</span>
              <br />
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Khan</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-12 mb-8 flex items-center gap-2"
            >
              <Sparkles size={20} className="text-primary animate-pulse" />
              <span className="text-xl sm:text-2xl md:text-3xl font-display text-primary font-bold">
                {text}
                <span className="animate-pulse ml-0.5 text-accent">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground max-w-xl mb-10 leading-relaxed text-base"
            >
              Elite Full Stack Developer & AI/Blockchain Expert with 5.5+ years of experience. 
              Top Rated on Upwork with 100% Job Success. Founder of CODCrafters. 
              Currently pursuing MSSE at Quantic School, Washington D.C.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-500 flex items-center gap-2 text-sm"
              >
                View My Work <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="https://codcrafters.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-full border border-border hover:border-primary/50 text-foreground font-bold transition-all duration-500 flex items-center gap-2 hover:bg-primary/5 text-sm"
              >
                CODCrafters <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.link/8soaqu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-accent/30 hover:border-accent/60 text-foreground font-bold transition-all duration-500 flex items-center gap-2 hover:bg-accent/5 text-sm"
              >
                <Download size={14} /> Get Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-3"
            >
              {[
                { icon: Github, href: "https://github.com/UsmanGhias", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/m-usmanghias", label: "LinkedIn" },
                { icon: Mail, href: "mailto:iusmanghias@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-500 hover:bg-primary/5 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Morphing blob glow */}
              <div className="absolute inset-[-40px] morphing-blob opacity-30 blur-3xl"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }} />
              
              {/* Image container */}
              <div className="relative glow-border rounded-3xl overflow-hidden w-[320px] h-[420px] md:w-[420px] md:h-[540px]">
                <img
                  src={profileImg}
                  alt="Muhammad Usman Khan - Senior Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Gradient overlays */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background/30 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -left-12 top-1/4 glass-card-premium p-4 rounded-xl"
              >
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Odoo Expert</p>
                <p className="text-lg font-bold gradient-text font-display">91+ Projects</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -right-12 top-1/3 glass-card-premium p-4 rounded-xl"
              >
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">MSSE @Quantic</p>
                <p className="text-lg font-bold gradient-text font-display">USA 🇺🇸</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-8 bottom-24 glass-card-premium p-4 rounded-xl"
              >
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Upwork</p>
                <p className="text-lg font-bold text-primary">Top Rated ⭐</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -left-6 bottom-32 glass-card-premium p-4 rounded-xl"
              >
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Success Rate</p>
                <p className="text-lg font-bold gradient-text-warm font-display">100% ✓</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card-premium p-8 text-center group cursor-default"
            >
              <p className="stat-number text-4xl md:text-5xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-muted-foreground text-sm mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import profileImg from "@/assets/usman-profile.png";

const roles = [
  "Senior Odoo Developer",
  "Full Stack Architect",
  "AI & Blockchain Expert",
  "MERN Stack Engineer",
  "DevOps Specialist",
  "CEO @CODCrafters",
];

const CountStat = ({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(value, 2500, 0, isInView);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, y: -4 }}
      className="glass-card p-6 text-center group cursor-default"
    >
      <p className="stat-number text-4xl md:text-5xl">{count}{suffix}</p>
      <p className="text-muted-foreground text-sm mt-1 group-hover:text-foreground transition-colors">{label}</p>
    </motion.div>
  );
};

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
      isDeleting ? 35 : 70
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden aurora-bg noise-overlay">
      {/* Background effects */}
      <div className="hero-glow w-[700px] h-[700px] -top-48 -left-48" />
      <div className="hero-glow w-[500px] h-[500px] bottom-20 right-10 opacity-[0.08]" style={{ background: "radial-gradient(circle, hsl(265 85% 60%), transparent)" }} />
      <div className="hero-glow w-[300px] h-[300px] top-1/2 left-1/2 opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(35 100% 60%), transparent)" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
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
            animationDuration: `${Math.random() * 12 + 8}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(142 76% 50%)" }} />
              <span className="text-sm text-muted-foreground">Available for projects</span>
              <span className="skill-badge text-[10px] py-0.5">Top Rated</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg mb-2 font-light"
            >
              Hi there, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4 leading-[0.95]"
            >
              Muhammad{" "}
              <span className="gradient-text">Usman</span>
              <br />
              <span className="shimmer-text">Khan</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-12 mb-6"
            >
              <span className="text-2xl md:text-3xl font-display font-semibold" style={{ color: "hsl(var(--primary))" }}>
                {text}
                <span className="animate-pulse ml-0.5" style={{ color: "hsl(var(--accent))" }}>|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground max-w-lg mb-8 leading-relaxed text-base"
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
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-shadow flex items-center gap-2"
              >
                <Sparkles size={16} /> View Projects
              </motion.a>
              <motion.a
                href="https://codcrafters.org"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-full border border-border hover:border-primary/40 text-foreground font-semibold transition-all flex items-center gap-2 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10"
              >
                Visit CODCrafters <ExternalLink size={14} />
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-3"
            >
              {[
                { icon: Github, href: "https://github.com/UsmanGhias", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/m-usmanghias", label: "LinkedIn" },
                { icon: Mail, href: "mailto:iusmanghias@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10"
                  aria-label={label}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Animated glow behind image */}
              <motion.div
                animate={{ 
                  scale: [0.9, 1, 0.9],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl blur-3xl"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}
              />
              
              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative glow-border rounded-3xl overflow-hidden w-[320px] h-[420px] md:w-[380px] md:h-[500px]"
              >
                <img
                  src={profileImg}
                  alt="Muhammad Usman Khan - Senior Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -left-10 top-1/4 glass-card p-3 rounded-xl"
              >
                <p className="text-[10px] text-muted-foreground">Senior Odoo</p>
                <p className="text-sm font-bold text-foreground">Expert 🔧</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -right-10 top-1/3 glass-card p-3 rounded-xl"
              >
                <p className="text-[10px] text-muted-foreground">MSSE @Quantic</p>
                <p className="text-sm font-bold gradient-text">USA 🇺🇸</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-6 bottom-24 glass-card p-3 rounded-xl"
              >
                <p className="text-[10px] text-muted-foreground">Upwork</p>
                <p className="text-sm font-bold" style={{ color: "hsl(var(--primary))" }}>Top Rated ⭐</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                className="absolute -left-6 bottom-32 glass-card p-3 rounded-xl"
              >
                <p className="text-[10px] text-muted-foreground">CEO</p>
                <p className="text-sm font-bold gradient-text-warm">CODCrafters 🚀</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          <CountStat value={175} label="Projects Completed" />
          <CountStat value={65} label="Happy Clients" />
          <CountStat value={5} label="Years Experience" suffix=".5+" />
          <CountStat value={20} label="Countries Served" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Hire Me", href: "#hire-me" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const progress = useScrollProgress();

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = navItems.map(item => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-2xl border-b border-border/30 shadow-lg shadow-background/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <a href="#home" className="font-display text-xl font-bold group">
            <span className="text-foreground group-hover:text-primary transition-colors duration-300">U</span>
            <span className="gradient-text">K</span>
            <span className="text-muted-foreground text-xs ml-1.5 font-mono hidden sm:inline opacity-60">.dev</span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-xs px-3 py-1.5 rounded-full transition-all duration-300 ${
                  activeSection === item.href ? "active text-foreground bg-primary/5" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#hire-me"
              className="ml-3 px-5 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-border/50 text-foreground hover:border-primary/30 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border/30"
            >
              <div className="flex flex-col items-center gap-2 py-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`nav-link text-base py-2 ${activeSection === item.href ? "active" : ""}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#hire-me"
                  className="mt-2 px-8 py-3 text-sm font-semibold rounded-full bg-primary text-primary-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
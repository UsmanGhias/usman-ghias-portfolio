import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/30 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}{" "}
              <span className="gradient-text font-semibold">Muhammad Usman Khan</span>
              . All rights reserved.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            Crafted with <Heart size={12} className="fill-current" style={{ color: "hsl(var(--glow-rose))" }} /> • Senior Full Stack Developer • 5.5+ Years of Excellence
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
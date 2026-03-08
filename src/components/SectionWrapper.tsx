import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  aurora?: boolean;
}

const SectionWrapper = ({ id, children, className = "", aurora = false }: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} className={`py-28 relative ${aurora ? "aurora-bg" : ""} ${className}`} ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Calendar, Users, Building, CheckCircle } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Hospital Management System",
    subtitle: "Empowering Healthcare with Smart Digital Solutions",
    description: "A comprehensive Odoo-based Hospital Management System that streamlines medical, administrative, and financial operations with maximum efficiency.",
    technologies: ["Odoo", "Python", "PostgreSQL", "JavaScript", "XML"],
    features: [
      "Patient Management & Records",
      "Physician & Nursing Management",
      "Appointment Scheduling",
      "Billing & Financial Management",
      "Pharmacy Management",
      "Laboratory Management",
      "Inventory Management",
    ],
    highlights: [
      "End-to-end patient management with structured profiles",
      "Unified clinical assessment and disease tracking",
      "Real-time search and filter capabilities",
    ],
    duration: "3-4 months",
    teamSize: "3-4 developers",
    client: "Healthcare Institutions",
  },
  {
    id: 2,
    title: "Car Repair Workshop Management",
    subtitle: "Streamlining Automotive Service Digitally",
    description: "An intelligent and fully integrated Car Repair Workshop Management System developed on Odoo, tailored for automotive repair shops and garages.",
    technologies: ["Odoo", "Python", "PostgreSQL", "JavaScript", "XML"],
    features: [
      "Vehicle Intake & Diagnosis",
      "Real-Time Service Tracking",
      "Repair Order Management",
      "Inventory & Parts Management",
      "Customer Communication",
      "Billing & Invoicing",
      "Service History Tracking",
    ],
    highlights: [
      "Efficient vehicle intake with digital check-in",
      "Real-time job card status tracking",
      "Automated invoice generation from completed repairs",
    ],
    duration: "2-3 months",
    teamSize: "2-3 developers",
    client: "Automotive Repair Shops",
  },
  {
    id: 3,
    title: "Hotel Management System",
    subtitle: "Comprehensive Hotel Operations & Guest Experience",
    description: "A complete Odoo-based Hotel Management System designed to streamline all aspects of hotel operations including reservations, guest services, housekeeping, and billing.",
    technologies: ["Odoo", "Python", "PostgreSQL", "JavaScript", "XML", "QWeb"],
    features: [
      "Room Reservation & Booking",
      "Guest Check-in/Check-out",
      "Housekeeping Management",
      "Point of Sale Integration",
      "Restaurant & Room Service",
      "Financial & Billing System",
      "Inventory Management",
    ],
    highlights: [
      "Seamless booking and reservation system",
      "Real-time room availability tracking",
      "Automated housekeeping workflows",
    ],
    duration: "4-5 months",
    teamSize: "3-4 developers",
    client: "Hospitality Industry",
  },
];

const additionalStudies = [
  { title: "WordPress Portfolio", desc: "Custom themes, plugins, and e-commerce solutions", tech: "WordPress, PHP, MySQL" },
  { title: "Odoo Projects Portfolio", desc: "90+ Odoo projects across multiple industries", tech: "Odoo, Python, PostgreSQL" },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Case Studies</p>
          <h2 className="section-heading">
            Detailed <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Comprehensive solutions for healthcare, automotive, and hospitality sectors
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card-hover p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-lg">{study.title}</h4>
                  <p className="text-xs text-primary">{study.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{study.description}</p>

              <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar size={12} /> {study.duration}</span>
                <span className="flex items-center gap-1"><Users size={12} /> {study.teamSize}</span>
                <span className="flex items-center gap-1"><Building size={12} /> {study.client}</span>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-foreground mb-2">Key Features:</p>
                <div className="grid grid-cols-2 gap-1">
                  {study.features.map((f) => (
                    <span key={f} className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <CheckCircle size={8} className="text-primary flex-shrink-0" /> {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4 flex-1">
                <p className="text-xs font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="space-y-1">
                  {study.highlights.map((h) => (
                    <li key={h} className="text-[10px] text-muted-foreground flex items-start gap-1">
                      <span className="text-accent mt-0.5">▸</span> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border/50">
                {study.technologies.map((tech) => (
                  <span key={tech} className="skill-badge text-[10px]">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional case studies */}
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {additionalStudies.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="glass-card p-4 text-center"
            >
              <h5 className="font-display font-bold text-sm text-foreground">{s.title}</h5>
              <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
              <p className="text-[10px] text-primary mt-2">{s.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

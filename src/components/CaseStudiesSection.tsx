import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Calendar, Users, Building, CheckCircle, ArrowRight } from "lucide-react";

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
      "Specialized care modules for different departments",
      "Real-time search and filter capabilities",
      "Comprehensive physician and nursing workflow management",
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
      "Comprehensive service history for customers",
      "Standardized quality assurance checklists",
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
      "Integrated billing with multiple payment options",
      "Guest history and preferences management",
    ],
    duration: "4-5 months",
    teamSize: "3-4 developers",
    client: "Hospitality Industry",
  },
];

const additionalStudies = [
  { title: "WordPress Portfolio", desc: "Custom themes, plugins, and e-commerce solutions for multiple clients", tech: "WordPress, PHP, MySQL, JavaScript, CSS" },
  { title: "Shopify Portfolio", desc: "E-commerce solutions, custom themes, apps & store optimization", tech: "Shopify, Liquid, JavaScript, CSS, API Integration" },
  { title: "Odoo Projects Portfolio", desc: "90+ Odoo projects across multiple industries and ERP implementations", tech: "Odoo, Python, PostgreSQL, XML, OWL, JavaScript" },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Case Studies</p>
          <h2 className="section-heading">
            Detailed <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subheading mx-auto mt-4">
            Comprehensive solutions for healthcare, automotive, and hospitality sectors
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="glass-card-premium p-8 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)] transition-all duration-500">
                  <FileText size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-xl">{study.title}</h4>
                  <p className="text-xs text-primary font-medium">{study.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{study.description}</p>

              <div className="flex items-center gap-4 mb-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar size={12} /> {study.duration}</span>
                <span className="flex items-center gap-1.5"><Users size={12} /> {study.teamSize}</span>
                <span className="flex items-center gap-1.5"><Building size={12} /> {study.client}</span>
              </div>

              <div className="mb-6">
                <p className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider">Key Features</p>
                <div className="grid grid-cols-2 gap-2">
                  {study.features.map((f) => (
                    <span key={f} className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                      <CheckCircle size={10} className="text-primary flex-shrink-0" /> {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6 flex-1">
                <p className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider">Highlights</p>
                <ul className="space-y-2">
                  {study.highlights.map((h) => (
                    <li key={h} className="text-[11px] text-muted-foreground flex items-start gap-2">
                      <ArrowRight size={10} className="text-accent mt-0.5 flex-shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/30">
                {study.technologies.map((tech) => (
                  <span key={tech} className="skill-badge text-[10px]">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional case studies */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {additionalStudies.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card-premium p-6 text-center cursor-default"
            >
              <h5 className="font-display font-bold text-foreground">{s.title}</h5>
              <p className="text-xs text-muted-foreground mt-2">{s.desc}</p>
              <p className="text-[10px] text-primary mt-3 font-bold">{s.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

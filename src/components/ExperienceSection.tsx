import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "CEO & Lead Developer",
    company: "CODCrafters",
    period: "2021 - Present",
    desc: "Founded and leading a tech startup delivering enterprise solutions. Managing team of developers, 175+ successful project deliveries across 20+ countries.",
    tags: ["Leadership", "Full Stack", "Odoo", "Blockchain", "AI/ML"],
    current: true,
  },
  {
    title: "Senior Odoo Developer",
    company: "Freelance / Upwork",
    period: "2020 - Present",
    desc: "Top Rated freelancer with 100% Job Success rate. Delivered 91+ Odoo projects including custom modules, ERP implementations, and system integrations. $100k+ annual revenue.",
    tags: ["Odoo 15-19", "Python", "PostgreSQL", "OWL", "API"],
    current: true,
  },
  {
    title: "Full Stack Developer",
    company: "Various Clients",
    period: "2020 - Present",
    desc: "Built scalable web applications, e-commerce platforms, mobile apps, and blockchain solutions for clients worldwide using MERN stack and modern frameworks.",
    tags: ["React", "Next.js", "Node.js", "Flutter", "Shopify"],
    current: false,
  },
  {
    title: "MSSE Student",
    company: "Quantic School of Business, Washington D.C.",
    period: "2024 - Present",
    desc: "Pursuing Master of Science in Software Engineering with 95%+ GPA. Studying advanced software architecture, system design, and engineering management.",
    tags: ["Software Engineering", "System Design", "Architecture"],
    current: true,
  },
  {
    title: "BS Computer Science",
    company: "PUCIT - Punjab University",
    period: "2019 - 2023",
    desc: "Graduated with Distinction. Focused on algorithms, data structures, AI/ML, and software engineering fundamentals.",
    tags: ["Computer Science", "AI/ML", "Algorithms"],
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Experience</p>
          <h2 className="section-heading">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 top-1 w-5 h-5 rounded-full border-2 ${
                exp.current ? "border-primary bg-primary/20" : "border-border bg-card"
              }`}>
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                )}
              </div>

              <div className="glass-card-hover p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h4 className="text-lg font-display font-bold text-foreground">{exp.title}</h4>
                  {exp.current && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Current
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} /> {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="skill-badge text-[10px]">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

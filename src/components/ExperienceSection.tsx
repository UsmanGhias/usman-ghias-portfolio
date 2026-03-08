import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    company: "Partsnord Europe AB",
    position: "Senior Odoo Developer",
    period: "Oct 2025 - Present",
    location: "Europe (Remote)",
    type: "Full-time",
    desc: "Senior Odoo Developer specializing in enterprise-level Odoo implementations and custom module development. Leading development teams in complex ERP solutions.",
    achievements: [
      "Leading enterprise-level Odoo implementations",
      "Developing custom Odoo modules for automotive parts industry",
      "Managing technical architecture and development teams",
    ],
    tags: ["Odoo", "Python", "PostgreSQL", "XML", "OWL Framework", "Enterprise Solutions"],
    current: true,
  },
  {
    company: "Hunter",
    position: "Odoo Expert",
    period: "Dec 2025 - Present",
    location: "Remote",
    type: "Contract",
    desc: "Providing expert Odoo consultation and development services. Specializing in Odoo ERP customization and integration solutions.",
    achievements: [
      "Delivering expert Odoo consultation services",
      "Implementing custom Odoo solutions for diverse clients",
      "Optimizing business processes through Odoo ERP",
    ],
    tags: ["Odoo", "ERP Development", "Python", "System Integration"],
    current: true,
  },
  {
    company: "Plectar",
    position: "Odoo Spreadsheets Specialist",
    period: "Dec 2025 - Jan 2026",
    location: "Remote",
    type: "Contract",
    desc: "Specialized in Odoo Spreadsheets module development and implementation. Created advanced spreadsheet solutions within Odoo ERP.",
    achievements: [
      "Developed advanced Odoo Spreadsheets solutions",
      "Implemented custom spreadsheet integrations with Odoo modules",
    ],
    tags: ["Odoo", "Odoo Spreadsheets", "Python", "JavaScript", "Data Analysis"],
    current: false,
  },
  {
    company: "Sisters Code",
    position: "Odoo Web Development",
    period: "Oct 2025",
    location: "United States (Remote)",
    type: "Freelance",
    desc: "Complete Odoo implementation from start to end. Developed custom Odoo web modules. Alhamdulillah Project Success.",
    achievements: [
      "Completed full Odoo implementation from start to end",
      "Developed custom Odoo web modules",
      "Successfully delivered with 100% client satisfaction",
    ],
    tags: ["Odoo", "Web Development", "Python", "PostgreSQL", "OWL Framework"],
    current: false,
  },
  {
    company: "Cavi Consulting",
    position: "Odoo Project Manager",
    period: "Aug 2025 - Sep 2025",
    location: "Austria (Remote)",
    type: "Part-time",
    desc: "Senior Odoo Project Manager and Developer - Managing Odoo with AI. Alhamdulillah Long Project Success - Odoo with AI Integration.",
    achievements: [
      "Managed enterprise Odoo implementations with AI integration",
      "Led development teams in AI-powered Odoo solutions",
      "Integrated artificial intelligence with Odoo ERP systems",
    ],
    tags: ["Odoo", "AI Integration", "Project Management", "Python", "Machine Learning"],
    current: false,
  },
  {
    company: "Dispo Genius",
    position: "AI Researcher",
    period: "May 2025 - Jun 2025",
    location: "United States (Remote)",
    type: "Freelance",
    desc: "Developed and integrated APIs for real estate applications, enhancing user experience. Contributed to a 30% increase in client engagement.",
    achievements: [
      "Developed APIs for real estate applications",
      "Drove innovative solutions in AI for property management",
      "30% increase in client engagement",
    ],
    tags: ["Python", "AI/ML", "FastAPI", "Real Estate Tech", "API Development"],
    current: false,
  },
  {
    company: "CODCrafters",
    position: "Chief Executive Officer",
    period: "Apr 2025 - Present",
    location: "Pakistan (On-site)",
    type: "Founder",
    desc: "Led ERP implementations, developed custom web and mobile applications. Developed Hospital Management System (HMS) with 50+ apps. Provided expert business consultancy services.",
    achievements: [
      "Led ERP implementations ensuring seamless integration",
      "Developed HMS with 50+ apps for patient records, appointments, billing",
      "Custom web and mobile applications for diverse clients",
    ],
    tags: ["Odoo", "MERN Stack", "Python", "ERP Systems", "Hospital Management", "Team Leadership"],
    current: true,
  },
  {
    company: "Upwork",
    position: "Senior Odoo Developer",
    period: "May 2024 - Present",
    location: "Remote",
    type: "Freelance",
    desc: "Top Rated freelancer with 100% Job Success rate. Completed 20+ Odoo projects with 5-star ratings. Delivered projects 15% faster than industry average.",
    achievements: [
      "20+ Odoo projects with 5-star ratings",
      "100% client satisfaction rate",
      "Projects delivered 15% faster than industry average",
    ],
    tags: ["Odoo 15/16/17", "Python", "OWL Framework", "XML-RPC", "PostgreSQL"],
    current: true,
  },
  {
    company: "Self-employed",
    position: "Odoo Implementor",
    period: "Mar 2023 - Apr 2025",
    location: "Pakistan (Remote)",
    type: "Freelance",
    desc: "Led Odoo Implementations and provided guidance for management systems development. Handled all versions and updates. Developed Complete Workshop module.",
    achievements: [
      "Led Odoo Implementations across all versions",
      "Developed Complete Workshop module for car repair management",
      "Optimized processes and enhanced system efficiency",
    ],
    tags: ["Odoo", "Python", "ERP Implementation", "Process Optimization", "Workshop Management"],
    current: false,
  },
  {
    company: "Self-employed",
    position: "Instructor & WP Developer",
    period: "Jun 2022 - Mar 2023",
    location: "Pakistan (Remote)",
    type: "Freelance",
    desc: "Led development and implementation of innovative solutions. Achieved significant revenue increase through strategic planning. WordPress development portfolio.",
    achievements: [
      "Achieved significant revenue increase through strategic planning",
      "Created comprehensive WordPress development portfolio",
    ],
    tags: ["WordPress", "PHP", "Software Construction", "Start-up Leadership"],
    current: false,
  },
  {
    company: "Self-employed",
    position: "Founder",
    period: "Feb 2022 - Jun 2022",
    location: "Lahore, Pakistan",
    type: "Startup",
    desc: "Founded a startup and organized multiple events fostering collaboration. Achieved 30% increase in community participation.",
    achievements: [
      "Founded startup with innovative outreach strategies",
      "30% increase in community participation",
    ],
    tags: ["Startup Leadership", "Event Management", "Community Building", "Business Development"],
    current: false,
  },
];

const education = [
  {
    institution: "Quantic School of Business and Technology",
    degree: "Master of Science in Software Engineering (MSSE)",
    period: "Sep 2024 - Present",
    location: "Washington D.C., USA",
    achievements: [
      "Currently pursuing MSSE degree",
      "Focus on advanced software engineering practices",
      "Business and technology integration",
      "Global perspective on software development",
    ],
    courses: ["Advanced Software Architecture", "Business Technology Strategy", "Leadership in Technology"],
    current: true,
  },
  {
    institution: "Punjab University College of Information Technology (PUCIT)",
    degree: "Bachelor of Science in Software Engineering",
    period: "Sep 2019 - Jun 2023",
    location: "Lahore, Pakistan",
    achievements: [
      "Final Year Project: ICE AGE - Automated Deep Learning for Glacier Monitoring",
      "Active member of programming societies",
      "Participated in multiple hackathons",
      "Teaching Assistant for multiple courses",
    ],
    courses: ["Data Structures", "Database Systems", "Machine Learning", "Web Development", "Mobile App Development"],
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab<"experience" | "education">("experience");

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 5);

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Career</p>
          <h2 className="section-heading">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-3 mb-14">
          {(["experience", "education"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 capitalize ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.25)]"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === "experience" ? <Briefcase className="inline mr-2" size={14} /> : <GraduationCap className="inline mr-2" size={14} />}
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "experience" ? (
          <>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, hsl(var(--primary)/0.5), hsl(var(--border)), hsl(var(--accent)/0.5))" }} />

              {visibleExperiences.map((exp, i) => (
                <motion.div
                  key={exp.company + exp.position}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-16 pb-10 last:pb-0"
                >
                  <div className={`absolute left-4 top-1 w-5 h-5 rounded-full border-2 ${
                    exp.current ? "border-primary bg-primary/20" : "border-border bg-card"
                  }`}>
                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />}
                  </div>

                  <motion.div whileHover={{ x: 8 }} className="glass-card-premium p-7 transition-all duration-500">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h4 className="text-xl font-display font-bold text-foreground">{exp.position}</h4>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-bold">Current</span>
                      )}
                      <span className="px-2.5 py-0.5 text-[10px] rounded-full bg-accent/10 text-accent border border-accent/20 font-bold">{exp.type}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Briefcase size={13} /> {exp.company}</span>
                      <span className="flex items-center gap-1.5"><Calendar size={13} /> {exp.period}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={13} /> {exp.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.desc}</p>
                    <ul className="text-xs text-muted-foreground mb-4 space-y-1.5">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5 font-bold">▸</span> {a}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="skill-badge text-[10px]">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {experiences.length > 5 && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border text-sm font-bold text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] transition-all duration-500"
                >
                  {showAll ? "Show Less" : `Show All ${experiences.length} Roles`}
                  {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="glass-card-premium p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <GraduationCap size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-display font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                  {edu.current && (
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-bold">Current</span>
                  )}
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar size={13} /> {edu.period}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={13} /> {edu.location}</span>
                </div>
                <ul className="text-sm text-muted-foreground mb-4 space-y-2">
                  {edu.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5 font-bold">▸</span> {a}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((c) => (
                    <span key={c} className="skill-badge text-[10px]">{c}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;

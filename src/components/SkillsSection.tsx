import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = ["All", "Programming", "Frameworks", "Databases", "Blockchain", "Cloud", "Tools", "Design"];

const skills = [
  { name: "Python", level: 95, years: "5.5y", category: "Programming", emoji: "🐍" },
  { name: "JavaScript", level: 95, years: "5.5y", category: "Programming", emoji: "🟨" },
  { name: "TypeScript", level: 90, years: "4y", category: "Programming", emoji: "🔷" },
  { name: "Java", level: 80, years: "3y", category: "Programming", emoji: "☕" },
  { name: "PHP", level: 85, years: "4y", category: "Programming", emoji: "🐘" },
  { name: "C++", level: 75, years: "3y", category: "Programming", emoji: "⚡" },
  { name: "C#", level: 70, years: "2y", category: "Programming", emoji: "💎" },
  { name: "XML", level: 95, years: "5.5y", category: "Programming", emoji: "📄" },
  { name: "React / Next.js", level: 95, years: "4y", category: "Frameworks", emoji: "⚛️" },
  { name: "Node.js", level: 92, years: "4y", category: "Frameworks", emoji: "🟢" },
  { name: "Express.js", level: 90, years: "4y", category: "Frameworks", emoji: "🚀" },
  { name: "Django", level: 80, years: "3y", category: "Frameworks", emoji: "🎯" },
  { name: "Odoo (15-19)", level: 98, years: "5.5y", category: "Frameworks", emoji: "🔧" },
  { name: "OWL Framework", level: 95, years: "4y", category: "Frameworks", emoji: "🦉" },
  { name: "Flutter", level: 80, years: "3y", category: "Frameworks", emoji: "📱" },
  { name: "React Native", level: 82, years: "3y", category: "Frameworks", emoji: "📲" },
  { name: "MongoDB", level: 90, years: "4y", category: "Databases", emoji: "🍃" },
  { name: "PostgreSQL", level: 92, years: "5y", category: "Databases", emoji: "🐘" },
  { name: "MySQL", level: 85, years: "4y", category: "Databases", emoji: "🐬" },
  { name: "Redis", level: 78, years: "2y", category: "Databases", emoji: "🔴" },
  { name: "Solidity", level: 82, years: "3y", category: "Blockchain", emoji: "💠" },
  { name: "Web3.js / Ethers.js", level: 85, years: "3y", category: "Blockchain", emoji: "🔗" },
  { name: "Smart Contracts", level: 85, years: "3y", category: "Blockchain", emoji: "📜" },
  { name: "DeFi Protocols", level: 78, years: "2y", category: "Blockchain", emoji: "🏦" },
  { name: "AWS", level: 85, years: "3y", category: "Cloud", emoji: "☁️" },
  { name: "Docker", level: 88, years: "3y", category: "Cloud", emoji: "🐳" },
  { name: "Kubernetes", level: 75, years: "2y", category: "Cloud", emoji: "⚙️" },
  { name: "GCP", level: 80, years: "3y", category: "Cloud", emoji: "🌐" },
  { name: "Git", level: 95, years: "5.5y", category: "Tools", emoji: "📝" },
  { name: "Shopify", level: 90, years: "4y", category: "Tools", emoji: "🛍️" },
  { name: "WordPress", level: 90, years: "4y", category: "Tools", emoji: "📝" },
  { name: "Figma", level: 80, years: "3y", category: "Design", emoji: "🎨" },
  { name: "Tailwind CSS", level: 92, years: "3y", category: "Design", emoji: "💨" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Skills</p>
          <h2 className="section-heading">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.03 }}
              layout
              className="glass-card-hover p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{skill.emoji}</span>
                  <h4 className="font-semibold text-sm text-foreground">{skill.name}</h4>
                </div>
                <span className="text-xs text-muted-foreground font-mono">{skill.years}</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: i * 0.03 + 0.3, duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))`,
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-right">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

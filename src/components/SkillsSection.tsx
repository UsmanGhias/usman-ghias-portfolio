import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = ["All", "Programming", "Frameworks", "Databases", "Blockchain", "Cloud", "Tools", "AI/ML", "Design", "Soft Skills"];

const skills = [
  // Programming Languages
  { name: "Python", level: 95, category: "Programming", emoji: "🐍" },
  { name: "JavaScript", level: 95, category: "Programming", emoji: "🟨" },
  { name: "TypeScript", level: 90, category: "Programming", emoji: "🔷" },
  { name: "Java", level: 80, category: "Programming", emoji: "☕" },
  { name: "PHP", level: 85, category: "Programming", emoji: "🐘" },
  { name: "XML", level: 95, category: "Programming", emoji: "📄" },
  { name: "JSON", level: 95, category: "Programming", emoji: "📋" },

  // Frameworks
  { name: "React / Next.js", level: 95, category: "Frameworks", emoji: "⚛️" },
  { name: "Node.js", level: 92, category: "Frameworks", emoji: "🟢" },
  { name: "Express.js", level: 90, category: "Frameworks", emoji: "🚀" },
  { name: "Django", level: 80, category: "Frameworks", emoji: "🎯" },
  { name: "Odoo (15-19)", level: 98, category: "Frameworks", emoji: "🔧" },
  { name: "OWL Framework", level: 95, category: "Frameworks", emoji: "🦉" },
  { name: "Flutter", level: 80, category: "Frameworks", emoji: "📱" },
  { name: "React Native", level: 82, category: "Frameworks", emoji: "📲" },
  { name: "TensorFlow", level: 85, category: "Frameworks", emoji: "🔥" },
  { name: "PyTorch", level: 85, category: "Frameworks", emoji: "🔥" },

  // Databases
  { name: "MongoDB", level: 90, category: "Databases", emoji: "🍃" },
  { name: "PostgreSQL", level: 92, category: "Databases", emoji: "🐘" },
  { name: "MySQL", level: 85, category: "Databases", emoji: "🐬" },
  { name: "Redis", level: 78, category: "Databases", emoji: "🔴" },

  // Blockchain
  { name: "Solidity", level: 82, category: "Blockchain", emoji: "💠" },
  { name: "Web3.js / Ethers.js", level: 85, category: "Blockchain", emoji: "🔗" },
  { name: "Smart Contracts", level: 85, category: "Blockchain", emoji: "📜" },
  { name: "DeFi Protocols", level: 78, category: "Blockchain", emoji: "🏦" },
  { name: "Ethereum", level: 85, category: "Blockchain", emoji: "💎" },
  { name: "NFT Development", level: 78, category: "Blockchain", emoji: "🖼️" },
  { name: "Token Development", level: 82, category: "Blockchain", emoji: "🪙" },
  { name: "Polygon", level: 75, category: "Blockchain", emoji: "🔷" },
  { name: "Hardhat", level: 78, category: "Blockchain", emoji: "⛑️" },
  { name: "MetaMask Integration", level: 85, category: "Blockchain", emoji: "🦊" },
  { name: "IPFS", level: 75, category: "Blockchain", emoji: "📂" },
  { name: "Crypto Trading Bots", level: 78, category: "Blockchain", emoji: "🤖" },

  // Cloud
  { name: "AWS", level: 85, category: "Cloud", emoji: "☁️" },
  { name: "Docker", level: 88, category: "Cloud", emoji: "🐳" },
  { name: "Kubernetes", level: 75, category: "Cloud", emoji: "⚙️" },
  { name: "GCP", level: 80, category: "Cloud", emoji: "🌐" },
  { name: "DevOps", level: 85, category: "Cloud", emoji: "🔄" },

  // Tools
  { name: "Git", level: 95, category: "Tools", emoji: "📝" },
  { name: "Shopify", level: 90, category: "Tools", emoji: "🛍️" },
  { name: "WordPress", level: 90, category: "Tools", emoji: "📝" },
  { name: "API Integration", level: 95, category: "Tools", emoji: "🔗" },
  { name: "XML-RPC", level: 95, category: "Tools", emoji: "🔌" },
  { name: "REST API", level: 95, category: "Tools", emoji: "🌐" },
  { name: "GraphQL", level: 82, category: "Tools", emoji: "🔷" },

  // AI/ML
  { name: "Machine Learning", level: 85, category: "AI/ML", emoji: "🤖" },
  { name: "Deep Learning", level: 82, category: "AI/ML", emoji: "🧠" },
  { name: "OpenAI", level: 85, category: "AI/ML", emoji: "🤖" },
  { name: "Pandas", level: 90, category: "AI/ML", emoji: "🐼" },
  { name: "Scikit-learn", level: 82, category: "AI/ML", emoji: "🧪" },
  { name: "AI Engineering", level: 85, category: "AI/ML", emoji: "🤖" },

  // Design
  { name: "Figma", level: 80, category: "Design", emoji: "🎨" },
  { name: "Tailwind CSS", level: 92, category: "Design", emoji: "💨" },
  { name: "HTML5 / CSS3", level: 95, category: "Design", emoji: "🌐" },
  { name: "Blender", level: 75, category: "Design", emoji: "🎨" },
  { name: "3D Modeling", level: 75, category: "Design", emoji: "📐" },
  { name: "3D Animation", level: 65, category: "Design", emoji: "🎬" },
  { name: "Unity 3D", level: 65, category: "Design", emoji: "🎮" },

  // Soft Skills
  { name: "Business Analysis", level: 90, category: "Soft Skills", emoji: "📊" },
  { name: "Project Management", level: 90, category: "Soft Skills", emoji: "📋" },
  { name: "Client Relations", level: 92, category: "Soft Skills", emoji: "🤝" },
  { name: "Technical Consulting", level: 90, category: "Soft Skills", emoji: "💼" },
  { name: "Leadership", level: 88, category: "Soft Skills", emoji: "👑" },
  { name: "Communication", level: 92, category: "Soft Skills", emoji: "💬" },
  { name: "Problem Solving", level: 95, category: "Soft Skills", emoji: "🧩" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = skills.filter((s) => {
    const matchesCategory = activeCategory === "All" || s.category === activeCategory;
    const matchesSearch = searchQuery === "" || s.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Skills</p>
          <h2 className="section-heading">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-3">{skills.length}+ skills across {categories.length - 1} categories</p>
        </motion.div>

        {/* Search */}
        <div className="max-w-sm mx-auto mb-6">
          <input
            type="text"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 rounded-full bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>

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
              transition={{ delay: Math.min(i * 0.02, 0.5) }}
              layout
              className="glass-card-hover p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{skill.emoji}</span>
                  <h4 className="font-semibold text-sm text-foreground">{skill.name}</h4>
                </div>
                <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: Math.min(i * 0.02, 0.5) + 0.3, duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No skills found matching your search.</p>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;

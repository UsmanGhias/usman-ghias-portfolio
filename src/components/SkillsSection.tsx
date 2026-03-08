import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search } from "lucide-react";

const categories = ["All", "Programming", "Frameworks", "Databases", "Blockchain", "Cloud", "Tools", "AI/ML", "Design", "Soft Skills"];

const skills = [
  { name: "Python", level: 95, category: "Programming", emoji: "🐍" },
  { name: "JavaScript", level: 95, category: "Programming", emoji: "🟨" },
  { name: "TypeScript", level: 90, category: "Programming", emoji: "🔷" },
  { name: "Java", level: 80, category: "Programming", emoji: "☕" },
  { name: "PHP", level: 85, category: "Programming", emoji: "🐘" },
  { name: "XML", level: 95, category: "Programming", emoji: "📄" },
  { name: "JSON", level: 95, category: "Programming", emoji: "📋" },
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
  { name: "MongoDB", level: 90, category: "Databases", emoji: "🍃" },
  { name: "PostgreSQL", level: 92, category: "Databases", emoji: "🐘" },
  { name: "MySQL", level: 85, category: "Databases", emoji: "🐬" },
  { name: "Redis", level: 78, category: "Databases", emoji: "🔴" },
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
  { name: "AWS", level: 85, category: "Cloud", emoji: "☁️" },
  { name: "Docker", level: 88, category: "Cloud", emoji: "🐳" },
  { name: "Kubernetes", level: 75, category: "Cloud", emoji: "⚙️" },
  { name: "GCP", level: 80, category: "Cloud", emoji: "🌐" },
  { name: "DevOps", level: 85, category: "Cloud", emoji: "🔄" },
  { name: "Git", level: 95, category: "Tools", emoji: "📝" },
  { name: "Shopify", level: 90, category: "Tools", emoji: "🛍️" },
  { name: "WordPress", level: 90, category: "Tools", emoji: "📝" },
  { name: "API Integration", level: 95, category: "Tools", emoji: "🔗" },
  { name: "XML-RPC", level: 95, category: "Tools", emoji: "🔌" },
  { name: "REST API", level: 95, category: "Tools", emoji: "🌐" },
  { name: "GraphQL", level: 82, category: "Tools", emoji: "🔷" },
  { name: "Machine Learning", level: 85, category: "AI/ML", emoji: "🤖" },
  { name: "Deep Learning", level: 82, category: "AI/ML", emoji: "🧠" },
  { name: "OpenAI", level: 85, category: "AI/ML", emoji: "🤖" },
  { name: "Pandas", level: 90, category: "AI/ML", emoji: "🐼" },
  { name: "Scikit-learn", level: 82, category: "AI/ML", emoji: "🧪" },
  { name: "AI Engineering", level: 85, category: "AI/ML", emoji: "🤖" },
  { name: "Figma", level: 80, category: "Design", emoji: "🎨" },
  { name: "Tailwind CSS", level: 92, category: "Design", emoji: "💨" },
  { name: "HTML5 / CSS3", level: 95, category: "Design", emoji: "🌐" },
  { name: "Blender", level: 75, category: "Design", emoji: "🎨" },
  { name: "3D Modeling", level: 75, category: "Design", emoji: "📐" },
  { name: "3D Animation", level: 65, category: "Design", emoji: "🎬" },
  { name: "Unity 3D", level: 65, category: "Design", emoji: "🎮" },
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
    <section id="skills" className="py-28 relative aurora-bg" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
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
          <div className="section-divider" />
          <p className="text-muted-foreground text-sm mt-3">{skills.length}+ skills across {categories.length - 1} categories</p>
        </motion.div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-secondary/80 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_hsl(var(--primary)/0.1)] transition-all duration-300"
            />
          </div>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.25)]"
                  : "bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary"
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
              whileHover={{ scale: 1.04, y: -4 }}
              className="glass-card-premium p-5 cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{skill.emoji}</span>
                  <h4 className="font-bold text-sm text-foreground">{skill.name}</h4>
                </div>
                <span className="text-xs text-primary font-mono font-bold">{skill.level}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: Math.min(i * 0.02, 0.5) + 0.3, duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full relative overflow-hidden"
                  style={{ background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))` }}
                >
                  <div className="absolute inset-0 shimmer" />
                </motion.div>
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
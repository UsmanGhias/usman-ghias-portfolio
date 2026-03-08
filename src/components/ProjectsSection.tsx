import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projectCategories = ["All", "Odoo", "Web Apps", "E-commerce", "Blockchain", "Mobile", "AI/ML"];

const projects = [
  {
    title: "Enterprise Odoo ERP Suite",
    desc: "Complete ERP implementation with custom modules for inventory, HR, accounting, and CRM for a multinational company.",
    category: "Odoo",
    tags: ["Odoo 17", "Python", "PostgreSQL", "OWL", "REST API"],
    featured: true,
  },
  {
    title: "DeFi Yield Aggregator",
    desc: "Decentralized finance platform with automated yield farming strategies, liquidity pooling, and staking mechanisms.",
    category: "Blockchain",
    tags: ["Solidity", "React", "Web3.js", "Hardhat", "Chainlink"],
    featured: true,
  },
  {
    title: "AI-Powered Analytics Dashboard",
    desc: "Real-time analytics platform with ML-based predictions, natural language queries, and automated reporting.",
    category: "AI/ML",
    tags: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Shopify Multi-Store Platform",
    desc: "Custom Shopify themes and apps for multi-brand e-commerce with unified inventory management.",
    category: "E-commerce",
    tags: ["Shopify", "Liquid", "Node.js", "GraphQL"],
    featured: false,
  },
  {
    title: "Cross-Platform Health App",
    desc: "Flutter-based health tracking app with real-time monitoring, Firebase sync, and doctor consultation booking.",
    category: "Mobile",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    featured: false,
  },
  {
    title: "NFT Marketplace",
    desc: "Full-featured NFT marketplace with minting, auctions, royalties, and wallet integration.",
    category: "Blockchain",
    tags: ["Next.js", "Solidity", "IPFS", "Ethers.js"],
    featured: false,
  },
  {
    title: "SaaS Project Management Tool",
    desc: "Full-stack project management application with real-time collaboration, Kanban boards, and analytics.",
    category: "Web Apps",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "TypeScript"],
    featured: true,
  },
  {
    title: "Odoo Shopify Connector",
    desc: "Bi-directional sync module between Odoo and Shopify for orders, inventory, and customer data.",
    category: "Odoo",
    tags: ["Odoo 16", "Python", "Shopify API", "Webhooks"],
    featured: false,
  },
  {
    title: "Crypto Trading Bot Platform",
    desc: "Automated cryptocurrency trading system with strategy builder, backtesting, and real-time execution.",
    category: "Blockchain",
    tags: ["Python", "Binance API", "TensorFlow", "Redis"],
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Portfolio</p>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            A selection of 175+ successfully delivered projects
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              layout
              className="glass-card-hover p-6 flex flex-col"
            >
              {project.featured && (
                <span className="self-start px-2 py-0.5 text-[10px] rounded-full bg-accent/10 text-accent border border-accent/20 mb-3 font-semibold">
                  ⭐ Featured
                </span>
              )}
              <h4 className="text-lg font-display font-bold text-foreground mb-2">{project.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-badge text-[10px]">{tag}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <ExternalLink size={12} /> Live Demo
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Github size={12} /> Source Code
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

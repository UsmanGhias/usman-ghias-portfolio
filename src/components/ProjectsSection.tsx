import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Search } from "lucide-react";

const projectCategories = ["All", "Odoo", "Web Apps", "E-commerce", "Blockchain", "Mobile", "AI/ML", "WordPress", "Data Science", "3D Design"];

const projects = [
  {
    title: "Hospital Management System - CODCrafters",
    desc: "Comprehensive hospital management system with 50+ custom modules including patient management, appointment scheduling, billing, pharmacy, laboratory, and inventory management.",
    category: "Odoo",
    tags: ["Odoo 16", "Python", "PostgreSQL", "OWL", "REST API", "QWeb"],
    featured: true,
    status: "completed",
    client: "Multiple Healthcare Providers",
  },
  {
    title: "Car Repair Workshop Management",
    desc: "Intelligent and fully integrated Car Repair Workshop Management System developed on Odoo, tailored for automotive repair shops and garages.",
    category: "Odoo",
    tags: ["Odoo", "Python", "PostgreSQL", "JavaScript", "XML"],
    featured: true,
    status: "completed",
    client: "Automotive Repair Shops",
  },
  {
    title: "Hotel Management System",
    desc: "Complete Odoo-based Hotel Management System for reservations, guest services, housekeeping, billing, and reporting.",
    category: "Odoo",
    tags: ["Odoo", "Python", "PostgreSQL", "JavaScript", "QWeb"],
    featured: true,
    status: "completed",
    client: "Hospitality Industry",
  },
  {
    title: "DeFi Yield Aggregator",
    desc: "Decentralized finance platform with automated yield farming strategies, liquidity pooling, and staking mechanisms.",
    category: "Blockchain",
    tags: ["Solidity", "React", "Web3.js", "Hardhat", "Chainlink"],
    featured: true,
    status: "completed",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    desc: "Real-time analytics platform with ML-based predictions, natural language queries, and automated reporting.",
    category: "AI/ML",
    tags: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    featured: true,
    status: "completed",
  },
  {
    title: "Shopify Multi-Store Platform",
    desc: "Custom Shopify themes and apps for multi-brand e-commerce with unified inventory management.",
    category: "E-commerce",
    tags: ["Shopify", "Liquid", "Node.js", "GraphQL"],
    featured: false,
    status: "completed",
  },
  {
    title: "Cross-Platform Health App",
    desc: "Flutter-based health tracking app with real-time monitoring, Firebase sync, and doctor consultation booking.",
    category: "Mobile",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    featured: false,
    status: "completed",
  },
  {
    title: "NFT Marketplace",
    desc: "Full-featured NFT marketplace with minting, auctions, royalties, and wallet integration.",
    category: "Blockchain",
    tags: ["Next.js", "Solidity", "IPFS", "Ethers.js"],
    featured: false,
    status: "completed",
  },
  {
    title: "SaaS Project Management Tool",
    desc: "Full-stack project management application with real-time collaboration, Kanban boards, and analytics.",
    category: "Web Apps",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "TypeScript"],
    featured: true,
    status: "completed",
  },
  {
    title: "Odoo Shopify Connector",
    desc: "Bi-directional sync module between Odoo and Shopify for orders, inventory, and customer data.",
    category: "Odoo",
    tags: ["Odoo 16", "Python", "Shopify API", "Webhooks"],
    featured: false,
    status: "completed",
  },
  {
    title: "Crypto Trading Bot Platform",
    desc: "Automated cryptocurrency trading system with strategy builder, backtesting, and real-time execution.",
    category: "Blockchain",
    tags: ["Python", "Binance API", "TensorFlow", "Redis"],
    featured: false,
    status: "completed",
  },
  {
    title: "WordPress Portfolio Sites",
    desc: "Custom WordPress themes, plugins, and e-commerce solutions for multiple clients across various industries.",
    category: "WordPress",
    tags: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS"],
    featured: false,
    status: "completed",
  },
  {
    title: "ICE AGE - Glacier Monitoring",
    desc: "Final year project: Automated Deep Learning Framework for Glacier Monitoring using satellite imagery.",
    category: "AI/ML",
    tags: ["Python", "Deep Learning", "TensorFlow", "Computer Vision"],
    featured: false,
    status: "completed",
  },
  {
    title: "Enterprise Odoo ERP Suite",
    desc: "Complete ERP implementation with custom modules for inventory, HR, accounting, and CRM for a multinational company.",
    category: "Odoo",
    tags: ["Odoo 17", "Python", "PostgreSQL", "OWL", "REST API"],
    featured: true,
    status: "completed",
  },
  {
    title: "3D Product Visualization",
    desc: "Interactive 3D product models and animations using Blender and Unity for e-commerce clients.",
    category: "3D Design",
    tags: ["Blender", "Unity 3D", "3D Modeling", "Animation"],
    featured: false,
    status: "completed",
  },
  {
    title: "Data Science Dashboard",
    desc: "Advanced analytics dashboard with data visualization, predictive models, and automated reporting for business intelligence.",
    category: "Data Science",
    tags: ["Python", "Pandas", "Matplotlib", "Power BI"],
    featured: false,
    status: "completed",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = searchQuery === "" || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            A selection of 175+ successfully delivered projects across {projectCategories.length - 1} categories
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-sm mx-auto mb-6">
          <div className="relative">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>

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
              transition={{ delay: Math.min(i * 0.06, 0.5) }}
              layout
              className="glass-card-hover p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                {project.featured && (
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-accent/10 text-accent border border-accent/20 font-semibold">
                    ⭐ Featured
                  </span>
                )}
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary border border-primary/20">
                  {project.category}
                </span>
              </div>
              <h4 className="text-lg font-display font-bold text-foreground mb-2">{project.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.desc}</p>
              {project.client && (
                <p className="text-xs text-muted-foreground mb-3">
                  <span className="text-primary">Client:</span> {project.client}
                </p>
              )}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-badge text-[10px]">{tag}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto pt-3 border-t border-border/30">
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

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No projects found matching your search.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2, Server, Smartphone, ShoppingCart, Globe, Brain,
  Link2, Shield, Coins, Image, Bot, Layers, Database,
  Cloud, Plug, Palette, BarChart3, Calculator, FileText,
  Receipt, Building, TrendingUp, Users, Zap
} from "lucide-react";

const services = [
  {
    category: "Development Services",
    items: [
      { icon: Code2, title: "Full Stack Development", desc: "Complete web applications using MERN stack, Next.js, and modern frameworks with scalable architecture and responsive design.", tags: ["React", "Node.js", "MongoDB", "Next.js", "TypeScript"] },
      { icon: Server, title: "Odoo Development", desc: "Custom Odoo modules, ERP implementations, and business process automation. 91+ Odoo projects across all versions.", tags: ["Odoo 15-19", "Python", "PostgreSQL", "OWL", "XML-RPC", "JavaScript", "API"] },
      { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform mobile applications using Flutter and React Native with native performance and beautiful UI.", tags: ["Flutter", "React Native", "Dart", "JavaScript", "Python", "Kotlin", "Swift", "Firebase"] },
      { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Complete online stores with Shopify, WooCommerce, and custom solutions including payment integration.", tags: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Magento", "PrestaShop", "BigCommerce"] },
      { icon: Globe, title: "WordPress Development", desc: "Custom WordPress themes, plugins, and complete website solutions with SEO optimization.", tags: ["WordPress", "PHP", "MySQL", "JavaScript", "Hostinger", "Godaddy"] },
      { icon: Brain, title: "AI & Machine Learning", desc: "Intelligent applications with predictive analytics, automation, and data-driven insights.", tags: ["Python", "TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "OpenAI", "Hugging Face"] },
    ],
  },
  {
    category: "Blockchain & Crypto Services",
    items: [
      { icon: FileText, title: "Smart Contract Development", desc: "Custom smart contract development for DeFi, NFTs, and decentralized applications with security best practices.", tags: ["Solidity", "Web3.js", "Ethereum", "Polygon", "Hardhat"] },
      { icon: Calculator, title: "Blockchain Integration", desc: "Seamless integration of blockchain technology with existing systems, enabling decentralized features and crypto payments.", tags: ["Web3", "Ethers.js", "MetaMask", "WalletConnect", "REST API"] },
      { icon: Shield, title: "DeFi Development", desc: "Decentralized finance applications including DEX, lending protocols, yield farming, and staking platforms.", tags: ["Uniswap", "Compound", "Aave", "Chainlink", "DeFi Protocols"] },
      { icon: Receipt, title: "NFT & Tokenization", desc: "Complete NFT marketplace development, token creation (ERC-20, ERC-721, ERC-1155), and digital asset tokenization.", tags: ["IPFS", "OpenSea", "ERC Standards", "NFT Marketplaces"] },
      { icon: TrendingUp, title: "Crypto Trading Bots", desc: "Automated trading bots and algorithmic trading solutions for cryptocurrency markets with advanced analytics.", tags: ["Python", "Trading APIs", "Technical Analysis", "Bot Development"] },
      { icon: Building, title: "Web3 Application Development", desc: "Full-stack Web3 application development with modern frameworks, wallet integration, and decentralized storage.", tags: ["React", "Next.js", "Web3.js", "IPFS", "The Graph", "Moralis", "Alchemy", "Thirdweb"] },
    ],
  },
  {
    category: "Technical Services",
    items: [
      { icon: BarChart3, title: "Data Science & Analytics", desc: "Transform your data into actionable insights with advanced analytics, visualization, and reporting solutions.", tags: ["Python", "Pandas", "Matplotlib", "Power BI"] },
      { icon: Cloud, title: "DevOps & Cloud Solutions", desc: "Complete DevOps implementation with AWS, Docker, CI/CD pipelines, and automated deployment strategies.", tags: ["AWS", "Docker", "Jenkins", "Kubernetes"] },
      { icon: Plug, title: "API Development & Integration", desc: "RESTful APIs, third-party integrations, and microservices architecture for scalable applications.", tags: ["REST API", "GraphQL", "Microservices", "Fast API"] },
      { icon: Palette, title: "UI/UX Design & Development", desc: "Modern, responsive designs with excellent user experience using Figma, Tailwind CSS, and design systems.", tags: ["Figma", "Tailwind CSS", "Design Systems", "Responsive"] },
    ],
  },
];

const stats = [
  { icon: Users, value: "65+", label: "Happy Clients" },
  { icon: Zap, value: "175+", label: "Projects Delivered" },
  { icon: Globe, value: "20+", label: "Countries Served" },
  { icon: TrendingUp, value: "5/5", label: "Client Satisfaction" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Services</p>
          <h2 className="section-heading">
            Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Comprehensive development and blockchain services to help your business grow
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-5 text-center">
              <stat.icon className="w-7 h-7 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text font-display">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {services.map((category, ci) => (
          <div key={category.category} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: ci * 0.15 }}
              className="text-xl font-display font-bold mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              {category.category}
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.items.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: ci * 0.15 + i * 0.06 }}
                  className="glass-card-hover p-6 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon size={20} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-display font-semibold mb-2 text-foreground">{service.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="skill-badge text-[10px]">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center glass-card p-8" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05))" }}>
          <h3 className="text-xl font-display font-bold mb-3">Ready to Get Started?</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Get Free Consultation <Users size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

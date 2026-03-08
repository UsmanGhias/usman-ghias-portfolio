import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2, Server, Smartphone, ShoppingCart, Globe, Brain,
  Link2, Shield, Coins, Image, Bot, Layers, Database,
  Cloud, Plug, Palette
} from "lucide-react";

const services = [
  {
    category: "Development Services",
    items: [
      { icon: Code2, title: "Full Stack Development", desc: "MERN stack, Next.js, and modern frameworks with scalable architecture.", tags: ["React", "Node.js", "MongoDB", "Next.js", "TypeScript"] },
      { icon: Server, title: "Odoo Development", desc: "Custom modules, ERP implementations, and business process automation. 91+ Odoo projects.", tags: ["Odoo 15-19", "Python", "PostgreSQL", "OWL", "XML-RPC"] },
      { icon: Smartphone, title: "Mobile Development", desc: "Cross-platform apps with Flutter and React Native with native performance.", tags: ["Flutter", "React Native", "Dart", "Firebase"] },
      { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Complete online stores with Shopify, WooCommerce, and custom solutions.", tags: ["Shopify", "WooCommerce", "Stripe", "Magento"] },
      { icon: Globe, title: "WordPress Development", desc: "Custom themes, plugins, and complete website solutions with SEO optimization.", tags: ["WordPress", "PHP", "MySQL", "SEO"] },
      { icon: Brain, title: "AI & Machine Learning", desc: "Intelligent applications with predictive analytics and data-driven insights.", tags: ["Python", "TensorFlow", "PyTorch", "OpenAI"] },
    ],
  },
  {
    category: "Blockchain & Crypto",
    items: [
      { icon: Shield, title: "Smart Contracts", desc: "Custom smart contracts for DeFi, NFTs, and decentralized applications.", tags: ["Solidity", "Web3.js", "Ethereum", "Hardhat"] },
      { icon: Link2, title: "Blockchain Integration", desc: "Seamless blockchain integration with existing systems and crypto payments.", tags: ["Web3", "Ethers.js", "MetaMask", "REST API"] },
      { icon: Coins, title: "DeFi Development", desc: "Decentralized finance applications including DEX, lending, and staking.", tags: ["Uniswap", "Compound", "Aave", "Chainlink"] },
      { icon: Image, title: "NFT & Tokenization", desc: "NFT marketplaces, token creation (ERC-20, ERC-721, ERC-1155).", tags: ["IPFS", "OpenSea", "ERC Standards"] },
      { icon: Bot, title: "Crypto Trading Bots", desc: "Automated trading solutions for cryptocurrency markets.", tags: ["Python", "Trading APIs", "Technical Analysis"] },
      { icon: Layers, title: "Web3 Applications", desc: "Full-stack Web3 apps with wallet integration and decentralized storage.", tags: ["React", "Next.js", "Alchemy", "Thirdweb"] },
    ],
  },
  {
    category: "Technical Services",
    items: [
      { icon: Database, title: "Data Science & Analytics", desc: "Advanced analytics, visualization, and reporting solutions.", tags: ["Python", "Pandas", "Power BI"] },
      { icon: Cloud, title: "DevOps & Cloud", desc: "AWS, Docker, CI/CD pipelines, and automated deployment.", tags: ["AWS", "Docker", "Kubernetes", "Jenkins"] },
      { icon: Plug, title: "API Development", desc: "RESTful APIs, GraphQL, and microservices architecture.", tags: ["REST", "GraphQL", "Fast API", "Microservices"] },
      { icon: Palette, title: "UI/UX Design", desc: "Modern responsive designs using Figma and design systems.", tags: ["Figma", "Tailwind CSS", "Design Systems"] },
    ],
  },
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

        {services.map((category, ci) => (
          <div key={category.category} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: ci * 0.2 }}
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
                  transition={{ delay: ci * 0.2 + i * 0.08 }}
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
      </div>
    </section>
  );
};

export default ServicesSection;

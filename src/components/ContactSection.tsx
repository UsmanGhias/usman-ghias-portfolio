import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Facebook, Instagram, Youtube, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/UsmanGhias", username: "@UsmanGhias" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/m-usmanghias", username: "14K+ Connections" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/musmanghias/", username: "@musmanghias" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/usmanghias467/", username: "@usmanghias467" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@codcrafters", username: "@codcrafters" },
    { icon: ExternalLink, label: "Upwork", href: "https://www.upwork.com/freelancers/usmanghias", username: "Top Rated" },
  ];

  return (
    <section id="contact" className="py-28 relative aurora-bg" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Contact</p>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subheading mx-auto mt-4">
            Ready to start your next project? Get in touch and let's make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {[
              { icon: Mail, label: "Email", value: "iusmanghias@gmail.com", href: "mailto:iusmanghias@gmail.com" },
              { icon: Phone, label: "Phone", value: "+92 312 691 2440", href: "tel:+923126912440" },
              { icon: MapPin, label: "Location", value: "Samundri, Punjab, Pakistan", href: "#" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 8 }}
                className="glass-card-premium p-6 flex items-center gap-5 block group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)] transition-all duration-500">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">{item.label}</p>
                  <p className="font-bold text-foreground text-lg">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card-premium p-8 text-center"
            >
              <p className="text-muted-foreground mb-5 font-medium">Prefer WhatsApp?</p>
              <a
                href="https://wa.link/8soaqu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
                style={{ background: "#25D366", color: "#fff" }}
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </motion.div>

            {/* Quick Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass-card-premium p-6"
            >
              <h4 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Send size={16} className="text-primary" /> Quick Project Inquiry
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Full Stack Web App", "Mobile App", "Odoo ERP", "AI/ML Solution", "Blockchain", "Technical Consulting"].map((type) => (
                  <a
                    key={type}
                    href={`https://wa.link/8soaqu`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-badge text-[11px] cursor-pointer"
                  >
                    {type}
                  </a>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground">
                Budget ranges: Under $1K • $1K-$3K • $3K-$8K • $8K-$15K • $15K-$25K • $25K+
              </p>
            </motion.div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6">Find Me Online</h3>
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.06 }}
                whileHover={{ x: 8 }}
                className="glass-card-premium p-5 flex items-center justify-between group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <social.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{social.label}</p>
                    <p className="text-xs text-muted-foreground">{social.username}</p>
                  </div>
                </div>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}

            {/* CODCrafters */}
            <motion.a
              href="https://codcrafters.org"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card-premium p-8 flex items-center justify-between group block mt-6"
            >
              <div>
                <p className="font-display font-bold text-foreground text-xl">CODCrafters.org</p>
                <p className="text-sm text-muted-foreground mt-1">My tech startup & agency</p>
              </div>
              <ExternalLink size={20} className="text-primary" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
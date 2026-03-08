import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Youtube, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/UsmanGhias", username: "@UsmanGhias" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/m-usmanghias", username: "14K+ Connections" },
    { icon: Twitter, label: "X (Twitter)", href: "https://twitter.com/usmanghias467", username: "@usmanghias467" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@codcrafters", username: "@codcrafters" },
    { icon: ExternalLink, label: "Upwork", href: "https://www.upwork.com/freelancers/usmanghias", username: "Top Rated" },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Contact</p>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Ready to start your next project? Get in touch and let's make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
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
                className="glass-card-hover p-5 flex items-center gap-4 block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card p-6 text-center"
            >
              <p className="text-muted-foreground mb-4">Prefer WhatsApp?</p>
              <a
                href="https://wa.link/8soaqu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all"
                style={{ background: "#25D366", color: "#fff" }}
              >
                💬 Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-4">Find Me Online</h3>
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="glass-card-hover p-4 flex items-center justify-between group block"
              >
                <div className="flex items-center gap-3">
                  <social.icon size={18} className="text-primary" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{social.label}</p>
                    <p className="text-xs text-muted-foreground">{social.username}</p>
                  </div>
                </div>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}

            {/* Visit site */}
            <motion.a
              href="https://codcrafters.org"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card p-6 flex items-center justify-between group block mt-6"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))",
                borderColor: "hsl(var(--primary) / 0.2)",
              }}
            >
              <div>
                <p className="font-display font-bold text-foreground">CODCrafters.org</p>
                <p className="text-sm text-muted-foreground">My tech startup & agency</p>
              </div>
              <ExternalLink size={18} className="text-primary" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

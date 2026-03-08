import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, MapPin, CheckCircle, Shield, Award, Users, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marlo Renchor",
    position: "Business Owner",
    company: "USA 🇺🇸",
    location: "United States",
    content: "Working with Usman and the CODCrafters team was seamless from start to finish. Their Odoo expertise transformed our operations, and the custom modules they built were exactly what we needed. Professional, reliable, and highly skilled. Highly recommended!",
    rating: 5,
    verified: "Business Verified",
    projectDuration: "6 months",
    metrics: { projectSuccess: "100%", satisfaction: "5/5" },
  },
  {
    id: 2,
    name: "Philipp Liedl",
    position: "Team Lead",
    company: "Austria 🇦🇹",
    location: "Austria",
    content: "Ausgezeichnete Arbeit! The custom Odoo implementation was exactly what we needed for our business. Usman's technical depth and attention to detail made all the difference. Professional, efficient, and truly impactful.",
    rating: 5,
    verified: "LinkedIn Verified",
    projectDuration: "5 months",
    metrics: { systemEfficiency: "Excellent", satisfaction: "5/5" },
  },
  {
    id: 3,
    name: "Yuval Yasur",
    position: "Operations Manager",
    company: "Mexico 🇲🇽",
    location: "Mexico",
    content: "Exceptional Odoo developer with deep technical knowledge and a results-driven approach. Usman delivered a robust ERP solution that streamlined our entire workflow. His expertise in Python, custom modules, and integrations is outstanding.",
    rating: 5,
    verified: "Business Verified",
    projectDuration: "7 months",
    metrics: { workflowImprovement: "Outstanding", satisfaction: "5/5" },
  },
  {
    id: 4,
    name: "Mejri Takwa",
    position: "SFC™",
    company: "Tunisia 🇹🇳",
    location: "Tunisia",
    content: "Excellent travail avec des profils expérimentés! Usman and his team are highly skilled professionals who truly understand Odoo and business automation. The solution they delivered has improved our efficiency significantly.",
    rating: 5,
    verified: "LinkedIn Verified",
    projectDuration: "6 months",
    metrics: { efficiencyGain: "Significant", satisfaction: "5/5" },
  },
  {
    id: 5,
    name: "Mohammad Eldeeb",
    position: "Business Owner",
    company: "Kuwait 🇰🇼",
    location: "Kuwait",
    content: "Usman has exceptional knowledge in Odoo, Accounting, HR, Sales, Inventory, and beyond. He delivered a comprehensive ERP solution that transformed our operations. I highly recommend him!",
    rating: 5,
    verified: "Business Verified",
    projectDuration: "8 months",
    metrics: { operationsTransformation: "Complete", satisfaction: "5/5" },
  },
  {
    id: 6,
    name: "Seanvino",
    position: "Digital Ventures",
    company: "Sweden 🇸🇪",
    location: "Sweden",
    content: "Working with CODCrafters was a smooth and efficient experience. Their team delivered a high-quality web application on time and within budget. Communication was excellent, and the final product exceeded our expectations.",
    rating: 5,
    verified: "Google Verified",
    projectDuration: "5 months",
    metrics: { onTimeDelivery: "100%", satisfaction: "5/5" },
  },
  {
    id: 7,
    name: "Erik Lindström",
    position: "CTO",
    company: "Nordic Tech Solutions - Sweden 🇸🇪",
    location: "Stockholm, Sweden",
    content: "Usman's technical excellence and deep understanding of modern software architecture are truly impressive. He delivered a complex MERN stack application that handles our real-time data processing needs flawlessly. The scalability and performance are outstanding.",
    rating: 5,
    verified: "Tech Enterprise Verified",
    projectDuration: "8 months",
    metrics: { performanceGain: "75%", satisfaction: "5/5" },
  },
  {
    id: 8,
    name: "Robert Martinez",
    position: "VP of Engineering",
    company: "American Software Solutions - USA 🇺🇸",
    location: "San Francisco, USA",
    content: "Working with Usman has been exceptional! His expertise in full-stack development, combined with his knowledge of AI and machine learning, made him the perfect fit. He built a sophisticated analytics platform that integrates seamlessly with our existing systems.",
    rating: 5,
    verified: "Enterprise Verified",
    projectDuration: "7 months",
    metrics: { dataAccuracy: "99.5%", satisfaction: "5/5" },
  },
];

const satisfactionMetrics = {
  overallSatisfaction: "5.0/5",
  projectSuccess: "98%",
  happyClients: "65+",
  onTimeDelivery: "95%",
};

const getVerificationIcon = (verified: string) => {
  if (verified.includes("Google")) return <CheckCircle className="w-3.5 h-3.5" style={{ color: "hsl(210 100% 60%)" }} />;
  if (verified.includes("LinkedIn")) return <Users className="w-3.5 h-3.5" style={{ color: "hsl(210 100% 60%)" }} />;
  if (verified.includes("Business")) return <Shield className="w-3.5 h-3.5" style={{ color: "hsl(142 76% 50%)" }} />;
  if (verified.includes("Enterprise")) return <Award className="w-3.5 h-3.5" style={{ color: "hsl(var(--accent))" }} />;
  return <CheckCircle className="w-3.5 h-3.5" style={{ color: "hsl(210 100% 60%)" }} />;
};

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="testimonials" className="py-28 relative aurora-bg" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Testimonials</p>
          <h2 className="section-heading">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xs text-muted-foreground mt-3 max-w-lg mx-auto">
            Names and details are anonymized to protect confidentiality while maintaining authentic feedback.
          </p>
        </motion.div>

        {/* Satisfaction stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-14">
          {Object.entries(satisfactionMetrics).map(([key, value], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-4 text-center cursor-default"
            >
              <p className="text-2xl font-bold gradient-text font-display">{value}</p>
              <p className="text-xs text-muted-foreground mt-1 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</p>
            </motion.div>
          ))}
        </div>

        {/* Slider */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-2">
                  <div className="glass-card p-8 md:p-10" style={{ borderTop: "2px solid hsl(var(--primary) / 0.3)" }}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold gradient-text" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-foreground">{t.name}</h4>
                          <p className="text-sm" style={{ color: "hsl(var(--primary))" }}>{t.position}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <MapPin size={10} /> {t.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/50 text-xs border border-border/30">
                        {getVerificationIcon(t.verified)}
                        <span className="text-muted-foreground">{t.verified}</span>
                      </div>
                    </div>

                    <div className="flex mb-4 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < t.rating ? "fill-current" : ""}`} style={{ color: i < t.rating ? "hsl(45 93% 50%)" : "hsl(var(--border))" }} />
                      ))}
                    </div>

                    <div className="relative mb-6">
                      <Quote size={28} className="absolute -top-2 -left-1" style={{ color: "hsl(var(--primary) / 0.15)" }} />
                      <blockquote className="text-muted-foreground leading-relaxed pl-8 italic text-base">
                        "{t.content}"
                      </blockquote>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <div className="flex gap-6">
                        {Object.entries(t.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <p className="text-sm font-bold" style={{ color: "hsl(var(--primary))" }}>{value}</p>
                            <p className="text-[10px] text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                          </div>
                        ))}
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-muted-foreground">Duration</p>
                        <p className="text-xs font-medium text-foreground">{t.projectDuration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass-card p-2.5 hover:border-primary/30 transition-all"
          >
            <ChevronLeft size={18} className="text-muted-foreground" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass-card p-2.5 hover:border-primary/30 transition-all"
          >
            <ChevronRight size={18} className="text-muted-foreground" />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                background: i === current ? "hsl(var(--primary))" : "hsl(var(--border))",
                transform: i === current ? "scale(1.3)" : "scale(1)",
                boxShadow: i === current ? "0 0 12px hsl(var(--primary) / 0.4)" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
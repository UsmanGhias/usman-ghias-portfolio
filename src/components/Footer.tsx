import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}{" "}
              <span className="gradient-text font-bold">Muhammad Usman Khan</span>
              . All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1 justify-center md:justify-start">
              Crafted with <Heart size={12} className="text-primary" /> • Senior Full Stack Developer • 5.5+ Years of Excellence
            </p>
          </div>
          <div className="flex gap-3">
            {[
              { icon: Github, href: "https://github.com/UsmanGhias", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/m-usmanghias", label: "LinkedIn" },
              { icon: Mail, href: "mailto:iusmanghias@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-500"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
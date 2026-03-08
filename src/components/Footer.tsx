const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">Muhammad Usman Khan</span>
          . All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Crafted with passion • Senior Full Stack Developer • 5.5+ Years of Excellence
        </p>
      </div>
    </footer>
  );
};

export default Footer;

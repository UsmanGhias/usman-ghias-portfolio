import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HireMeSection from "@/components/HireMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Divider = () => <div className="section-divider" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden page-transition">
      <SEOHead />
      <Navbar />
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <CaseStudiesSection />
      <Divider />
      <TestimonialsSection />
      <Divider />
      <HireMeSection />
      <Divider />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
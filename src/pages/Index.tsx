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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEOHead />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <HireMeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

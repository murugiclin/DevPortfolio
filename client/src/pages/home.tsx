import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import AnimatedBackground from "@/components/animated-background";
import TestimonialsSection from "@/components/testimonials-section";
import NowPlaying from "@/components/now-playing";
import PublicationsSection from "@/components/publications-section";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export default function Home() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="min-h-screen bg-navy text-light-gray overflow-x-hidden scroll-smooth">
      <AnimatedBackground />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-electric to-neon z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <PublicationsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <NowPlaying />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-space text-2xl font-bold text-gradient mb-4">idexin signals</div>
          <p className="text-med-gray mb-6">"If it can be automated, it will be. If it can be optimized, it must be. If it can be built, I'm already doing it."</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#home" className="hover:text-electric transition-colors">Home</a>
            <a href="#about" className="hover:text-electric transition-colors">About</a>
            <a href="#projects" className="hover:text-electric transition-colors">Projects</a>
            <a href="#skills" className="hover:text-electric transition-colors">Skills</a>
            <a href="#contact" className="hover:text-electric transition-colors">Contact</a>
          </div>
          <div className="text-sm text-med-gray">
            © {new Date().getFullYear()} idexin . Built with passion and lots of coffee.
          </div>
        </div>
      </footer>
    </div>
  );
}

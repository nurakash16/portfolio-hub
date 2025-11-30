import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectSection from "@/components/project-section";
import ResearchSection from "@/components/research-section";
import AchievementSection from "@/components/achievement-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-light-bg">
      <Navigation
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection searchQuery={searchQuery} />
      <ResearchSection />
      <AchievementSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceSection from "@/components/experience-section";
import ProjectSection from "@/components/project-section";
import NowSection from "@/components/now-section";
import AboutSection from "@/components/about-section";
import ResearchSection from "@/components/research-section";
import AchievementSection from "@/components/achievement-section";
import EducationSection from "@/components/education-section";
import ExtracurricularSection from "@/components/extracurricular-section";
import ReferencesSection from "@/components/references-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navigation />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <ProjectSection />
        <NowSection />
        <AboutSection />
        <ResearchSection />
        <AchievementSection />
        <EducationSection />
        <ExtracurricularSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

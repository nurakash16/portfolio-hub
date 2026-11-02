import { ThemeProvider } from "@/hooks/use-theme";
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
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 flex flex-col selection:bg-blue-500/30 selection:text-blue-600 dark:selection:text-blue-200 transition-colors duration-300 overflow-x-hidden">
        <Navigation />
        <main id="main-content" className="flex-1 w-full overflow-x-hidden">
          <HeroSection />
          <ExperienceSection />
          <ProjectSection />
          <NowSection />
          <AboutSection />
          <ResearchSection />
          <AchievementSection />
          <EducationSection />
          <ExtracurricularSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

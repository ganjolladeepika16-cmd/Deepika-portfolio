import CrowParticles from "@/components/CrowParticles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import PersonalSection from "@/components/PersonalSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <CrowParticles />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <PersonalSection />
    </div>
  );
};

export default Index;

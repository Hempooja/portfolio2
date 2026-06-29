import { useLenis } from './hooks/useLenis';
import Navigation from './components/Navigation';
import SectionSeparator from './components/SectionSeparator';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import MarqueeFlipSection from './sections/MarqueeFlipSection';
import SkillsSection from './sections/SkillsSection';
import CertificationsSection from './sections/CertificationsSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import LeadershipSection from './sections/LeadershipSection';
import ContactSection from './sections/ContactSection';

function App() {
  useLenis();

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MarqueeFlipSection />
      <SectionSeparator />
      <SkillsSection />
      <SectionSeparator />
      <CertificationsSection />
      <SectionSeparator />
      <ExperienceSection />
      <SectionSeparator />
      <ProjectsSection />
      <SectionSeparator />
      <LeadershipSection />
      <SectionSeparator />
      <ContactSection />
    </div>
  );
}

export default App;

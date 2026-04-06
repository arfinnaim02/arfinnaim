import Navbar from '../layout/Navbar.jsx';
import Footer from '../layout/Footer.jsx';
import HeroSection from '../sections/HeroSection.jsx';
import TechStackStrip from '../sections/TechStackStrip.jsx';
import HighlightProjectSection from '../sections/HighlightProjectSection.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import ExperienceSection from '../sections/ExperienceSection.jsx';
import FeaturedProjectsSection from '../sections/FeaturedProjectsSection.jsx';
import SkillsSection from '../sections/SkillsSection.jsx';
import MetricsSection from '../sections/MetricsSection.jsx';
import ProcessSection from '../sections/ProcessSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import AnimatedBackground from '../components/common/AnimatedBackground.jsx';

function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 overflow-hidden">
        <HeroSection />
        <TechStackStrip />
        <HighlightProjectSection />
        <AboutSection />
        <ExperienceSection />
        <FeaturedProjectsSection />
        <SkillsSection />
        <MetricsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
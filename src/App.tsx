import { useState, useCallback } from 'react';
import { DisclaimerModal } from './components/ui/DisclaimerModal';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { OfficesSection } from './components/sections/OfficesSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleNavigate = useCallback((id: string, service?: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (id === 'contact' && service) {
      setSelectedService(service);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-lg">
        Skip to main content
      </a>
      <DisclaimerModal isOpen={showDisclaimer} onAccept={() => setShowDisclaimer(false)} />
      <Navbar onNavigate={handleNavigate} />
      <main id="main-content">
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection onNavigate={handleNavigate} />
        <ServicesSection onNavigate={handleNavigate} />
        <OfficesSection onNavigate={handleNavigate} />
        <FAQSection onNavigate={handleNavigate} />
        <ContactSection selectedService={selectedService} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
import { useState, useCallback, useEffect } from 'react';
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
import { Toast, useToast } from './components/ui/Toast';
import { NotFound } from './components/ui/NotFound';

const VALID_SECTIONS = ['home', 'about', 'services', 'offices', 'faq', 'contact'];

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const { toast, showToast, hideToast } = useToast();

  // Check if current hash is valid, otherwise show 404
  const getCurrentSection = (): string => {
    const hash = window.location.hash.replace('#', '');
    return VALID_SECTIONS.includes(hash) ? hash : 'home';
  };

  const [currentSection, setCurrentSection] = useState(getCurrentSection());
  const [showNotFound, setShowNotFound] = useState(false);

  const handleNavigate = useCallback((id: string, service?: string) => {
    // Validate section ID
    if (!VALID_SECTIONS.includes(id)) {
      setShowNotFound(true);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (id === 'contact' && service) {
      setSelectedService(service);
    }
    setCurrentSection(id);
    setShowNotFound(false);
  }, []);

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && !VALID_SECTIONS.includes(hash)) {
        setShowNotFound(true);
      } else {
        setShowNotFound(false);
        setCurrentSection(hash || 'home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNotFoundClose = () => {
    setShowNotFound(false);
    window.location.hash = '#home';
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-lg">
        Skip to main content
      </a>
      <DisclaimerModal isOpen={showDisclaimer} onAccept={() => setShowDisclaimer(false)} />
      <Navbar onNavigate={handleNavigate} />
      
      {showNotFound ? (
        <NotFound onReturn={handleNotFoundClose} />
      ) : (
        <main id="main-content">
          <HeroSection onNavigate={handleNavigate} />
          <AboutSection onNavigate={handleNavigate} />
          <ServicesSection onNavigate={handleNavigate} />
          <OfficesSection onNavigate={handleNavigate} />
          <FAQSection onNavigate={handleNavigate} />
          <ContactSection 
            selectedService={selectedService} 
            onShowToast={showToast}
          />
        </main>
      )}
      
      <Footer />
      <WhatsAppButton />
      <Toast toast={toast} onClose={hideToast} />
    </div>
  );
}

export default App;

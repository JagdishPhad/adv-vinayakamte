import pfp from '../../assets/AdvocateVinayakAmte.jpeg';
import { HERO_CONTENT } from '../../data/content';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            src={pfp}
            alt="Advocate Vinayak Amte - Trademark Attorney in Mumbai"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
            loading="eager"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {HERO_CONTENT.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            {HERO_CONTENT.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate(HERO_CONTENT.primaryButton.action)}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              {HERO_CONTENT.primaryButton.text}
            </button>
            <button
              onClick={() => onNavigate(HERO_CONTENT.secondaryButton.action)}
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              {HERO_CONTENT.secondaryButton.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollEffect } from '../hooks/useScrollEffect';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { NAV_ITEMS } from '../../data/content';

interface NavbarProps {
  onNavigate: (id: string) => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollEffect(50);
  const activeSection = useScrollSpy({
    sectionIds: NAV_ITEMS.map(item => item.id),
    threshold: 0.3,
    rootMargin: '-80px 0px -80% 0px'
  });

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span
                className={`ml-2 text-xl font-bold ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Advocate Vinayak Amte
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative ${
                        isActive
                          ? isScrolled
                            ? 'text-black font-bold border-b-2 border-black'
                            : 'text-white font-bold border-b-2 border-white'
                          : isScrolled
                          ? 'text-gray-700 hover:text-black focus-visible:ring-black'
                          : 'text-white hover:text-gray-200 focus-visible:ring-white'
                      }`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 ${
                  isScrolled
                    ? 'text-gray-700 focus-visible:ring-black'
                    : 'text-white focus-visible:ring-white'
                }`}
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors ${
                      isActive
                        ? 'text-black font-bold bg-gray-50'
                        : 'text-gray-700 hover:text-black hover:bg-gray-50'
                    }`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
import { useState, useEffect } from 'react';

interface UseScrollEffectOptions {
  threshold?: number;
}

export function useScrollEffect(options: UseScrollEffectOptions = {}): boolean {
  const { threshold = 50 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}

export default useScrollEffect;
import { useState, useEffect } from 'react';

interface UseScrollSpyOptions {
  sectionIds: string[];
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook for active section detection using IntersectionObserver
 * 
 * Features:
 * - Zero scroll-jank with passive observer
 * - Configurable threshold and rootMargin
 * - Automatic cleanup on unmount
 * - Returns the currently visible section ID
 * 
 * @param sectionIds - Array of section IDs to observe
 * @param threshold - Percentage of section visibility (0-1) to trigger active state
 * @param rootMargin - Margin around viewport for observer root
 * @returns Active section ID or null
 */
export function useScrollSpy(
  options: UseScrollSpyOptions
): string | null {
  const { sectionIds, threshold = 0.3, rootMargin = '-80px 0px -80% 0px' } = options;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Skip if no sections to observe
    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is intersecting and most visible
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio to get the most visible section
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Observe all section elements
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [sectionIds, threshold, rootMargin]);

  return activeSection;
}

export default useScrollSpy;
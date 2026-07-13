import { useState, useEffect } from 'react';

/**
 * Configuration options for the rotating text hook.
 */
interface UseRotatingTextOptions {
  /** Rotation interval in milliseconds. Default: 2200ms for optimal readability */
  intervalMs?: number;
}

/**
 * Custom React hook for managing rotating text animations.
 * 
 * Implements proper cleanup pattern to prevent memory leaks:
 * - Returns a cleanup function from useEffect to clear intervals on unmount
 * - Handles empty phrase arrays gracefully
 * - Uses modulo arithmetic for circular rotation
 * 
 * @example
 * const text = useRotatingText(['React Developer', 'TypeScript Expert'], { intervalMs: 3000 });
 */
export function useRotatingText(
  phrases: readonly string[],
  options: UseRotatingTextOptions = {}
): string {
  const { intervalMs = 2200 } = options;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Guard clause: prevent interval creation for empty arrays
    if (phrases.length === 0) return;

    const interval = setInterval(() => {
      // Circular rotation using modulo to wrap around
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, intervalMs);

    // Cleanup: clear interval on component unmount or dependency change
    return () => clearInterval(interval);
  }, [phrases, intervalMs]);

  return phrases[currentIndex] || '';
}

export default useRotatingText;

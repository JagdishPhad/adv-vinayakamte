import { useState, useEffect, useRef } from 'react';

export function useRotatingText(phrases: readonly string[], intervalMs = 2200) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, intervalMs);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index, phrases.length, intervalMs]);

  return phrases[index];
}
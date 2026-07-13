import { useRotatingText } from '../hooks/useRotatingText';

interface RotatingTextProps {
  phrases: readonly string[];
  prefix?: string;
  intervalMs?: number;
}

export function RotatingText({ phrases, prefix = '', intervalMs = 2200 }: RotatingTextProps) {
  const currentPhrase = useRotatingText(phrases, intervalMs);

  return (
    <div className="flex flex-row items-center justify-center mt-4 space-x-2">
      {prefix && (
        <span className="text-lg md:text-xl font-semibold text-black">{prefix}</span>
      )}
      <span
        className="h-8 md:h-10 text-white text-lg md:text-xl font-extrabold bg-black px-2 rounded inline-flex items-center animate-fade-in-out"
        aria-live="polite"
        aria-atomic="true"
      >
        {currentPhrase}
      </span>
    </div>
  );
}
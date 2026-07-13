import { Scale } from 'lucide-react';

interface NotFoundProps {
  onReturn: () => void;
}

export function NotFound({ onReturn }: NotFoundProps) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <Scale className="h-24 w-24 text-white" strokeWidth={1.5} />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          ⚖️ OBJECTION!
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-300">
          Page Overruled (404)
        </h2>

        {/* Subtext */}
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          The legal document or page you are seeking has been adjourned, moved, or does not exist in our jurisdiction.
        </p>

        {/* CTA Button */}
        <button
          onClick={onReturn}
          className="inline-flex items-center px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          [ Return to Chambers ]
        </button>

        {/* Additional Info */}
        <p className="mt-12 text-gray-500 text-sm">
          If you believe this is an error, please contact our office directly.
        </p>
      </div>
    </div>
  );
}
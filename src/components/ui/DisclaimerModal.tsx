import { X } from 'lucide-react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onAccept: () => void;
}

export function DisclaimerModal({ isOpen, onAccept }: DisclaimerModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
          onClick={onAccept}
          aria-label="Close Disclaimer"
        >
          <X className="h-6 w-6" />
        </button>
        <h2
          id="disclaimer-title"
          className="text-4xl font-bold mb-6 text-center text-white tracking-wide"
        >
          Disclaimer
        </h2>
        <p className="text-gray-200 mb-8 text-lg leading-relaxed">
          The Bar Council of India does not permit advertisement or solicitation by advocates in any
          form or manner. By accessing this website, you acknowledge and confirm that you are seeking
          information relating to Advocate Vinayak Amte of your own accord and that there has been no
          form of solicitation, advertisement, or inducement by the advocate or his team. No material
          or information provided on this website should be construed as legal advice. The contents of
          this website are the intellectual property of Advocate Vinayak Amte.
        </p>
        <button
          className="w-full py-3 px-6 bg-white border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-200 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          onClick={onAccept}
        >
          I ACCEPT
        </button>
      </div>
    </div>
  );
}
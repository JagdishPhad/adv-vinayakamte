import adv from '../../assets/adv.jpg';
import { FOOTER_CONTENT } from '../../data/content';

export function Footer() {
  return (
    <footer className="relative z-10 w-full bg-black text-white py-12 clear-both">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Name Section */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-10 w-10 rounded-full border-2 border-white mr-3 overflow-hidden bg-gray-700">
              <img
                src={adv}
                alt="Advocate Vinayak Amte"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold whitespace-nowrap">
              Advocate Vinayak Amte
            </span>
          </div>

          {/* Credentials Section */}
          <p className="text-gray-400 mb-4 max-w-2xl text-sm md:text-base leading-relaxed px-4">
            {FOOTER_CONTENT.credentials}
          </p>

          {/* Copyright Section */}
          <p className="text-gray-500 text-xs md:text-sm border-t border-gray-800 pt-6 w-full max-w-md">
            {FOOTER_CONTENT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

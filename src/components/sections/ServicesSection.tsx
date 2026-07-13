import { CheckCircle } from 'lucide-react';
import { SERVICES, SERVICES_CONTENT } from '../../data/content';

interface ServicesSectionProps {
  onNavigate: (id: string, service?: string) => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{SERVICES_CONTENT.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {SERVICES_CONTENT.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group border"
              onClick={() => onNavigate('contact', service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigate('contact', service);
                }
              }}
              aria-label={`Contact about ${service}`}
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-black group-hover:text-gray-700" />
                <span className="font-semibold text-gray-900 group-hover:text-black">
                  {service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{SERVICES_CONTENT.cta.title}</h3>
          <p className="text-gray-300 mb-6">{SERVICES_CONTENT.cta.description}</p>
          <button
            onClick={() => onNavigate('contact', SERVICES_CONTENT.cta.service)}
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {SERVICES_CONTENT.cta.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
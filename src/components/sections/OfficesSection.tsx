import { Building2, MapPin, Phone, Clock } from 'lucide-react';
import { CONTACT_INFO, OFFICES_CONTENT } from '../../data/content';

interface OfficesSectionProps {
  onNavigate: (id: string) => void;
}

export function OfficesSection({ onNavigate }: OfficesSectionProps) {
  return (
    <section id="offices" className="py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{OFFICES_CONTENT.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {OFFICES_CONTENT.subtitle}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Office 1 */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border">
          <div className="flex items-center mb-6">
            <div className="bg-gray-200 p-3 rounded-lg mr-4">
              <Building2 className="h-8 w-8 text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mumbai Office</h3>
              <p className="text-gray-600 font-medium">Primary Location</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-500 mt-1" />
              <div className="text-gray-600">
                <p className="font-medium text-gray-900 mb-1">Address:</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600 whitespace-pre-line"
                >
                  {CONTACT_INFO.address}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-500" />
              <div className="text-gray-600">
                <span className="font-medium text-gray-900">Phone: </span>
                {CONTACT_INFO.phone.map((phone, idx) => (
                  <span key={idx}>
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:underline text-blue-600">
                      {phone}
                    </a>
                    {idx < CONTACT_INFO.phone.length - 1 && ', '}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-gray-500 mt-1" />
              <div className="text-gray-600">
                <p className="font-medium text-gray-900 mb-1">Office Hours:</p>
                <p>{CONTACT_INFO.hours.weekdays}</p>
                <p>{CONTACT_INFO.hours.saturday}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{OFFICES_CONTENT.cta.title}</h3>
            <p className="text-gray-300 mb-6">{OFFICES_CONTENT.cta.description}</p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {OFFICES_CONTENT.cta.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
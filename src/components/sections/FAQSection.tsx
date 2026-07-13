import { HelpCircle } from 'lucide-react';
import { FAQS } from '../../data/content';

interface FAQSectionProps {
  onNavigate: (id: string) => void;
}

export function FAQSection({ onNavigate }: FAQSectionProps) {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-black mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about Advocate Vinayak Amte's legal services and
            consultation process.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-lg shadow-md border overflow-hidden group"
            >
              <summary className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer font-semibold text-gray-900 list-none">
                <span className="pr-4">{faq.question}</span>
                <span className="text-gray-500 flex-shrink-0 transition-transform duration-200 group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-4">
                <div className="border-t pt-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Don't hesitate to reach out
              for a personalized consultation.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
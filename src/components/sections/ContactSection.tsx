import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { SERVICES, CONTACT_INFO, CONTACT_CONTENT } from '../../data/content';
import { FormData } from '../../types';
import { sendEmail } from '../../utils/email';

interface ContactSectionProps {
  selectedService: string | null;
}

export function ContactSection({ selectedService }: ContactSectionProps) {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    matter: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSent(false);

    try {
      await sendEmail(form, selectedService);
      setSent(true);
      setForm({ name: '', email: '', phone: '', matter: '', message: '' });
    } catch (err) {
      setError(CONTACT_CONTENT.form.errorMessage);
      console.error('EmailJS Error:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{CONTACT_CONTENT.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {CONTACT_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <div className="text-gray-300">
                  {CONTACT_INFO.phone.map((phone, idx) => (
                    <p key={idx}>
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:underline">
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-300">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Office Address</h3>
                <p className="text-gray-300 whitespace-pre-line">{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Office Hours</h3>
                <p className="text-gray-300">
                  {CONTACT_INFO.hours.weekdays}
                  <br />
                  {CONTACT_INFO.hours.saturday}
                  <br />
                  {CONTACT_INFO.hours.sunday}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <MessageCircle className="h-6 w-6 mr-3" />
              Send a Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-gray-300 mb-2">
                  {CONTACT_CONTENT.form.nameLabel}
                </label>
                <input
                  id="full_name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder={CONTACT_CONTENT.form.namePlaceholder}
                  required
                />
              </div>

              <div>
                <label htmlFor="email_address" className="block text-sm font-medium text-gray-300 mb-2">
                  {CONTACT_CONTENT.form.emailLabel}
                </label>
                <input
                  id="email_address"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder={CONTACT_CONTENT.form.emailPlaceholder}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-300 mb-2">
                  {CONTACT_CONTENT.form.phoneLabel}
                </label>
                <input
                  id="phone_number"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder={CONTACT_CONTENT.form.phonePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="legal_matter" className="block text-sm font-medium text-gray-300 mb-2">
                  {CONTACT_CONTENT.form.matterLabel}
                </label>
                <select
                  id="legal_matter"
                  name="matter"
                  autoComplete="off"
                  value={selectedService !== null ? selectedService : form.matter}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                >
                  <option value="">{CONTACT_CONTENT.form.matterPlaceholder}</option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                  <option value="Other Matter">{CONTACT_CONTENT.form.otherOption}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message_content" className="block text-sm font-medium text-gray-300 mb-2">
                  {CONTACT_CONTENT.form.messageLabel}
                </label>
                <textarea
                  id="message_content"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder={CONTACT_CONTENT.form.messagePlaceholder}
                  required
                />
              </div>

              {error && <div className="text-red-400 text-sm" role="alert">{error}</div>}

              {sent && (
                <div className="flex items-center text-green-400 text-lg font-semibold" role="status">
                  <CheckCircle className="h-7 w-7 mr-2" />
                  {CONTACT_CONTENT.form.successMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={sending}
              >
                {sending ? CONTACT_CONTENT.form.sendingButton : CONTACT_CONTENT.form.submitButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
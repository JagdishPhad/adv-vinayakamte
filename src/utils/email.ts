import emailjs from '@emailjs/browser';
import { FormData } from '../types';

/**
 * Sends an email via EmailJS client-side service.
 * 
 * Single Responsibility Principle: This utility handles ONLY email transmission,
 * keeping the contact form component focused on UI state management.
 * 
 * Environment variables are validated at runtime to fail fast during development
 * rather than producing silent failures in production.
 * 
 * @param form - Validated form data from the contact form
 * @param selectedService - Optional pre-selected service from services grid (overrides form matter field)
 * @throws {Error} If EmailJS environment variables are not configured
 * 
 * @example
 * try {
 *   await sendEmail(formData, 'Trademark Registration');
 * } catch (error) {
 *   // Handle error in UI
 * }
 */
export async function sendEmail(
  form: FormData,
  selectedService: string | null
): Promise<void> {
  // Fail-fast: validate environment configuration before attempting to send
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS credentials are not configured. Please set VITE_EMAILJS_* environment variables.');
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      matter: selectedService || form.matter,
      message: form.message,
    },
    publicKey
  );
}

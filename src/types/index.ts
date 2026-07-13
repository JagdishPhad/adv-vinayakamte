// ===========================================
// Core Application Types
// ===========================================

/**
 * Contact form data structure
 */
export interface FormData {
  name: string;
  email: string;
  phone: string;
  matter: string;
  message: string;
}

/**
 * Form field change event handler
 */
export type FormChangeHandler = (
  e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => void;

/**
 * Form submission event handler
 */
export type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;

// ===========================================
// Navigation Types
// ===========================================

/**
 * Navigation menu item
 */
export interface NavItem {
  label: string;
  id: string;
}

/**
 * Navigation handler function type
 */
export type NavigateHandler = (id: string, service?: string) => void;

// ===========================================
// Content Types
// ===========================================

/**
 * Service offering
 */
export interface Service {
  name: string;
  description?: string;
}

/**
 * Achievement statistic
 */
export interface Achievement {
  number: string;
  label: string;
}

/**
 * Frequently Asked Question
 */
export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

/**
 * Office location information
 */
export interface OfficeLocation {
  name: string;
  type: 'primary' | 'secondary';
  address: string;
  phone: string[];
  email?: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  mapUrl?: string;
}

// ===========================================
// Contact Information Types
// ===========================================

/**
 * Contact information structure
 */
export interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

/**
 * Contact section contact details
 */
export interface ContactDetails {
  phone: string[];
  email: string;
  address: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

// ===========================================
// Component Props Types
// ===========================================

/**
 * Base component props with optional navigation
 */
export interface BaseSectionProps {
  onNavigate?: NavigateHandler;
}

/**
 * Hero section props
 */
export interface HeroSectionProps extends BaseSectionProps {
  // Extends BaseSectionProps for consistency
}

/**
 * About section props
 */
export interface AboutSectionProps extends BaseSectionProps {
  // Extends BaseSectionProps for consistency
}

/**
 * Services section props
 */
export interface ServicesSectionProps extends BaseSectionProps {
  // Extends BaseSectionProps for consistency
}

/**
 * Offices section props
 */
export interface OfficesSectionProps extends BaseSectionProps {
  // Extends BaseSectionProps for consistency
}

/**
 * FAQ section props
 */
export interface FAQSectionProps extends BaseSectionProps {
  // Extends BaseSectionProps for consistency
}

/**
 * Contact section props
 */
export interface ContactSectionProps {
  selectedService: string | null;
  onNavigate?: NavigateHandler;
}

/**
 * Navbar props
 */
export interface NavbarProps {
  onNavigate: NavigateHandler;
}

/**
 * Footer props
 */
export interface FooterProps {
  // No props needed currently, but defined for extensibility
}

/**
 * WhatsApp button props
 */
export interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

/**
 * Disclaimer modal props
 */
export interface DisclaimerModalProps {
  isOpen: boolean;
  onAccept: () => void;
}

/**
 * Rotating text props
 */
export interface RotatingTextProps {
  phrases: readonly string[];
  prefix?: string;
  intervalMs?: number;
}

// ===========================================
// Hook Types
// ===========================================

/**
 * Rotating text hook options
 */
export interface UseRotatingTextOptions {
  intervalMs?: number;
}

/**
 * Scroll effect hook options
 */
export interface UseScrollEffectOptions {
  threshold?: number;
}

// ===========================================
// Email Types
// ===========================================

/**
 * Email service configuration
 */
export interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

/**
 * Email template parameters
 */
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  phone: string;
  matter: string;
  message: string;
}

// ===========================================
// Utility Types
// ===========================================

/**
 * Optional string array (for conditional rendering)
 */
export type OptionalStringArray = string[] | null | undefined;

/**
 * Loading state union type
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Generic async operation result
 */
export interface AsyncResult<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

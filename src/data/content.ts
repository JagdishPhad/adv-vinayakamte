import { Achievement, FAQ, ContactInfo } from '../types';

// ===========================================
// Navigation Configuration
// ===========================================

export const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Offices', id: 'offices' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
] as const;

// ===========================================
// Services Configuration
// ===========================================

export const SERVICES = [
  'Trademark Registration',
  'Trademark Objection',
  'Trademark Opposition',
  'Trademark Renewal',
  'Trademark Assignment',
  'Brand Registration',
  'Logo Registration',
  'Same-Day Trademark Filing',
  'Intellectual Property Protection',
] as const;

// ===========================================
// Achievements Configuration
// ===========================================

export const ACHIEVEMENTS: Achievement[] = [
  { number: '500+', label: 'Trademarks Filed' },
  { number: '10+', label: 'Years Experience' },
  { number: '98%', label: 'Approval Rate' },
  { number: '450+', label: 'Brands Protected' },
];

// ===========================================
// Rotating Text Phrases
// ===========================================

export const ROTATING_PHRASES = [
  'Trademark Attorney in Mumbai',
  'Trademark Registration Lawyer in Chembur',
  'Trademark Objection and Opposition Lawyer',
  'Affordable Brand Registration in India',
  'Logo Registration Advocate Mumbai',
  'Trademark Renewal Services Mumbai',
  'Trademark Assignment Lawyer India',
  'Same Day Trademark Filing Expert',
  'Intellectual Property Lawyer in Mumbai',
  'Advocate Vinayak Amte Trademark Expert',
] as const;

// ===========================================
// FAQ Configuration
// ===========================================

export const FAQS: FAQ[] = [
  {
    question: 'How quickly can I start using the ™ symbol for my brand?',
    answer:
      'Advocate Vinayak Amte offers same-day trademark filing services. Once the application is filed, you can start using the ™ symbol next to your logo or brand name within an hour.',
  },
  {
    question: 'What specific trademark services does Advocate Vinayak Amte handle?',
    answer:
      'Advocate Vinayak Amte specializes in comprehensive brand protection, providing professional legal services for Logo Registration, Brand Registration, Trademark Objection, Trademark Opposition, Trademark Renewal, and Trademark Assignment.',
  },
  {
    question: 'What should I bring to my initial consultation?',
    answer:
      'It is advisable to bring details about your brand, high-resolution logo files, business registration documents, and any prior correspondence from the Trademark Registry (such as examination reports or notices of objection) if you have already started the process.',
  },
  {
    question: 'Can Advocate Vinayak Amte represent me if someone objects to my trademark?',
    answer:
      'Yes, as a qualified Trademark Attorney (B.COM, GDCA, LLB, LLM), Advocate Vinayak Amte is fully equipped to provide expert legal protection and represent your brand in cases of Trademark Objection and Trademark Opposition.',
  },
  {
    question: 'Are my brand ideas and business concepts kept confidential?',
    answer:
      'Yes, all consultations and communications with Advocate Vinayak Amte are strictly confidential. Your brand concepts, logo designs, and business strategies are fully protected under attorney-client privilege.',
  },
];

// ===========================================
// Contact Information
// ===========================================

export const CONTACT_INFO: ContactInfo = {
  phone: ['+91 9320848100', '+91 9221848100'],
  email: 'vinayakamte@yahoo.com',
  address: `DL AHUJA & ASSOCIATES
23, Western India House, 3rd Floor,
17 Sir P.M. Road, Fort,
Mumbai - 400001`,
  hours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
    saturday: 'Saturday: 10:00 AM - 4:00 PM',
    sunday: 'Sunday: By Appointment',
  },
};

// ===========================================
// Hero Section Content
// ===========================================

export const HERO_CONTENT = {
  title: 'Advocate Vinayak Amte',
  subtitle:
    'Intellectual Property Expert | Trademark & Logo Registration | Comprehensive Legal Protection | Same-Day Filing',
  primaryButton: {
    text: 'Get Legal Consultation',
    action: 'contact',
  },
  secondaryButton: {
    text: 'Learn More',
    action: 'about',
  },
} as const;

// ===========================================
// About Section Content
// ===========================================

export const ABOUT_CONTENT = {
  title: 'About Adv.Vinayak Amte',
  subtitle:
    'Dedicated Trademark Attorney committed to delivering exceptional intellectual property services with integrity and expertise.',
  sections: [
    {
      icon: 'User',
      title: 'Professional Background',
      content:
        'Adv. Vinayak Amte is a highly qualified and accomplished Trademark Attorney dedicated to safeguarding intellectual property and brand identities. Holding an extensive academic portfolio that includes a B.COM, GDCA, LLB, and LLM, he brings a deep understanding of corporate and intellectual property law to his practice. Based in Mumbai, he has earned a strong reputation for his strategic insight, integrity, and exceptional speed in legal execution. Known for his client-focused and accessible approach, Adv. Amte successfully represents entrepreneurs, startups, and established businesses across India, guiding them through complex IP matters such as trademark objections, oppositions, and renewals. His commitment to providing affordable, same-day filing services ensures that his clients can secure their legal rights and start using the ™ symbol with confidence and without delay.',
    },
    {
      icon: 'Briefcase',
      title: 'Comprehensive Brand Protection Services',
      content:
        'Advocate Vinayak Amte offers highly specialized intellectual property services, meticulously tailored to secure and protect the brand identities of his clients. His core areas of expertise include complete brand and logo registration, handling complex trademark objections and oppositions, trademark renewals, and trademark assignments. As a dedicated Trademark Attorney holding comprehensive academic qualifications (B.COM, GDCA, LLB, LLM), he is expertly equipped to navigate the intricacies of Indian intellectual property law. Committed to delivering fast, affordable, and result-oriented legal protection, Adv. Amte provides same-day trademark filing services, empowering clients to confidently start using the ™ symbol within an hour. Combining deep legal knowledge with practical strategies, he ensures robust, uncompromising protection for your most valuable business assets.',
    },
    {
      icon: 'Award',
      title: 'Client-Focused Approach',
      content:
        'Advocate Vinayak Amte is deeply committed to understanding each client\'s unique business vision, brand identity, and commercial goals. He recognizes that a brand is often a company\'s most valuable asset, and he tailors his legal strategies to ensure its complete protection. His approach is rooted in transparency, efficiency, and proactive communication, ensuring that clients are fully informed throughout the trademark registration process. Whether navigating a complex trademark objection, filing an opposition, or simply securing a new logo registration, he delivers fast, practical, and highly effective legal solutions. His unwavering dedication to fast-tracking legal protection—such as enabling clients to use the ™ symbol within an hour—has earned him the trust of entrepreneurs, startups, and established businesses seeking reliable, affordable brand security.',
    },
    {
      icon: 'Briefcase',
      title: 'Private Practice & Core Expertise',
      content: '',
      listItems: [
        'Practices independently, providing personalized legal counsel and robust brand protection to private clients, startups, and established businesses.',
        'Serves as a dedicated Trademark Attorney, specializing in the following areas:',
        'Same-Day Trademark & Logo Registration',
        'Handling Trademark Objections & Oppositions',
        'Trademark Renewals & Assignments',
        'Comprehensive Legal Protection for Intellectual Property',
        'Balances the urgency of new brand registrations with the detailed legal requirements of complex trademark oppositions.',
        'Draws on extensive academic expertise—including B.COM, GDCA, LLB, and LLM—to deliver precise and strategic intellectual property solutions.',
        'Committed to offering same-day filing and affordable legal support tailored to each client\'s unique brand identity and business goals.',
      ],
    },
  ],
} as const;

// ===========================================
// Services Section Content
// ===========================================

export const SERVICES_CONTENT = {
  title: 'Professional Legal Protection',
  description:
    'Comprehensive brand protection across all stages of the trademark process. No matter your intellectual property challenge, Adv. Vinayak Amte has the LLM-qualified expertise to help you secure and defend your brand identity.',
  cta: {
    title: "Don't See Your Case Type?",
    description: 'We handle all types of legal matters. Contact us to discuss your specific legal needs.',
    buttonText: 'Discuss Your Case',
    service: 'Other Matter',
  },
} as const;

// ===========================================
// Offices Section Content
// ===========================================

export const OFFICES_CONTENT = {
  title: 'Our Offices',
  subtitle:
    'Conveniently located offices to serve you better. Visit us for in-person consultations and legal assistance.',
  locations: [
    {
      name: 'Our Mumbai Office',
      type: 'primary' as const,
      description: 'Primary Location',
    },
  ],
  cta: {
    title: 'Schedule a Visit',
    description:
      'Prefer to meet in person? Schedule an appointment at either of our offices for personalized legal consultation.',
    buttonText: 'Book Appointment',
  },
} as const;

// ===========================================
// Contact Section Content
// ===========================================

export const CONTACT_CONTENT = {
  title: 'Get in Touch',
  subtitle:
    'Ready to discuss your legal matter? Contact Advocate Vinayak Amte today for professional legal consultation.',
  form: {
    nameLabel: 'Full Name',
    namePlaceholder: 'Your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'your.email@example.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: '+91 9876543210',
    matterLabel: 'Legal Matter',
    matterPlaceholder: 'Select case type',
    otherOption: 'Other Matter',
    messageLabel: 'Message',
    messagePlaceholder: 'Describe your legal matter...',
    submitButton: 'Send Message',
    sendingButton: 'Sending...',
    successMessage: 'Message sent successfully! We will reach out soon.',
    errorMessage: 'Failed to send. Please check your connection or credentials.',
  },
} as const;

// ===========================================
// Footer Content
// ===========================================

export const FOOTER_CONTENT = {
  credentials:
    'Experienced Trademark Attorney | B.COM, GDCA, LLB, LLM | Comprehensive Brand Protection | Mumbai',
  copyright: '© 2026 Trademark Attorney Adv. Vinayak Amte. All rights reserved.',
  attribution: 'Designed & Engineered with modern React + TypeScript standards',
} as const;

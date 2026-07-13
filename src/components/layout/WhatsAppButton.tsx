export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919320848100"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[100] bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col items-center group"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="/whatsapplogo.jpg"
        alt="Chat with Advocate Vinayak Amte on WhatsApp"
        loading="lazy"
        className="w-16 h-16 md:w-20 md:h-20 p-1 object-contain rounded-full border-4 border-white shadow-lg group-hover:border-green-500 transition-all duration-200 bg-black"
      />
      <span className="mt-2 px-3 py-1 bg-green-600 text-white text-sm md:text-base rounded-full shadow-md font-semibold opacity-90 group-hover:opacity-100 transition-all duration-200">
        Contact us on WhatsApp
      </span>
    </a>
  );
}

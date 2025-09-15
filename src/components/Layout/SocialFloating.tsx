import { Phone } from "lucide-react";

const SocialFloating = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className="flex flex-col gap-3 items-end">
        <a
          href="tel:+919866652824"
          aria-label="Call"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-colors"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/919866652824"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition-colors"
        >
          <img src="/whatsapp_icon.png" alt="WhatsApp" className="w-6 h-6" />
        </a>
        <a
          href="tel:+919866652824"
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 text-white text-sm shadow-lg"
          aria-label="Call +91 9866652824"
        >
          <Phone className="w-4 h-4" />
          <span>+91 9866652824</span>
        </a>
      </div>
    </div>
  );
};

export default SocialFloating;



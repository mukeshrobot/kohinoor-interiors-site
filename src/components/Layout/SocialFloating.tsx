import { Facebook, Instagram, Linkedin, MessageCircle, Phone } from "lucide-react";

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
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white flex items-center justify-center shadow-lg transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition-colors"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center shadow-lg transition-colors"
        >
          <Linkedin className="w-6 h-6" />
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



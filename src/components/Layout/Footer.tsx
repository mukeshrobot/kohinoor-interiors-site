import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-[120px] h-[120px] rounded-lg overflow-hidden shadow-sm">
                <img
                  src="/logo.png"
                  alt="Kohinoor Interiors Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback if image doesn't load */}
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg" style={{ display: 'none' }}>
                  KI
                </div>
              </div>
              <div className="text-2xl font-bold whitespace-nowrap">
                Kohinoor <span className="text-accent">Interiors</span>
              </div>
            </div>
            <p className="text-gray-300">
              Transforming spaces with excellence. Over 5+ years of experience in creating stunning interiors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Residential Interior Design</li>
              <li>Office Renovation</li>
              <li>Custom Construction</li>
              <li>Project Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Contact Info</h3>
            <div className="space-y-3">
              <a href="tel:+919866652824" className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors">
                <Phone size={18} />
                <span>+91 9866652824</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} />
                <span>kohinoorinteriors09@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={55} />
                <span>Plot No: 1/B-14 SV Co-Operative Industrial Estate, Balanagar Main Road, Hyderabad, Telangana, 500037</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Kohinoor Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
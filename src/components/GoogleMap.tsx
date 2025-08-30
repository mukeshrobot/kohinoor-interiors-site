import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, Mail, Star, Sparkles } from 'lucide-react';

const GoogleMap: React.FC = () => {
  const companyAddress = "Kohinoor Interiors, MSR Complex, beside HDFC Bank, SVCIE, Balanagar, Hyderabad, Telangana 500037";
  const encodedAddress = encodeURIComponent(companyAddress);
  
  // Kohinoor Interiors exact coordinates from Google Maps
  const myLat = 17.4704426;
  const myLng = 78.435808;

  return (
    <div className="h-full flex flex-col">
      {/* Enhanced Interactive Map with Google Maps iframe */}
      <div className="flex-1 relative bg-muted rounded-2xl overflow-hidden shadow-elegant group hover:shadow-hover transition-all duration-500">
        {/* Google Maps iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.435808!3d17.4704426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b243d1bcc3%3A0x69c0fb58de2d3c79!2sKohinoor%20Interiors!5e0!3m2!1sen!2sin!4v1234567890123!5m1!1e1"
          width="100%"
          height="540"
          style={{ border: 0, minHeight: '540px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-2xl"
          title="Kohinoor Interiors Location"
        ></iframe>


        
        {/* Enhanced Map Overlay Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-3">
          <a
            href="https://www.google.com/maps/place/Kohinoor+Interiors/@17.4727434,78.4397763,14.8z/data=!4m15!1m7!3m6!1s0x3bcb91d13b08dd23:0x122c692997370ffc!2sKohinoor+School+Furniture-+School+Furniture+Manufacturer+In+Hyderabad!8m2!3d17.4923873!4d78.43363!16s%2Fg%2F11ydg583hd!3m6!1s0x3bcb91b243d1bcc3:0x69c0fb58de2d3c79!8m2!3d17.4704426!4d78.435808!15sCnZLb2hpbm9vciBJbnRlcmlvcnMgUGxvdCBObzogMS9CLTE0IFNWIENvLU9wZXJhdGl2ZSBJbmR1c3RyaWFsIEVzdGF0ZSwgQmFsYW5hZ2FyIE1haW4gUm9hZCwgSHlkZXJhYmFkLCBUZWxhbmdhbmEgNTAwMDM3kgEZaW50ZXJpb3JfYXJjaGl0ZWN0X29mZmljZeABAA!16s%2Fg%2F11xfs8xnr1!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"
            className="glass rounded-xl p-3 shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-110 group"
            title="Open in Google Maps"
          >
            <ExternalLink size={20} className="text-accent group-hover:text-gold-light transition-colors duration-300" />
          </a>
          
          {/* Enhanced Location Badge */}
          <div className="glass rounded-xl px-4 py-2 shadow-soft">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-accent animate-pulse" />
              <span className="text-xs font-semibold text-primary whitespace-nowrap">Live Location</span>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-6 left-6">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse-slow"></div>
        </div>
        <div className="absolute bottom-6 left-6">
          <div className="w-2 h-2 bg-gold-light rounded-full animate-bounce-slow"></div>
        </div>
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
          <div className="w-4 h-4 bg-accent/60 rounded-full animate-float"></div>
        </div>
      </div>
      
      {/* Enhanced Company Information and Actions */}
      <div className="mt-6 space-y-4 m-3">
        {/* Enhanced Contact Info */}
        <div className="card-elegant p-6 bg-gradient-to-br from-white/90 to-blue-50/30">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-gradient-to-br from-accent to-gold-light p-3 rounded-2xl shadow-gold group-hover:shadow-glow transition-all duration-300">
              <MapPin size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-primary mb-1">Showroom Location</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {companyAddress}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-accent rounded-lg p-1.5 group-hover:scale-110 transition-transform duration-300">
                <Phone size={14} className="text-white" />
              </div>
              <span className="font-medium">+91 9866652824</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground group">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-accent rounded-lg p-1.5 group-hover:scale-110 transition-transform duration-300">
                <Mail size={14} className="text-white" />
              </div>
              <span className="font-medium">kohinoorinteriors09@gmail.com</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Action Buttons */}
        <div className="grid grid-cols-2 gap-3 m-4">
          <a
            href="https://www.google.com/maps/place/Kohinoor+Interiors/@17.4727434,78.4397763,14.8z/data=!4m15!1m7!3m6!1s0x3bcb91d13b08dd23:0x122c692997370ffc!2sKohinoor+School+Furniture-+School+Furniture+Manufacturer+In+Hyderabad!8m2!3d17.4923873!4d78.43363!16s%2Fg%2F11ydg583hd!3m6!1s0x3bcb91b243d1bcc3:0x69c0fb58de2d3c79!8m2!3d17.4704426!4d78.435808!15sCnZLb2hpbm9vciBJbnRlcmlvcnMgUGxvdCBObzogMS9CLTE0IFNWIENvLU9wZXJhdGl2ZSBJbmR1c3RyaWFsIEVzdGF0ZSwgQmFsYW5hZ2FyIE1haW4gUm9hZCwgSHlkZXJhYmFkLCBUZWxhbmdhbmEgNTAwMDM3kgEZaW50ZXJpb3JfYXJjaGl0ZWN0X29mZmljZeABAA!16s%2Fg%2F11xfs8xnr1!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-2 text-sm"
          >
            <MapPin size={16} />
            View on Maps
          </a>
          <a
            href="https://www.google.com/maps/dir//Kohinoor+Interiors,+MSR+Complex,+HDFC+Bank,+SVCIE,+Balanagar,+Hyderabad,+Telangana/@17.4514509,78.3468775,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb91b243d1bcc3:0x69c0fb58de2d3c79!2m2!1d78.435808!2d17.4704426!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center justify-center gap-2 text-sm"
          >
            <Navigation size={16} />
            Get Directions
          </a>
        </div>
        
        {/* Enhanced Additional Map Services */}
        <div className="flex items-center justify-center gap-4 text-xs">
          <a
            href="https://www.google.com/maps/place/Kohinoor+Interiors/@17.4727434,78.4397763,14.8z/data=!4m15!1m7!3m6!1s0x3bcb91d13b08dd23:0x122c692997370ffc!2sKohinoor+School+Furniture-+School+Furniture+Manufacturer+In+Hyderabad!8m2!3d17.4923873!4d78.43363!16s%2Fg%2F11ydg583hd!3m6!1s0x3bcb91b243d1bcc3:0x69c0fb58de2d3c79!8m2!3d17.4704426!4d78.435808!15sCnZLb2hpbm9vciBJbnRlcmlvcnMgUGxvdCBObzogMS9CLTE0IFNWIENvLU9wZXJhdGl2ZSBJbmR1c3RyaWFsIEVzdGF0ZSwgQmFsYW5hZ2FyIE1haW4gUm9hZCwgSHlkZXJhYmFkLCBUZWxhbmdhbmEgNTAwMDM3kgEZaW50ZXJpb3JfYXJjaGl0ZWN0X29mZmljZeABAA!16s%2Fg%2F11xfs8xnr1!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-105 flex items-center gap-1"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            Google Maps
          </a>
          <span className="text-muted-foreground">•</span>
          <a
            href={`https://www.bing.com/maps?q=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-105 flex items-center gap-1"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Bing Maps
          </a>
          <span className="text-muted-foreground">•</span>
          <a
            href={`https://maps.apple.com/?q=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-105 flex items-center gap-1"
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            Apple Maps
          </a>
        </div>

        {/* Enhanced Quick Actions */}
        <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-2xl p-4 border border-accent/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-accent animate-pulse" />
              <span className="text-xs font-semibold text-primary">Quick Actions</span>
            </div>
            <div className="flex gap-2">
              <button className="w-6 h-6 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors duration-300">
                <Phone onClick={() => window.open('tel:+919866652824', '_blank')} size={12} className="text-accent" />
              </button>
              <button className="w-6 h-6 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors duration-300">
                <Mail size={12} className="text-accent" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;

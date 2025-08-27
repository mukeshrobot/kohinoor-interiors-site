import React, { useEffect, useRef } from 'react';
import { MapPin, Navigation, ExternalLink, Phone, Mail, Star, Sparkles } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const companyAddress = "Kohinoor Interiors, MSR Complex, beside HDFC Bank, SVCIE, Balanagar, Hyderabad, Telangana 500037";
  const encodedAddress = encodeURIComponent(companyAddress);
  
  // Kohinoor Interiors exact coordinates from Google Maps
  const myLat = 17.4704426;
  const myLng = 78.435808;

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Initialize the map
      const map = L.map(mapRef.current).setView([myLat, myLng], 15);
      mapInstance.current = map;

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
        minZoom: 10
      }).addTo(map);

      // Create enhanced custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            background: linear-gradient(135deg, #D4AF37, #F4D03F);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 8px 32px rgba(212, 175, 55, 0.4), 0 4px 16px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 16px;
            position: relative;
            overflow: hidden;
          ">
            <div style="
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
              animation: shine 3s infinite;
            "></div>
            KI
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      });

      // Add marker with custom icon
      const marker = L.marker([myLat, myLng], { icon: customIcon }).addTo(map);
      
      // Add enhanced popup with company information
      marker.bindPopup(`
        <div style="min-width: 250px; padding: 16px; font-family: inherit;">
          <div style="
            background: linear-gradient(135deg, #D4AF37, #F4D03F);
            color: white;
            padding: 12px;
            border-radius: 12px;
            margin: -16px -16px 16px -16px;
            text-align: center;
            font-weight: bold;
            font-size: 18px;
            box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
          ">
            🏢 Kohinoor Interiors
          </div>
          <div style="margin-bottom: 12px;">
            <div style="display: flex; align-items: center; margin-bottom: 8px;">
              <span style="margin-right: 8px;">📍</span>
              <span style="color: #374151; font-size: 14px; line-height: 1.4;">
                ${companyAddress}
              </span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 8px;">
              <span style="margin-right: 8px;">📞</span>
              <span style="color: #374151; font-size: 14px;">+91 9866652824</span>
            </div>
            <div style="display: flex; align-items: center;">
              <span style="margin-right: 8px;">✉️</span>
              <span style="color: #374151; font-size: 14px;">kohinoorinteriors09@gmail.com</span>
            </div>
          </div>
          <div style="
            background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
            padding: 8px;
            border-radius: 8px;
            text-align: center;
            font-size: 12px;
            color: #6b7280;
            border: 1px solid #e5e7eb;
          ">
            🕒 Mon-Sat: 9:30 AM - 6:00 PM
          </div>
        </div>
      `).openPopup();

      // Add some map controls
      map.on('click', () => {
        marker.closePopup();
      });

      // Fit map to marker bounds
      map.fitBounds(marker.getLatLng().toBounds(1000));
    }

    // Cleanup function
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [myLat, myLng, companyAddress]);

  return (
    <div className="h-full flex flex-col">
      {/* Enhanced Interactive Map */}
      <div className="flex-1 relative bg-muted rounded-2xl overflow-hidden shadow-elegant group hover:shadow-hover transition-all duration-500">
        <div 
          ref={mapRef} 
          className="w-full h-full rounded-2xl"
          style={{ minHeight: '540px' }}
        />

        {/* Overlay info card on map for mobile/desktop */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-4 right-4 md:left-6 md:right-auto md:max-w-xl top-4 md:top-6 pointer-events-auto">
            <div className="bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 p-4 md:p-6 transition-transform hover:scale-[1.01]">
              <div className="flex items-start gap-5 mb-5">
                <div className="bg-gradient-to-br from-accent to-gold-light p-4 rounded-2xl shadow-gold ring-2 ring-white/60">
                  <MapPin size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-lg md:text-2xl font-extrabold text-primary tracking-tight mb-1">Showroom Location</p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{companyAddress}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg">
                <div className="flex items-center gap-3 text-muted-foreground hover:translate-x-0.5 transition-transform">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-accent rounded-lg flex items-center justify-center shadow-md">
                    <Phone size={18} className="text-white" />
                  </div>
                  <a href="tel:+919866652824" className="font-semibold hover:text-accent transition-colors">+91 9866652824</a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:translate-x-0.5 transition-transform">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-accent rounded-lg flex items-center justify-center shadow-md">
                    <Mail size={18} className="text-white" />
                  </div>
                  <span className="font-semibold break-all">kohinoorinteriors09@gmail.com</span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <a href="https://www.google.com/maps/place/Kohinoor+Interiors/@17.4823267,78.4192492,15z/data=!4m10!1m2!2m1!1sKohinoor+Interiors+Plot+No:+1%2FB-14+SV+Co-Operative+Industrial+Estate,+Balanagar+Main+Road,+Hyderabad,+Telangana+500037!3m6!1s0x3bcb91b243d1bcc3:0x69c0fb58de2d3c79!8m2!3d17.4704426!4d78.435808!15sCnZLb2hpbm9vciBJbnRlcmlvcnMgUGxvdCBObzogMS9CLTE0IFNWIENvLU9wZXJhdGl2ZSBJbmR1c3RyaWFsIEVzdGF0ZSwgQmFsYW5hZ2FyIE1haW4gUm9hZCwgSHlkZXJhYmFkLCBUZWxhbmdhbmEgNTAwMDM3kgEZaW50ZXJpb3JfYXJjaGl0ZWN0X29mZmljZeABAA!16s%2Fg%2F11xfs8xnr1?entry=ttu" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 text-sm">
                  <MapPin size={18} />
                  View on Maps
                </a>
                <a href="https://www.google.com/maps/dir//Kohinoor+Interiors,+MSR+Complex,+HDFC+Bank,+SVCIE,+Balanagar,+Hyderabad,+Telangana/@17.4514509,78.3468775,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb91b243d1bcc3:0x69c0fb58de2d3c79!2m2!1d78.435808!2d17.4704426!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center justify-center gap-2 text-sm">
                  <Navigation size={18} />
                  Get Directions
                </a>
              </div>
              <div className="mt-3 hidden md:flex items-center gap-3 text-xs text-muted-foreground">
                <span className="px-2 py-1 rounded-full bg-accent/10 border border-accent/20">OpenStreetMap</span>
                <span className="px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">Bing Maps</span>
                <span className="px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">Apple Maps</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Map Overlay Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-3">
          <button
            onClick={() => mapInstance.current?.setZoom(15)}
            className="glass rounded-xl p-3 shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-110 group"
            title="Reset Zoom"
          >
            <MapPin size={20} className="text-accent group-hover:text-gold-light transition-colors duration-300" />
          </button>
          
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
      <div className="mt-6 space-y-4">
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
        <div className="grid grid-cols-2 gap-3">
          <a
            href="https://www.google.com/maps/place/Kohinoor+Interiors/@17.4823267,78.4192492,15z/data=!4m10!1m2!2m1!1sKohinoor+Interiors+Plot+No:+1%2FB-14+SV+Co-Operative+Industrial+Estate,+Balanagar+Main+Road,+Hyderabad,+Telangana+500037!3m6!1s0x3bcb91b243d1bcc3:0x69c0fb58de2d3c79!8m2!3d17.4704426!4d78.435808!15sCnZLb2hpbm9vciBJbnRlcmlvcnMgUGxvdCBObzogMS9CLTE0IFNWIENvLU9wZXJhdGl2ZSBJbmR1c3RyaWFsIEVzdGF0ZSwgQmFsYW5hZ2FyIE1haW4gUm9hZCwgSHlkZXJhYmFkLCBUZWxhbmdhbmEgNTAwMDM3kgEZaW50ZXJpb3JfYXJjaGl0ZWN0X29mZmljZeABAA!16s%2Fg%2F11xfs8xnr1?entry=ttu"
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
            href={`https://www.openstreetmap.org/?mlat=${myLat}&mlon=${myLng}&zoom=15`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-105 flex items-center gap-1"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            OpenStreetMap
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

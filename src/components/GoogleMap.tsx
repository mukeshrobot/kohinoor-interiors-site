import React, { useEffect, useRef } from 'react';
import { MapPin, Navigation, ExternalLink, Phone, Mail } from 'lucide-react';
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
  const companyAddress = "Plot No: 1/B-14 SV Co-Operative Industrial Estate, Balanagar Main Road, Hyderabad, Telangana 500037";
  const encodedAddress = encodeURIComponent(companyAddress);
  
  // Hyderabad coordinates
  const myLat = 17.385044;
  const myLng = 78.486671;

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

      // Create custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            background: #D4AF37;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
          ">
            KI
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });

      // Add marker with custom icon
      const marker = L.marker([myLat, myLng], { icon: customIcon }).addTo(map);
      
      // Add popup with company information
      marker.bindPopup(`
        <div style="min-width: 200px; padding: 8px;">
          <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: 600;">
            🏢 Kohinoor Interiors
          </h3>
          <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px;">
            📍 ${companyAddress}
          </p>
          <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px;">
            📞 +91 9866652824
          </p>
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            ✉️ kohinoorinteriors09@gmail.com
          </p>
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
      {/* Real Interactive Map */}
      <div className="flex-1 relative bg-muted rounded-lg overflow-hidden">
        <div 
          ref={mapRef} 
          className="w-full h-full rounded-lg"
          style={{ minHeight: '300px' }}
        />
        
        {/* Map Overlay Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={() => mapInstance.current?.setZoom(15)}
            className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg hover:bg-white transition-colors"
            title="Reset Zoom"
          >
            <MapPin size={20} className="text-accent" />
          </button>
        </div>
      </div>
      
      {/* Company Information and Actions */}
      <div className="mt-4 space-y-3">
        {/* Contact Info */}
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="bg-accent p-2 rounded-full mt-0.5">
              <MapPin size={16} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-primary">Showroom Location</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {companyAddress}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={14} />
              <span>+91 9866652824</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={14} />
              <span>kohinoorinteriors09@gmail.com</span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
          >
            <MapPin size={16} />
            View on Google Maps
          </a>
          <a
            href={`https://www.google.com/maps/dir//${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 bg-accent text-white rounded-md text-sm hover:bg-accent/90 transition-colors"
          >
            <Navigation size={16} />
            Get Directions
          </a>
        </div>
        
        {/* Additional Map Services */}
        <div className="flex gap-2 text-xs">
          <a
            href={`https://www.openstreetmap.org/?mlat=${myLat}&mlon=${myLng}&zoom=15`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            OpenStreetMap
          </a>
          <span className="text-muted-foreground">•</span>
          <a
            href={`https://www.bing.com/maps?q=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Bing Maps
          </a>
          <span className="text-muted-foreground">•</span>
          <a
            href={`https://maps.apple.com/?q=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Apple Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;

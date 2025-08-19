export const MAPS_CONFIG = {
  // Replace with your actual Google Maps API key
  API_KEY: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY',
  
  // Default location (Hyderabad, Telangana)
  DEFAULT_CENTER: {
    lat: 17.3850,
    lng: 78.4867
  },
  
  // Default zoom level
  DEFAULT_ZOOM: 15,
  
  // Map styles for a cleaner look
  MAP_STYLES: [
    {
      featureType: 'poi.business',
      stylers: [{ visibility: 'simplified' }]
    },
    {
      featureType: 'transit',
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'landscape',
      stylers: [{ color: '#f5f5f5' }]
    },
    {
      featureType: 'road',
      stylers: [{ color: '#ffffff' }]
    }
  ]
};

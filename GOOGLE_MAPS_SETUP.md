# Google Maps Setup Guide

## Prerequisites
1. A Google Cloud Platform account
2. A Google Maps API key

## Setup Steps

### 1. Get Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API (optional, for enhanced features)
4. Go to Credentials → Create Credentials → API Key
5. Copy your API key

### 2. Configure Environment Variables
Create a `.env` file in the root directory of your project:

```bash
# Google Maps API Configuration
REACT_APP_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### 3. Update Configuration (Optional)
You can customize the map settings in `src/config/maps.ts`:
- Change the default location coordinates
- Adjust zoom level
- Modify map styles
- Update the company address

### 4. Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. You should see an interactive Google Map with your company location

## Features
- Interactive Google Maps integration
- Custom marker with company branding
- Responsive design
- Loading and error states
- Clean, professional map styling

## Troubleshooting
- **Map not loading**: Check your API key and ensure the Maps JavaScript API is enabled
- **API key errors**: Verify your API key is correct and has the necessary permissions
- **Styling issues**: Check the map styles configuration in `maps.ts`

## Security Notes
- Never commit your actual API key to version control
- Use environment variables for sensitive configuration
- Consider restricting your API key to specific domains/IPs in Google Cloud Console

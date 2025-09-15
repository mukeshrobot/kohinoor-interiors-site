import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-living-room.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center mt-1 text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          <div className="mb-2">Transforming Spaces</div>
          <div className="text-accent">with Excellence</div>
        </h1>
        {/* <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm md:text-base font-semibold">
          100% Cutumized Interious By Proffesional
        </div> */}
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 animate-slide-up leading-relaxed">
          Creating stunning interiors that reflect your vision and lifestyle. 
          Over 5 years of craftsmanship and design excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
          <Button variant="gold-outline" size="xl" asChild>
            <Link to="/projects">View Our Work</Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
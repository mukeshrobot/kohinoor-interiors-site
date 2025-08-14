import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Building, Hammer } from "lucide-react";
import residentialImage from "@/assets/service-residential.jpg";
import officeImage from "@/assets/service-office.jpg";
import constructionImage from "@/assets/service-construction.jpg";

const Services = () => {
  const services = [
    {
      title: "Residential Interior Design",
      description: "Transform your home into a beautiful, functional living space that reflects your personal style and needs.",
      image: residentialImage,
      icon: Home,
    },
    {
      title: "Office Renovation",
      description: "Create inspiring workspaces that boost productivity and reflect your company's brand and culture.",
      image: officeImage,
      icon: Building,
    },
    {
      title: "Custom Construction Projects",
      description: "From concept to completion, we handle all aspects of your custom construction and renovation needs.",
      image: constructionImage,
      icon: Hammer,
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive interior design and construction services 
            to bring your vision to life with exceptional quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <div className="bg-accent p-3 rounded-full">
                    <service.icon size={24} className="text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="gold-outline" className="w-full" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
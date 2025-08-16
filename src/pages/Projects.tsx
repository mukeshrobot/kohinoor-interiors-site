import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import kitchenImage from "@/assets/project-kitchen.jpg";
import bedroomImage from "@/assets/project-bedroom.jpg";
import officeImage from "@/assets/project-office.jpg";
import lobbyImage from "@/assets/project-lobby.jpg";

const Projects = () => {
  const getProjectRoute = (title: string) => {
    switch (title) {
      case "Modern Kitchen":
        return "/projects/modern-kitchen";
      case "Cozy Bedroom":
        return "/projects/cozy-bedroom";
      case "Corporate Office":
        return "/projects/corporate-office";
      case "Luxury Lobby":
        return "/projects/luxury-lobby";
      default:
        return "/projects";
    }
  };

  const projects = [
    {
      title: "Modern Kitchen",
      category: "Residential",
      location: "Downtown Apartment",
      date: "2024",
      image: kitchenImage,
      description: "A sleek and functional kitchen design featuring premium appliances, marble countertops, and contemporary cabinetry.",
    },
    {
      title: "Cozy Bedroom",
      category: "Residential",
      location: "Suburban Villa",
      date: "2024",
      image: bedroomImage,
      description: "A warm and inviting bedroom retreat with custom furniture, ambient lighting, and luxurious finishes.",
    },
    {
      title: "Corporate Office",
      category: "Commercial",
      location: "Business District",
      date: "2023",
      image: officeImage,
      description: "Professional workspace design that promotes productivity and reflects the company's modern brand identity.",
    },
    {
      title: "Luxury Lobby",
      category: "Commercial",
      location: "Hotel Complex",
      date: "2023",
      image: lobbyImage,
      description: "An elegant hotel lobby featuring premium materials, sophisticated lighting, and timeless design elements.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Our <span className="text-accent">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our portfolio of stunning interior design and construction projects. 
                Each space tells a unique story of transformation, creativity, and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                  <Link to={getProjectRoute(project.title)} className="block">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-300" />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white">
                        <div className="bg-accent px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                          {project.category}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <div className="flex items-center space-x-4 text-sm opacity-90">
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{project.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="gold" size="lg" asChild>
                        <Link to={getProjectRoute(project.title)}>
                          <ExternalLink size={20} className="mr-2" />
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-accent">Project?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let us transform your space into something extraordinary. 
              Contact us today to discuss your vision and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button variant="gold-outline" size="xl" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
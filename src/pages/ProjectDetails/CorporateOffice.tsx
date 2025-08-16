import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, Users, Clock, DollarSign, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import officeImage from "@/assets/project-office.jpg";

const CorporateOffice = () => {
  const projectDetails = {
    title: "Corporate Office",
    category: "Commercial",
    location: "Business District",
    date: "2023",
    duration: "12 weeks",
    budget: "$180,000",
    team: "8 specialists",
    description: "Professional workspace design that promotes productivity and reflects the company's modern brand identity.",
    longDescription: "This corporate office transformation represents a complete reimagining of a traditional workspace into a modern, collaborative environment. Located in the heart of the business district, the project focused on creating a space that not only enhances productivity but also serves as a powerful tool for talent attraction and retention.",
    features: [
      "Open-concept collaborative zones",
      "Private meeting rooms with AV systems",
      "Flexible workstations and hot-desking",
      "Breakout areas and lounge spaces",
      "Advanced lighting and climate control",
      "Acoustic design for noise management",
      "Brand integration throughout",
      "Sustainable materials and practices"
    ],
    specifications: {
      dimensions: "8,500 sq ft",
      style: "Modern Corporate",
      colorScheme: "Professional Neutrals with Brand Accents",
      materials: "Glass, Steel, Engineered Wood, and Fabric",
      systems: "Smart Building Integration"
    },
    challenges: "The main challenge was transforming a traditional cubicle-based office into a modern, flexible workspace while maintaining the building's structural integrity. We needed to accommodate different work styles and create spaces that could adapt to changing business needs.",
    solutions: "We implemented a modular design approach with movable partitions and flexible furniture systems. The space was divided into distinct zones for different types of work - collaborative areas, quiet zones, and meeting spaces. Advanced technology integration was seamlessly incorporated to support modern work practices.",
    results: "The final result is a dynamic workspace that has significantly improved employee satisfaction and productivity. The modern design has become a key differentiator in talent recruitment, and the flexible layout has proven invaluable as the company continues to grow and evolve."
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <img 
            src={officeImage} 
            alt="Corporate Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                  {projectDetails.category}
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  {projectDetails.title}
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                  {projectDetails.longDescription}
                </p>
                <div className="flex flex-wrap gap-6 text-white">
                  <div className="flex items-center space-x-2">
                    <MapPin size={20} />
                    <span>{projectDetails.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={20} />
                    <span>{projectDetails.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={20} />
                    <span>{projectDetails.duration}</span>
                  </div>
                  {/* <div className="flex items-center space-x-2">
                    <DollarSign size={20} />
                    <span>{projectDetails.budget}</span>
                  </div> */}
                  <div className="flex items-center space-x-2">
                    <Users size={20} />
                    <span>{projectDetails.team}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <section className="py-6 bg-background">
          <div className="container mx-auto px-4">
            <Button variant="outline" asChild>
              <Link to="/projects" className="flex items-center space-x-2">
                <ArrowLeft size={16} />
                <span>Back to Projects</span>
              </Link>
            </Button>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Project Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {projectDetails.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {projectDetails.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="text-accent" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Technical Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Dimensions & Layout</h4>
                      <p className="text-muted-foreground">{projectDetails.specifications.dimensions}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Design Style</h4>
                      <p className="text-muted-foreground">{projectDetails.specifications.style}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Color Scheme</h4>
                      <p className="text-muted-foreground">{projectDetails.specifications.colorScheme}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Materials Used</h4>
                      <p className="text-muted-foreground">{projectDetails.specifications.materials}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Systems Integration</h4>
                      <p className="text-muted-foreground">{projectDetails.specifications.systems}</p>
                    </div>
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Challenges & Solutions</h2>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-3">Challenges</h4>
                      <p className="text-muted-foreground leading-relaxed">{projectDetails.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-3">Solutions</h4>
                      <p className="text-muted-foreground leading-relaxed">{projectDetails.solutions}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Results & Impact</h2>
                  <p className="text-muted-foreground leading-relaxed">{projectDetails.results}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">Project Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <span className="font-medium">{projectDetails.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">{projectDetails.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Completion:</span>
                        <span className="font-medium">{projectDetails.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{projectDetails.duration}</span>
                      </div>
                      {/* <div className="flex justify-between">
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium">{projectDetails.budget}</span>
                      </div> */}
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Team Size:</span>
                        <span className="font-medium">{projectDetails.team}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">Transform Your Workspace</h3>
                    <p className="text-muted-foreground mb-4">
                      Ready to create a modern, productive office environment? Let's discuss your vision.
                    </p>
                    <Button className="w-full" asChild>
                      <Link to="/contact">Get a Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for a Modern <span className="text-accent">Workspace?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let us transform your office into a space that inspires creativity and productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="gold-outline" size="xl" asChild>
                <Link to="/projects">View More Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CorporateOffice; 
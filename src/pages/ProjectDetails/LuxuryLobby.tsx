import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, Users, Clock, DollarSign, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import lobbyImage from "@/assets/project-lobby.jpg";
import logoImg from "../../../public/logo.png";

const LuxuryLobby = () => {
  const projectDetails = {
    title: "Luxury Lobby",
    category: "Commercial",
    location: "Hotel Complex",
    date: "2023",
    duration: "16 weeks",
    budget: "$320,000",
    team: "12 specialists",
    description: "An elegant hotel lobby featuring premium materials, sophisticated lighting, and timeless design elements.",
    longDescription: "This luxury hotel lobby transformation represents the pinnacle of hospitality design, creating an unforgettable first impression for guests. Located in a prestigious hotel complex, the project focused on creating a space that embodies luxury, comfort, and sophistication while maintaining the highest standards of functionality and guest experience.",
    features: [
      "Grand entrance with custom chandeliers",
      "Premium marble and stone finishes",
      "Custom furniture and seating areas",
      "Advanced ambient lighting systems",
      "Integrated art and sculpture displays",
      "Luxury reception and concierge areas",
      "Sophisticated color palette",
      "Acoustic design for comfort"
    ],
    specifications: {
      dimensions: "6,200 sq ft",
      style: "Contemporary Luxury",
      colorScheme: "Rich Neutrals with Gold Accents",
      materials: "Marble, Granite, Brass, Crystal, and Premium Fabrics",
      lighting: "Custom LED and Crystal Systems"
    },
    challenges: "The main challenge was creating a lobby that would serve as both a functional space for hotel operations and a stunning visual statement that would enhance the hotel's brand positioning. We needed to balance aesthetic appeal with practical functionality while working within the constraints of an existing building structure.",
    solutions: "We implemented a layered design approach that created distinct zones for different functions while maintaining visual cohesion. Custom lighting was designed to create different moods throughout the day, and premium materials were carefully selected for both beauty and durability. The space was designed to be both impressive and welcoming.",
    results: "The final result is a lobby that has become a destination in itself, significantly enhancing the hotel's reputation and guest satisfaction scores. The luxurious design has attracted high-end clientele and has been featured in several design publications, establishing the hotel as a leader in luxury hospitality design."
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <img 
            src={lobbyImage} 
            alt="Luxury Lobby"
            className="w-full h-full object-cover"
          />
          <img src={logoImg} alt="Logo" className="absolute opacity-80 top-[70px] right-[0px] transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] object-cover group-hover:scale-105 transition-transform duration-500 z-10" />
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
                      <h4 className="font-semibold text-primary mb-3">Lighting Systems</h4>
                      <p className="text-muted-foreground">{projectDetails.specifications.lighting}</p>
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
                        <span className="text-muted-foreground"> Budget:</span>
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
                    <h3 className="text-xl font-bold text-primary mb-4">Create Luxury Spaces</h3>
                    <p className="text-muted-foreground mb-4">
                      Ready to create an unforgettable luxury experience? Let's discuss your vision.
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
              Dream of Luxury <span className="text-accent">Spaces?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let us create spaces that leave lasting impressions and elevate your brand to new heights.
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

export default LuxuryLobby; 
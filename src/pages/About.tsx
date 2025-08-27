import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Target } from "lucide-react";
import constructionSiteImage from "@/assets/construction-site.jpg";

const About = () => {
  const stats = [
    { icon: Clock, value: "5+", label: "Years Experience" },
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Award, value: "5+", label: "Awards Won" },
    { icon: Target, value: "50+", label: "Projects Completed" },
  ];

  const team = [
    {
      name: "Muralidhar Reddy",
      role: "Founder & Lead Designer",
      description: "With over 15 years of experience in interior design and construction management.",
    },
    {
      name: "Suma M",
      role: "Senior Architect",
      description: "Specializes in residential and commercial space planning with a focus on sustainability.",
    },
    {
      name: "Dilip Kumar",
      role: "Project Manager",
      description: "Ensures every project is delivered on time and exceeds client expectations.",
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
                About <span className="text-accent">Kohinoor Interiors</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over 15 years, Kohinoor Interiors has been at the forefront of innovative 
                interior design and construction. We believe that every space tells a story, 
                and our mission is to help you tell yours through exceptional design and craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <stat.icon size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${constructionSiteImage})` }}
          />
          <div className="absolute inset-0 gradient-overlay" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-accent mb-4">Our Mission</h3>
                  <p className="text-gray-200 leading-relaxed">
                    To transform ordinary spaces into extraordinary environments that inspire, 
                    comfort, and reflect the unique personality of our clients. We are committed 
                    to delivering exceptional quality, innovative design solutions, and 
                    unparalleled customer service.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-accent mb-4">Our Vision</h3>
                  <p className="text-gray-200 leading-relaxed">
                    To be the leading interior design and construction company, recognized 
                    for our creativity, quality craftsmanship, and ability to bring our 
                    clients' dreams to life. We envision a future where every space we 
                    touch becomes a masterpiece of design and functionality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Meet Our <span className="text-accent">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our passionate team of designers, architects, and project managers 
                work together to bring your vision to life with expertise and dedication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users size={40} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                    <p className="text-accent font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
                Our <span className="text-accent">Values</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Quality Excellence</h3>
                    <p className="text-muted-foreground">
                      We never compromise on quality. Every material, every detail, 
                      and every finish meets our rigorous standards of excellence.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Innovation</h3>
                    <p className="text-muted-foreground">
                      We stay ahead of design trends and embrace new technologies 
                      to deliver cutting-edge solutions for our clients.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Client Focus</h3>
                    <p className="text-muted-foreground">
                      Your satisfaction is our priority. We listen, understand, 
                      and deliver exactly what you envision for your space.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Sustainability</h3>
                    <p className="text-muted-foreground">
                      We are committed to environmentally responsible practices 
                      and sustainable design solutions for a better future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
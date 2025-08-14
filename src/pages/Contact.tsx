import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactBgImage from "@/assets/contact-background.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Quote Request Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Get in <span className="text-accent">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to transform your space? Let's discuss your project and bring your vision to life. 
                Get a personalized quote today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background relative">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-5"
            style={{ backgroundImage: `url(${contactBgImage})` }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">Get a Quote</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="Enter your full name"
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="projectType">Project Type</Label>
                        <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message / Project Description *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      Send Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-elegant">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-accent p-3 rounded-full">
                          <Phone size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">Phone</h4>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                          <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-accent p-3 rounded-full">
                          <Mail size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">Email</h4>
                          <p className="text-muted-foreground">info@kohinoorinteriors.com</p>
                          <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-accent p-3 rounded-full">
                          <MapPin size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">Address</h4>
                          <p className="text-muted-foreground">123 Design Street</p>
                          <p className="text-muted-foreground">City, State 12345</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-accent p-3 rounded-full">
                          <Clock size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">Business Hours</h4>
                          <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                          <p className="text-muted-foreground">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card className="shadow-elegant">
                  <CardContent className="p-0">
                    <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin size={48} className="text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Interactive Map</p>
                        <p className="text-sm text-muted-foreground">Visit us at our showroom</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-primary text-center mb-12">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">How long does a typical project take?</h3>
                    <p className="text-muted-foreground">
                      Project timelines vary based on scope and complexity. Residential projects typically take 4-8 weeks, 
                      while commercial projects may take 8-16 weeks.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">Do you provide free consultations?</h3>
                    <p className="text-muted-foreground">
                      Yes! We offer complimentary initial consultations to discuss your project, 
                      understand your needs, and provide preliminary recommendations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">What's included in your service?</h3>
                    <p className="text-muted-foreground">
                      Our comprehensive service includes design consultation, 3D visualization, 
                      project management, construction coordination, and post-completion support.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">Do you work within budgets?</h3>
                    <p className="text-muted-foreground">
                      Absolutely! We work with various budgets and will provide options and recommendations 
                      that align with your financial parameters without compromising quality.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
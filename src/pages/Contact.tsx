import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactBgImage from "@/assets/contact-background.jpg";
import GoogleMap from "@/components/GoogleMap";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration - you'll need to set these up
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        from_phone: formData.phone,
        project_type: formData.projectType || 'Not specified',
        message: formData.message,
        to_name: 'Kohinoor Interiors Team',
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Show success message
      toast({
        title: "Quote Request Sent Successfully!",
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

    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Email Sending Failed",
        description: "There was an error sending your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

        {/* Owner Profile Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Owner Image */}
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl shadow-accent/20">
                      <img
                        src="/profile.jpg"
                        alt="Kohinoor Interiors Owner"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback if image doesn't load */}
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center" style={{ display: 'none' }}>
                        <div className="text-center">
                          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <p className="text-primary font-semibold">Owner Profile</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-80"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-60"></div>
                    <div className="absolute top-1/2 -left-6 w-4 h-4 bg-accent rounded-full opacity-40 transform -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Company Description */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                      Meet Our <span className="text-accent">Vision</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto lg:mx-0 mb-8"></div>
                  </div>
                  
                  <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                    <p className="text-xl font-medium text-primary leading-relaxed">
                      At <span className="text-accent font-semibold">Kohinoor Interiors Hyderabad</span>, we specialize in creating innovative, functional, and aesthetically captivating interior spaces across Residential, Commercial, Retail, and Corporate projects.
                    </p>
                    
                    <p>
                      Our approach combines creativity, precision, and practicality, ensuring that every design is not only visually striking but also tailored to enhance comfort, efficiency, and long-term value.
                    </p>
                    
                    <p>
                      From the initial concept and design consultation to detailed planning and flawless execution, we manage each project with a balance of artistic vision and technical expertise. Whether it's designing a dream home, a modern workplace, or a dynamic retail environment, we craft interiors that reflect individuality, strengthen brand identity, and inspire everyone who experiences them.
                    </p>
                    
                    <p className="text-lg font-medium text-primary">
                      With a commitment to quality craftsmanship, attention to detail, and timely delivery, we transform ideas into living, functional, and inspiring environments—bringing every project from concept to completion with excellence.
                    </p>
                  </div>

                  {/* Company Highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-accent mb-1">500+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-accent mb-1">8+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-accent mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
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

                    <Button 
                      type="submit" 
                      variant="gold" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Quote Request'
                      )}
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
                          <p className="text-muted-foreground">+ 91 9866652824</p>
                          <p className="text-sm text-muted-foreground">Mon-Sat: 9:30 AM - 6:00 PM</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-accent p-3 rounded-full">
                          <Mail size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">Email</h4>
                          <p className="text-muted-foreground">kohinoorinteriors09@gmail.com</p>
                          <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-accent p-3 rounded-full">
                          <MapPin size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">Address</h4>
                          <p className="text-muted-foreground">Plot No: 1/B-14 SV Co-Operative Industrial Estate</p>
                          <p className="text-muted-foreground">Balanagar Main Road, Hyderabad, Telangana, 500037</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-accent p-3 rounded-full">
                          <Clock size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">Business Hours</h4>
                          <p className="text-muted-foreground">Monday - Saturday: 9:30 AM - 6:00 PM</p>
                          <p className="text-muted-foreground">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Interactive Google Map */}
                <Card className="shadow-elegant">
                  <CardContent className="p-0">
                    <div className="h-80 bg-muted rounded-lg overflow-hidden">
                      <GoogleMap />
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
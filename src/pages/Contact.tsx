import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Loader2, Sparkles, Star, Award, Users, CheckCircle, ArrowRight, Zap, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactBgImage from "@/assets/contact-background.jpg";
import GoogleMap from "@/components/GoogleMap";


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
  const [submissionStatus, setSubmissionStatus] = useState<string>("");

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
    setSubmissionStatus("Connecting to server...");

    // Show initial toast about potential delay
    toast({
      title: "Sending Request...",
      description: "Our server may take up to 60 seconds to wake up. Please be patient...",
      duration: 5000,
    });

    // Declare timeouts outside try block so they can be cleared in catch
    let timeoutId: NodeJS.Timeout | null = null;
    let statusTimeout: NodeJS.Timeout | null = null;

    try {
      // Create AbortController for timeout handling
      const controller = new AbortController();
      timeoutId = setTimeout(() => {
        controller.abort();
      }, 90000); // 90 second timeout to handle 50+ second cold start

      // Update status message after 10 seconds to inform about server wake-up
      statusTimeout = setTimeout(() => {
        setSubmissionStatus("Server is waking up, this may take up to 60 seconds...");
      }, 10000); // Show this message after 10 seconds

      // API endpoint for sending quote requests
      const response = await fetch('https://kohinnor-backend.vercel.app/send-quote', {
        method: 'POST',
        mode: 'cors', // Explicitly set CORS mode
        credentials: 'omit', // Don't send credentials to avoid CORS issues
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType || 'Not specified',
          message: formData.message,
        }),
        signal: controller.signal,
      });

      if (timeoutId) clearTimeout(timeoutId);
      if (statusTimeout) clearTimeout(statusTimeout);

      // Handle different HTTP status codes
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('401: Unauthorized - Server authentication failed');
        } else if (response.status === 403) {
          throw new Error('403: Forbidden - Access denied');
        } else if (response.status === 404) {
          throw new Error('404: Not Found - API endpoint not found');
        } else if (response.status >= 500) {
          throw new Error(`Server error: ${response.status}`);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }

      const result = await response.json();

      // Show success message
      toast({
        title: "Quote Request Sent Successfully! 🎉",
        description: "Thank you for your interest. We'll get back to you within 24 hours with a personalized quote.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });

      setSubmissionStatus("");
      console.log('Quote request sent successfully:', result);

    } catch (error: any) {
      console.error('Quote request failed:', error);
      
      // Clear any pending timeouts
      if (timeoutId) clearTimeout(timeoutId);
      if (statusTimeout) clearTimeout(statusTimeout);
      
      // Check if it's a timeout/abort error
      if (error.name === 'AbortError' || error.message?.includes('aborted')) {
        toast({
          title: "Request Timeout",
          description: "The server took too long to respond. This usually means the server is waking up. Please try again in a moment, or contact us directly at +91 9866652824.",
          variant: "destructive",
          duration: 10000,
        });
      } 
      // Check for CORS errors
      else if (error.message?.includes('CORS') || error.message?.includes('Failed to fetch') || error.name === 'TypeError') {
        toast({
          title: "Connection Error",
          description: "Unable to connect to the server. This may be a CORS configuration issue. Please contact us directly at +91 9866652824 or email kohinoorinteriors09@gmail.com.",
          variant: "destructive",
          duration: 10000,
        });
      }
      // Check for 401/403 authentication errors
      else if (error.message?.includes('401') || error.message?.includes('403')) {
        toast({
          title: "Authentication Error",
          description: "The server rejected the request. Please contact us directly at +91 9866652824 or email kohinoorinteriors09@gmail.com.",
          variant: "destructive",
          duration: 10000,
        });
      }
      else {
        toast({
          title: "Quote Request Failed",
          description: "There was an error sending your request. The server may be starting up or there's a configuration issue. Please try again in a moment or contact us directly at +91 9866652824.",
          variant: "destructive",
          duration: 8000,
        });
      }
      setSubmissionStatus("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Navigation />
      
      <main className="pt-20">
        {/* Enhanced Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
          {/* Enhanced Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
            <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
                <Sparkles className="w-5 h-5 text-accent mr-2 animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Ready to Transform Your Space?</span>
                <Zap className="w-5 h-5 text-accent ml-2 animate-pulse delay-1000" />
              </div>
              
              {/* Enhanced Title */}
              <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 leading-tight animate-slide-in-up">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-400 to-accent animate-pulse">Touch</span>
              </h1>
              
              {/* Enhanced Description */}
              <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed mb-12 max-w-4xl mx-auto animate-slide-in-up delay-200">
                Ready to transform your space? Let's discuss your project and bring your vision to life. 
                Get a personalized quote today and experience the magic of exceptional interior design.
              </p>
              
              {/* Enhanced Action Buttons */}
              <div className="flex flex-wrap justify-center gap-6 animate-slide-in-up delay-400">
                <Button 
                  variant="gold" 
                  size="lg" 
                  className="btn-primary px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-110 group"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Star className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Get Free Quote
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="px-10 py-5 text-xl font-bold border-2 border-white/50 text-white hover:bg-white/20 hover:border-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 group bg-white/5"
                >
                  <a href="tel:+919866652824">
                    <span className="inline-flex items-center">
                      <Phone className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      Call Now
                      <Heart className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                  </a>
                </Button>
              </div>

              {/* Enhanced Floating Stats */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in-up delay-600">
                <div className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-white/80 text-sm">Projects Completed</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-white/80 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview Section (profile image removed) */}
        <section className="py-32 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-pattern"></div>
            <div className="absolute inset-0 bg-mesh opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 gap-20 items-center">
                {/* Company Description */}
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-full border border-accent/20 mb-8">
                      <Star className="w-5 h-5 text-accent mr-2 animate-pulse" />
                      <span className="text-accent font-bold text-sm">Our Vision</span>
                    </div>
                    
                    <h2 className="text-6xl md:text-7xl font-bold text-primary mb-8 leading-tight">
                      Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-600 to-accent">Vision</span>
                    </h2>
                    <div className="w-40 h-2 bg-gradient-to-r from-accent to-blue-500 mx-auto lg:mx-0 mb-12 rounded-full shadow-glow"></div>
                  </div>
                  
                  <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                    <p className="text-2xl font-medium text-primary leading-relaxed">
                      At <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600 font-bold">Kohinoor Interiors Hyderabad</span>, we specialize in creating innovative, functional, and aesthetically captivating interior spaces across Residential, Commercial, Retail, and Corporate projects.
                    </p>
                    
                    <p className="text-xl leading-relaxed">
                      Our approach combines creativity, precision, and practicality, ensuring that every design is not only visually striking but also tailored to enhance comfort, efficiency, and long-term value.
                    </p>
                    
                    <p className="text-xl leading-relaxed">
                      From the initial concept and design consultation to detailed planning and flawless execution, we manage each project with a balance of artistic vision and technical expertise. Whether it's designing a dream home, a modern workplace, or a dynamic retail environment, we craft interiors that reflect individuality, strengthen brand identity, and inspire everyone who experiences them.
                    </p>
                    
                    <p className="text-2xl font-semibold text-primary leading-relaxed">
                      With a commitment to quality craftsmanship, attention to detail, and timely delivery, we transform ideas into living, functional, and inspiring environments—bringing every project from concept to completion with excellence.
                    </p>
                  </div>

                  {/* Enhanced Company Highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                    <div className="group text-center p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 hover:scale-110 border border-blue-100/50 hover:border-accent/30">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent to-yellow-400 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-gold">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-accent mb-3">50+</div>
                      <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
                    </div>
                    
                    <div className="group text-center p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 hover:scale-110 border border-blue-100/50 hover:border-accent/30">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-gold">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-accent mb-3">5+</div>
                      <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                    </div>
                    
                    <div className="group text-center p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 hover:scale-110 border border-blue-100/50 hover:border-accent/30">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-gold">
                        <Star className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-accent mb-3">100%</div>
                      <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
                    </div>
                    
                    <div className="group text-center p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-500 hover:scale-110 border border-blue-100/50 hover:border-accent/30">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-gold">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-accent mb-3">24/7</div>
                      <div className="text-sm text-muted-foreground font-medium">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Form & Info */}
        <section id="contact-form" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
          {/* Enhanced Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 via-transparent to-blue-500/5"></div>
            <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-full border border-accent/20 mb-8">
                <Mail className="w-5 h-5 text-accent mr-2" />
                <span className="text-accent font-bold text-sm">Get In Touch</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">Project?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours with a personalized quote. 
                Let's create something extraordinary together!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Enhanced Contact Form */}
              <Card className="card-elegant border-0 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden group hover:shadow-3xl transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <CardContent className="p-12 relative z-10">
                  <div className="flex items-center mb-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-400 rounded-3xl flex items-center justify-center mr-6 shadow-gold">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-primary">Get a Quote</h3>
                      <p className="text-muted-foreground text-lg">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <Label htmlFor="fullName" className="text-sm font-bold text-primary mb-3 block">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="Enter your full name"
                          className="input-elegant h-14 text-lg"
                        />
                      </div>
                      
                      <div className="group">
                        <Label htmlFor="email" className="text-sm font-bold text-primary mb-3 block">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          className="input-elegant h-14 text-lg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <Label htmlFor="phone" className="text-sm font-bold text-primary mb-3 block">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                          className="input-elegant h-14 text-lg"
                        />
                      </div>
                      
                      <div className="group">
                        <Label htmlFor="projectType" className="text-sm font-bold text-primary mb-3 block">Project Type</Label>
                        <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                          <SelectTrigger className="input-elegant h-14 text-lg">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">🏠 Residential</SelectItem>
                            <SelectItem value="commercial">🏢 Commercial</SelectItem>
                            <SelectItem value="retail">🛍️ Retail</SelectItem>
                            <SelectItem value="corporate">🏢 Corporate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="group">
                      <Label htmlFor="message" className="text-sm font-bold text-primary mb-3 block">Message / Project Description *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project, requirements, and vision..."
                        rows={6}
                        className="input-elegant text-lg resize-none"
                      />
                    </div>



                    {/* Submission status message */}
                    {submissionStatus && (
                      <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <Loader2 className="w-5 h-5 text-amber-600 animate-spin" />
                          <p className="text-sm font-medium text-amber-900">{submissionStatus}</p>
                        </div>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      variant="gold" 
                      size="lg" 
                      className="btn-primary w-full h-16 text-xl font-bold shadow-2xl hover:shadow-glow transition-all duration-500 hover:scale-105 rounded-2xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                          {submissionStatus || "Sending Quote Request..."}
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-3 h-6 w-6" />
                          Get Free Quote
                          <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Enhanced Contact Information */}
              <div className="space-y-8">
                <Card className="card-elegant border-0 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden group hover:shadow-3xl transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <CardContent className="p-12 relative z-10">
                    <div className="flex items-center mb-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-accent rounded-3xl flex items-center justify-center mr-6 shadow-gold">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-primary">Contact Information</h3>
                        <p className="text-muted-foreground text-lg">Get in touch with us</p>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="flex items-start space-x-6 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-400 p-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-gold">
                          <Phone size={28} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-xl mb-2">Phone</h4>
                          <div className="flex items-center gap-4 flex-wrap">
                            <a href="tel:+919866652824" className="text-xl text-muted-foreground font-medium hover:text-accent transition-colors">+91 9866652824</a>
                            <a href="https://wa.me/919866652824" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500 text-white text-sm hover:bg-green-600 transition-colors">
                              <span>WhatsApp us</span>
                            </a>
                          </div>
                          <p className="text-sm text-muted-foreground">Mon-Sun: 9:30 AM - 6:00 PM</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-6 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-accent p-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-gold">
                          <Mail size={28} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-xl mb-2">Email</h4>
                          <p className="text-base md:text-xl text-muted-foreground break-all whitespace-normal max-w-full">kohinoorinteriors09@gmail.com</p>
                          <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-6 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-accent p-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-gold">
                          <MapPin size={28} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-xl mb-2">Address</h4>
                          <p className="text-xl text-muted-foreground font-medium">Kohinoor Interiors, MSR Complex</p>
                          <p className="text-xl text-muted-foreground font-medium">beside HDFC Bank, SVCIE, Balanagar</p>
                          <p className="text-xl text-muted-foreground font-medium">Hyderabad, Telangana 500037</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-6 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-accent p-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-gold">
                          <Clock size={28} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-xl mb-2">Business Hours</h4>
                          <p className="text-xl text-muted-foreground font-medium">Monday - Sunday: 9:30 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Google Map */}
                <Card className="card-elegant border-0 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden group hover:shadow-3xl transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <CardContent className="p-0 relative z-10">
                    <div className="h-[560px] md:h-[640px] bg-muted rounded-2xl overflow-hidden">
                      <GoogleMap />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Sparkles className="w-5 h-5 text-accent mr-2" />
                <span className="text-white/90 text-sm font-medium">Common Questions</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-400">Questions</span>
              </h2>
              <p className="text-xl text-blue-100/80 max-w-4xl mx-auto">
                Get answers to the most common questions about our services and process. 
                We're here to help you understand everything about your project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Card className="card-glass border-0 bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden group hover:bg-white/20 transition-all duration-700 hover:scale-105">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-400 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-gold">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">How long does a typical project take?</h3>
                      <p className="text-blue-100/80 leading-relaxed text-lg">
                        Project timelines vary based on scope and complexity. Residential projects typically take 4-8 weeks, 
                        while commercial projects may take 8-16 weeks. We'll provide a detailed timeline during consultation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glass border-0 bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden group hover:bg-white/20 transition-all duration-700 hover:scale-105">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-accent rounded-3xl flex items-center justify-center flex-shrink-0 shadow-gold">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Do you provide free consultations?</h3>
                      <p className="text-blue-100/80 leading-relaxed text-lg">
                        Yes! We offer complimentary initial consultations to discuss your project, 
                        understand your needs, and provide preliminary recommendations. No obligation, just great advice.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glass border-0 bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden group hover:bg-white/20 transition-all duration-700 hover:scale-105">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-accent rounded-3xl flex items-center justify-center flex-shrink-0 shadow-gold">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">What's included in your service?</h3>
                      <p className="text-blue-100/80 leading-relaxed text-lg">
                        Our comprehensive service includes design consultation, 3D visualization, 
                        project management, construction coordination, and post-completion support. We handle everything!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glass border-0 bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden group hover:bg-white/20 transition-all duration-700 hover:scale-105">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-accent rounded-3xl flex items-center justify-center flex-shrink-0 shadow-gold">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Do you work within budgets?</h3>
                      <p className="text-blue-100/80 leading-relaxed text-lg">
                        Absolutely! We work with various budgets and will provide options and recommendations 
                        that align with your financial parameters without compromising quality. Your budget is our guide.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced CTA Section */}
            <div className="mt-20 text-center">
              <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-400">Dream Project?</span>
                </h3>
                <p className="text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
                  Don't wait any longer! Contact us today and let's transform your space into something extraordinary.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    variant="gold" 
                    size="lg" 
                    className="btn-primary px-8 py-4 text-lg font-bold"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get Started Today
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg" 
                    className="px-10 py-5 text-xl font-bold border-2 border-white/50 text-white hover:bg-white/20 hover:border-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 group bg-white/5"
                  >
                    <a href="tel:+919866652824" className="inline-flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us Now
                    </a>
                  </Button>
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

export default Contact;
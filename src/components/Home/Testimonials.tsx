import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sadhanandha Reddy",
      role: "Homeowner",
      content: "Kohinoor Interiors exceeded all our expectations! They transformed our living space into something truly magical. Their attention to detail and creative vision is absolutely outstanding. We're so grateful for their exceptional work!",
      rating: 5,
    },
    {
      name: "Soundarya",
      role: "Property Owner",
      content: "Working with Kohinoor Interiors was an amazing experience from start to finish. They understood our vision perfectly and delivered beyond what we imagined. The quality and craftsmanship are simply outstanding!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Kohinoor Interiors transformed our home beyond our wildest dreams. Their attention to detail and creative vision is unmatched. We couldn't be happier with the results!",
      rating: 5,
    },
    {
      name: "Narayana Reddy",
      role: "Business Owner",
      content: "The office renovation was completed on time and exceeded all expectations. Our employees love the new workspace, and clients are constantly complimenting the design.",
      rating: 5,
    },
    {
      name: "Venkateshwara Rao",
      role: "Property Developer",
      content: "Working with Kohinoor Interiors has been a game-changer for our luxury developments. Their expertise and professionalism are truly exceptional.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={24} className="text-accent fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-muted-foreground mb-8 italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div>
                  <p className="text-lg font-semibold text-primary">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="gold"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={20} />
          </Button>

          <Button
            variant="gold"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full"
            onClick={nextTestimonial}
          >
            <ChevronRight size={20} />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-accent" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import bedroomImg from "@/assets/project-bedroom.jpg";

const Bedroom = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img src={bedroomImg} alt="Bedroom" className="w-full h-72 md:h-[460px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <h1 className="absolute bottom-6 left-6 text-white text-4xl md:text-6xl font-extrabold">Bedroom</h1>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Comfort-First Bedroom Designs</h2>
                <p className="text-muted-foreground text-lg">
                  We combine soothing palettes, smart storage and ergonomic furniture to create bedrooms that
                  feel restful and luxurious. From wardrobes and study units to accent walls and lighting —
                  every detail is tailored to your lifestyle.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="p-4 rounded-xl bg-accent/5 border border-accent/10">Customized wardrobes and loft storage</li>
                  <li className="p-4 rounded-xl bg-accent/5 border border-accent/10">Headboard wall paneling and textures</li>
                  <li className="p-4 rounded-xl bg-accent/5 border border-accent/10">Ambient and task lighting layers</li>
                  <li className="p-4 rounded-xl bg-accent/5 border border-accent/10">Study/work corner planning</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-blue-500/10 border border-accent/20">
                <h3 className="text-xl font-semibold mb-2 text-primary">Book a Design Consultation</h3>
                <p className="text-muted-foreground mb-4">Tell us your dream look and storage needs — we’ll design a perfect bedroom within budget.</p>
                <a href="/contact" className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Bedroom;



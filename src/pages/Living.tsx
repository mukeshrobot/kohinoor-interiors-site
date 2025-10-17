import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import livingImg from "@/assets/project-lobby.jpg";
import logoImg from "../../public/logo.png";

const Living = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img src={livingImg} alt="Living" className="w-full h-72 md:h-[460px] object-cover" />
              <img src={logoImg} alt="Logo" className="absolute opacity-80 top-1 left-3 w-[100px] h-[100px] object-cover group-hover:scale-105 transition-transform duration-500 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <h1 className="absolute bottom-6 left-6 text-white text-4xl md:text-6xl font-extrabold">Living</h1>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Welcoming Living Rooms</h2>
                <p className="text-muted-foreground text-lg">
                  Make your living room the heart of your home. We craft inviting spaces with balanced layouts,
                  elegant TV units, smart storage and cohesive decor — perfect for everyday comfort and entertaining.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="p-4 rounded-xl bg-accent/5 border border-accent/10">TV unit design with cable management</li>
                  <li className="p-4 rounded-xl bg-accent/5 border border-accent/10">Sofa layout and circulation planning</li>
                  <li className="p-4 rounded-xl bg-accent/5 border border-accent/10">Feature walls and display shelving</li>
                  <li className="p-4 rounded-xl bg-accent/5 border border-accent/10">Curtains, rugs and decor alignment</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-blue-500/10 border border-accent/20">
                <h3 className="text-xl font-semibold mb-2 text-primary">Start Your Living Upgrade</h3>
                <p className="text-muted-foreground mb-4">Share room dimensions and photos — we’ll propose a fresh layout and cost estimate.</p>
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

export default Living;



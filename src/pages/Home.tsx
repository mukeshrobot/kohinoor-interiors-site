import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import Categories from "@/components/Home/Categories";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Categories />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
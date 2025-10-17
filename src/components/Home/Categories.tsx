import { Link } from "react-router-dom";
import kitchenImg from "@/assets/project-kitchen.jpg";
import bedroomImg from "@/assets/project-bedroom.jpg";
import livingImg from "@/assets/hero-living-room.jpg";
// import logoImg from "@/assets/logo.png";
import logoImg from "../../../public/logo.png";

const Categories = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-12 tracking-tight">
          100% CUSTOMIZED INTERIORS
          <br />
          <span className="text-accent">BY PROFESSIONALS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Kitchen - big tile */}
          <Link to="/kitchen" className="relative group rounded-2xl overflow-hidden shadow-elegant">
            <img src={kitchenImg} alt="Kitchen" className="w-full h-64 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500" />
            <img src={logoImg} alt="Logo" className="absolute top-1 left-3 w-[100px] h-[100px] object-cover group-hover:scale-105 transition-transform duration-500 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg tracking-wide">KITCHEN</span>
            </div>
          </Link>

          {/* Right column: Bedroom + Living stacked */}
          <div className="grid grid-rows-2 gap-4 md:gap-6">
            <Link to="/bedroom" className="relative group rounded-2xl overflow-hidden shadow-elegant">
              <img src={bedroomImg} alt="Bedroom" className="w-full h-48 md:h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" />
            <img src={logoImg} alt="Logo" className="absolute top-1 left-3 w-[100px] h-[100px] object-cover group-hover:scale-105 transition-transform duration-500 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-start md:justify-center px-6">
                <span className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg tracking-wide">BEDROOM</span>
              </div>
            </Link>

            <Link to="/living" className="relative group rounded-2xl overflow-hidden shadow-elegant">
              <img src={livingImg} alt="Living" className="w-full h-48 md:h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" />
            <img src={logoImg} alt="Logo" className="absolute top-1 left-3 w-[100px] h-[100px] object-cover group-hover:scale-105 transition-transform duration-500 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-end md:justify-center px-6">
                <span className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg tracking-wide text-accent">LIVING</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;



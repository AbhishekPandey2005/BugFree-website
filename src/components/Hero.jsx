import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero/hero-bg.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="pt-28 relative z-10 min-h-[90vh] flex items-center justify-center bg-[#C3D7CC] overflow-hidden px-4 md:px-8"
    >
      {/* MAIN CONTAINER */}
        <div className="relative z-20 max-w-7xl w-full rounded-[32px] shadow-2xl bg-[#0F3D1C] border border-white/20 overflow-hidden">
        <div className="px-12 pb-12 pt-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">


          {/* LEFT CONTENT */}
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start">

            {/* Badge */}
            <div className="mb-6 bg-green-100 text-green-700 backdrop-blur px-4 py-1 rounded-full text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
              Trusted Pest Professionals
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Professional Pest Control <br />
              That Protects Your Home
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
              Get rid of termites, mosquitoes, and pests with safe, certified,
              and long-lasting treatments — trusted by thousands of homeowners.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">

              <button
                onClick={() => navigate("/contact")}
                className=" bg-lime-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg shadow-lime-400/30 hover:bg-lime-300 hover:shadow-lime-400/50 transition "
              >
                Get Pest-Free Today →
              </button>

              <button className="flex items-center gap-2 text-white hover:text-lime-400 transition">
                ▶ Watch Our Video
              </button>

            </div>

            {/* Rating */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-gray-200 mt-4">
                
                {/* Stars */}
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base">
                  4.7/5 Rating from 5,000+ Happy Customers
                </p>

              </div>


          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <div className="bg-white p-2 rounded-3xl shadow-2xl">

              <img
                src={heroImg}
                alt="Pest Control Service"
                className="w-full h-[460px] object-cover rounded-2xl"
              />

            </div>

          </div>
        </div>
        </div>
      </div>

      {/* BACKGROUND GRID */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px), linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20">
      </div>

    </section>
  );
}

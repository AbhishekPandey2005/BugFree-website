import { useEffect, useRef, useState } from "react";
import aboutMain from "../assets/about-main.jpg";
import aboutSmall from "../assets/about-small.jpg";
import { Check } from "lucide-react";

function ProgressBar({ label, value }) {
  const barRef = useRef(null);
  const [width, setWidth] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setWidth(value);
        }
      },
      { threshold: 0.4 }
    );

    if (barRef.current) observer.observe(barRef.current);

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={barRef}>
      {/* Label */}
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      {/* Bar */}
      <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">

        <div
          className="h-full bg-lime-400 rounded-full transition-all duration-[1500ms] ease-out"
          style={{ width: `${width}%` }}
        ></div>

      </div>
    </div>
  );
}


export default function About() {
  return (
    <section className="bg-[#C3D7CC] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGES */}
          <div className="relative flex justify-center">

            {/* Main Image */}
            <div className="group relative w-full max-w-lg rounded-3xl overflow-hidden shadow-xl">

              <img
                src={aboutMain}
                alt="Pest Control Expert"
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

            </div>

            {/* Small Overlay Image */}
            <div className="group absolute bottom-[-40px] right-[-20px] w-[240px] rounded-2xl overflow-hidden shadow-xl bg-white">

              <img
                src={aboutSmall}
                alt="Pest Control Work"
                className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

            </div>

          </div>


          {/* RIGHT CONTENT */}
          <div className="space-y-6 text-slate-900">

            {/* Tag */}
            <span className="inline-flex items-center gap-2 bg-white/80 px-4 py-1 rounded-full text-sm font-semibold text-green-700 shadow">
              <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
              About Us
            </span>


            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-xl">
              Experts in Residential & Commercial Pest Control
            </h2>


            {/* Text */}
            <p className="text-gray-700 leading-relaxed max-w-xl">
              We are a trusted pest control company dedicated to keeping homes and
              businesses safe, clean, and pest-free. Using advanced techniques and
              eco-friendly treatments, we deliver long-term protection you can rely on.
            </p>


            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 text-sm">

              {[
                "Safe & Eco-Friendly Treatments",
                "Certified & Experienced Technicians",
                "Customized Pest Control Plans",
                "Long-Term Protection Guarantee",
              ].map((item, i) => (

                <div key={i} className="flex items-center gap-2">

                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-lime-400 text-black text-xs">
                    ✓
                  </span>

                  {item}

                </div>

              ))}

            </div>


            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 pt-6">

              {/* Quality Circle */}
              <div className="w-28 h-28 rounded-full border-[6px] border-lime-400 flex items-center justify-center text-center font-semibold text-green-900 bg-white/70 shadow">
                100% <br /> Quality
              </div>

            </div>


            {/* Animated Progress Bars */}
            <div className="space-y-4 pt-4 max-w-lg">

              <ProgressBar
                label="Customer Satisfaction"
                value={95}
              />

              <ProgressBar
                label="Service Success Rate"
                value={90}
              />

            </div>


            {/* Button */}
            <button
              className="
                bg-lime-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg shadow-lime-400/40 transition-all duration-300 hover:bg-lime-300 hover:shadow-lime-400/70 hover:-translate-y-[1px] active:scale-[0.97] "
            >
              Learn More About Us →
            </button>


          </div>

        </div>

      </div>
    </section>
  );
} 
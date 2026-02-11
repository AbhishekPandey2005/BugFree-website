import processImg from "../assets/process.jpg";
import { Check, Star } from "lucide-react";

export default function Process() {
  return (
    <section className="bg-[#C3D7CC] py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          <span className="inline-flex items-center gap-2 bg-white/80 px-4 py-1 rounded-full text-sm font-semibold text-green-700 shadow">
            <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
            Pest Control Process
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Our Pest Control Process for <br />
            Safe & Effective Results
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-xl">
            Our experienced technicians use proven methods and eco-friendly
            treatments to deliver reliable, long-lasting results with
            transparent pricing.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-800">

            <div className="flex items-center gap-2">
              <Check size={18} className="text-lime-500" />
              Certified & Experienced Technicians
            </div>

            <div className="flex items-center gap-2">
              <Check size={18} className="text-lime-500" />
              Long-term Prevention & Monitoring
            </div>

          </div>

          {/* STEPS */}
          <div className="grid sm:grid-cols-3 gap-6 pt-6">

            {[
              {
                num: "01",
                title: "Inspection",
                desc: "Identify pest activity and entry points.",
              },
              {
                num: "02",
                title: "Treatment Plan",
                desc: "Customized treatment strategy for your property.",
              },
              {
                num: "03",
                title: "Safe Application",
                desc: "Eco-friendly and professional pest control.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-white/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-lime-400 text-black font-bold mb-4">
                  {item.num}
                </div>

                <h4 className="font-semibold mb-2 text-lg text-slate-900">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
          
        </div>


        {/* RIGHT IMAGE */}
        <div className="relative">

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/30">
            <img
              src={processImg}
              alt="Pest Control Process"
              className="w-full h-[520px] object-cover"
            />
          </div>


          {/* FLOATING RATING CARD */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-md px-5 py-3 flex items-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

            <div className="flex items-center gap-2">

              <span className="text-xl font-semibold text-green-900">
                4.9/5
              </span>

              <div className="flex text-lime-500 text-base">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

            </div>

            <span className="text-xs text-gray-600 whitespace-nowrap">
              5k+ Customers
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
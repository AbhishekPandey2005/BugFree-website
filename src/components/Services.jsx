import { Bug, Home, Shield, SprayCan } from "lucide-react";

import PestProtection from "../components/PestProtection";


const services = [
  {
    icon: Bug,
    title: "Termite Control",
    price: "From ₹1,999",
    desc: "Advanced solutions to eliminate termites and protect your property.",
    points: [
      "Safe Chemicals",
      "Long Term Protection",
      "Certified Experts",
      "24/7 Support",
    ],
  },
  {
    icon: Home,
    title: "Home Protection",
    price: "From ₹2,999",
    desc: "Complete residential pest control for a safe living environment.",
    points: [
      "Full Inspection",
      "Eco Friendly",
      "Instant Service",
      "Best Rates",
    ],
  },
  {
    icon: SprayCan,
    title: "Mosquito Control",
    price: "From ₹999",
    desc: "Effective treatments to keep mosquitoes away from your home.",
    points: [
      "Fogging",
      "Larva Control",
      "Safe Spray",
      "Fuel Options",
    ],
  },
  {
    icon: Shield,
    title: "Commercial Service",
    price: "Custom Quote",
    desc: "Professional pest management for offices and businesses.",
    points: [
      "Bulk Booking",
      "Priority Support",
      "Reports",
      "Dedicated Manager",
    ],
  },
];


export default function Services() {
  return (
    <>


      {/* ================= SERVICES SECTION ================= */}
      <section
        id="services"
        className="py-24 bg-[#C3D7CC]"
      >

        <div className="max-w-7xl mx-auto px-6">


          {/* Heading */}
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Professional Pest Control Services
            </h2>

            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              We offer complete pest management solutions using eco-friendly
              and modern techniques.
            </p>

          </div>



          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


            {services.map((item, i) => {

              const Icon = item.icon;

              return (

                <div
                  key={i}
                  className="bg-green-900/70 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-md shadow-black/10 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 active:translate-y-0 active:scale-[0.98]"
                >


                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-lime-400/20 rounded-xl mb-6">
                    <Icon className="text-lime-400" size={28} />
                  </div>


                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>


                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4">
                    {item.desc}
                  </p>


                  <hr className="border-white/20 my-4" />


                  {/* Price */}
                  <p className="font-semibold text-white mb-4">
                    {item.price}
                  </p>


                  {/* Points */}
                  <ul className="space-y-2 text-sm text-gray-300">

                    {item.points.map((point, idx) => (

                      <li
                        key={idx}
                        className="flex items-center gap-2"
                      >
                        <span className="text-lime-400">✓</span>
                        {point}
                      </li>

                    ))}

                  </ul>


                </div>

              );

            })}


          </div>

        </div>

      </section>



      {/* ================= PEST PROTECTION SECTION ================= */}

      <PestProtection />


    </>
  );
}
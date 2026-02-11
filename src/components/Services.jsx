import { Bug, Home, Shield, SprayCan } from "lucide-react";

const services = [
  {
    icon: Bug,
    title: "Termite Control",
    desc: "Advanced solutions to eliminate termites and protect your property.",
  },
  {
    icon: Home,
    title: "Home Protection",
    desc: "Complete residential pest control for a safe living environment.",
  },
  {
    icon: SprayCan,
    title: "Mosquito Control",
    desc: "Effective treatments to keep mosquitoes away from your home.",
  },
  {
    icon: Shield,
    title: "Commercial Service",
    desc: "Professional pest management for offices and businesses.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-green-950">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Professional Pest Control Services
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
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
                className="bg-green-900/60 backdrop-blur p-8 rounded-2xl border border-green-800 hover:border-lime-400 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-14 h-14 flex items-center justify-center bg-lime-400/20 rounded-xl mb-6">
                  <Icon className="text-lime-400" size={28} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

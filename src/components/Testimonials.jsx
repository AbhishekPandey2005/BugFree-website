import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Home Owner",
    text: "Excellent service! Completely solved our termite problem. Highly recommended.",
  },
  {
    name: "Priya Verma",
    role: "Apartment Resident",
    text: "Very professional team. Safe and eco-friendly methods.",
  },
  {
    name: "Amit Kumar",
    role: "Business Owner",
    text: "Reliable and affordable pest control for our office.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-green-950">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            What Our Clients Say
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((item, i) => (
            <div
              key={i}
              className="bg-green-900/60 backdrop-blur p-8 rounded-2xl border border-green-800 hover:border-lime-400 transition"
            >

              {/* Stars */}
              <div className="flex gap-1 text-lime-400 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                “{item.text}”
              </p>

              {/* User */}
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

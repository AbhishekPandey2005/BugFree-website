import Abhishek from "../assets/reviews/Abhishek.jpg";
import Ankit from "../assets/reviews/Ankit.jpg";
import PrernaMishra from "../assets/reviews/PrernaMishra.jpg";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Abhishek",
    role: "Home Owner",
    text: "Excellent service! Completely solved our termite problem. Highly recommended.",
    image: Abhishek,
  },
  {
    name: "Ankit",
    role: "Apartment Resident",
    text: "Very professional team. Safe and eco-friendly methods.",
    image: Ankit,
  },
  {
    name: "Prerna Mishra",
    role: "Business Owner",
    text: "Reliable and affordable pest control for our office.",
    image: PrernaMishra,
  },
];

export default function Reviews() {
  return (
    <section
      id="Reviews"
      className="py-24 bg-[#C3D7CC]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Real feedback from our happy customers across India.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((item, i) => (
            <div
              key={i}
              className="bg-[#0F3D1C]/70 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 " 
            >
              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-lime-400"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-lime-500 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>
              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                “{item.text}”
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
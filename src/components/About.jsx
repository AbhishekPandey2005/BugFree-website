import aboutImg from "../assets/about.jpg";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#C3D7CC] py-24">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <div className="bg-white p-3 rounded-3xl shadow-xl">

              <img
                src={aboutImg} // <-- replace with your real image
                alt="Pest Expert"
                className="w-full max-w-md rounded-2xl object-cover"
              />

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-slate-900">

            <p className="text-lime-600 text-sm font-semibold uppercase tracking-wider mb-2">
              About Bugfree
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-5 max-w-lg">
              Trusted Pest Control Experts <br />
              With 10+ Years Experience
            </h2>

            <p className="text-gray-700 text-base leading-relaxed mb-7 max-w-lg">
              Bugfree provides professional pest control services using modern,
              eco-friendly techniques. Our certified experts ensure complete safety
              and long-term protection for your home and business.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mb-10">

              <div>
                <h3 className="text-3xl font-bold text-lime-500">10+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-lime-500">5K+</h3>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-lime-500">100%</h3>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>

            </div>

            {/* BUTTON */}
            <button className="bg-lime-400 text-black px-7 py-3 rounded-full font-semibold hover:bg-lime-300 transition">
              Learn More →
            </button>

          </div>

        </div>

      </div>
    </section>

  );
}

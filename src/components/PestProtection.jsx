import { useEffect, useRef, useState } from "react";

import cockroach from "../assets/pests/cockroach.png";
import mosquito from "../assets/pests/mosquito.png";
import bedbug from "../assets/pests/bedbug.png";
import spider from "../assets/pests/spider.png";
import termite from "../assets/pests/termite.png";

/* ---------------- Counter ---------------- */

function Counter({ end }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let current = 0;
          const duration = 1500;
          const step = Math.max(1, Math.floor(end / 60));

          const timer = setInterval(() => {
            current += step;

            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / 60);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}</span>;
}

/* ---------------- Main Component ---------------- */

export default function PestProtection() {
  const pests = [
    { img: cockroach, name: "Cockroaches" },
    { img: mosquito, name: "Mosquitoes" },
    { img: bedbug, name: "Bed Bugs" },
    { img: spider, name: "Spiders" },
    { img: termite, name: "Termites" },
  ];

  return (
    <section className="py-24 bg-[#C3D7CC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-900 mb-16">
          Protecting your home with expert pest control
        </h2>

        {/* Pests Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 place-items-center mb-20">

          {pests.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">

              {/* Circle */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border-[5px] border-lime-400 overflow-hidden transition-all duration-500 group-hover:scale-110">

                <img src={item.img} alt={item.name} className="w-full h-full object-contain p-3" />

                {/* Slash Line */}
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="w-[140%] h-[3px] bg-lime-400 rotate-45"></span>
                </span>

              </div>

              {/* Label */}
              <p className="mt-3 text-sm sm:text-base font-semibold text-green-900">
                {item.name}
              </p>

            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="h-[2px] w-full bg-gray-200 mb-16"></div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-4xl font-bold text-green-900 mb-2">
              <Counter end={95} />%
            </h3>
            <p className="text-gray-600 text-sm">Pest Control Success Rate</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-900 mb-2">
              <Counter end={4500} />+
            </h3>
            <p className="text-gray-600 text-sm">Cockroaches Exist Worldwide</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-900 mb-2">
              <Counter end={24} />/7
            </h3>
            <p className="text-gray-600 text-sm">Termites Work Nonstop</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-900 mb-2">
              <Counter end={300} />
            </h3>
            <p className="text-gray-600 text-sm">Eggs per Mosquito</p>
          </div>

        </div>

      </div>
    </section>
  );
}

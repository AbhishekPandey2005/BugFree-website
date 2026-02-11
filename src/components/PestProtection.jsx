import { useEffect, useRef, useState } from "react";
import cockroach from "../assets/pests/cockroach.png";
import mosquito from "../assets/pests/mosquito.png";
import bedbug from "../assets/pests/bedbug.png";
import spider from "../assets/pests/spider.png";
import termite from "../assets/pests/termite.png";

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

        {/* Pests Row */}
        <div className="flex justify-between items-start flex-wrap gap-y-10 mb-20">

          {pests.map((item, i) => (
            <div key={i} className="flex flex-col items-center w-[180px]">

              <div className="relative w-36 h-36 rounded-full border-[6px] border-lime-400 flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105">

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 object-contain"
                />

                {/* Slash Line */}
                <span className="absolute w-[140%] h-[4px] bg-lime-400 rotate-45"></span>
              </div>

              <p className="mt-4 font-semibold text-green-900 text-center">
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
            <p className="text-gray-600 text-sm">
              Pest Control Success Rate
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-900 mb-2">
              <Counter end={4500} />+
            </h3>
            <p className="text-gray-600 text-sm">
              Cockroaches Exist Worldwide
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-900 mb-2">
              <Counter end={24} />/7
            </h3>
            <p className="text-gray-600 text-sm">
              Termites Work Nonstop
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-900 mb-2">
              <Counter end={300} />
            </h3>
            <p className="text-gray-600 text-sm">
              Eggs per Mosquito
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
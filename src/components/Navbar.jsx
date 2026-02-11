import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-6 z-50 w-full px-4">
      
      {/* Main Wrapper (Aligns with Site) */}
      <div className="max-w-7xl mx-auto">

        {/* Navbar Card */}
        <div
          className=" bg-green-900/70 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl px-6 py-3 flex items-center justify-between "
        >

          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            🪰 Bugfree
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-white">

            {[
              { name: "Home", link: "/" },
              { name: "Services", link: "/services" },
              { name: "Reviews", link: "/reviews" },
              { name: "Contact", link: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="hover:text-lime-400 transition"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Desktop Button */}
          <button className="hidden md:block bg-lime-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-lime-300 transition">
            Start Free Trial →
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-white"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2">

            <div className="bg-green-950 border border-green-800 rounded-xl px-6 py-4 space-y-3">

              {[
                { name: "Home", link: "/" },
                { name: "Services", link: "/services" },
                { name: "Reviews", link: "/reviews" },
                { name: "Contact", link: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="block py-2 text-white hover:text-lime-400"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <button className="w-full bg-lime-400 text-black py-2 rounded-full font-semibold mt-3">
                Start Free Trial →
              </button>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}
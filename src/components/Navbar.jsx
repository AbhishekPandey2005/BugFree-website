import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 pt-4">

        {/* NAVBAR CARD */}
        <div className="bg-green-900/80 backdrop-blur border border-green-800 rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg">

          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            🪰 Bugfree
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">

            {[
              { name: "Home", link: "/" },
              { name: "Services", link: "/services" },
              { name: "Reviews", link: "/reviews" },
              { name: "Contact", link: "/contact" },
            ].map((item) => (

              <Link
                key={item.name}
                to={item.link}
                className="cursor-pointer hover:text-lime-400 transition"
              >
                {item.name}
              </Link>

            ))}

          </nav>

          {/* Button */}
          <button className="hidden md:block bg-lime-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-lime-300 transition">
            Start Free Trial →
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>
      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden max-w-7xl mx-auto px-6">
        <div className="bg-green-950 border border-green-800 rounded-xl mt-2 px-6 py-4 space-y-3">

            {[
              { name: "Home", link: "/" },
              { name: "Services", link: "/services" },
              { name: "Reviews", link: "/reviews" },
              { name: "Contact", link: "/contact" },
            ].map(

            (item) => (
              <Link
                key={item.name}
                to={item.link}
                className="block py-2 hover:text-lime-400 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>


            )
          )}

          <button className="w-full bg-lime-400 text-black py-2 rounded-full font-semibold mt-3">
            Start Free Trial →
          </button>

        </div>
        </div>

      )}

    </header>
  );
}

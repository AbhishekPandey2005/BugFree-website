import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Reviews", link: "/reviews" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="sticky top-6 z-50 w-full px-4">
      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Navbar Card */}
        <div className="bg-green-900/70 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-extrabold text-white tracking-wide"
          >
            🪰 Bugfree
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">

            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  `text-lg font-semibold transition ${
                    isActive
                      ? "text-lime-400"
                      : "text-white/90 hover:text-lime-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

          {/* Desktop Button */}
          <button className="hidden md:block bg-lime-400 text-black px-6 py-2.5 rounded-full font-semibold shadow-md shadow-lime-400/30 transition-all duration-300 hover:bg-lime-300 hover:shadow-lime-400/50 hover:-translate-y-[1px] active:scale-95">
            Login
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl text-white focus:outline-none"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-3">

            <div className="bg-green-950/95 backdrop-blur border border-green-800 rounded-2xl px-6 py-5 space-y-4 shadow-xl">

              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg font-semibold transition ${
                      isActive
                        ? "text-lime-400"
                        : "text-white hover:text-lime-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <button className="w-full bg-lime-400 text-black py-2.5 rounded-full font-semibold shadow-md shadow-lime-400/30 transition hover:bg-lime-300 mt-3">
                Login
              </button>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}
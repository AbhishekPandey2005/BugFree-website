export default function Footer() {
  return (
    <footer
      className="
        bg-gradient-to-b from-[#BFD6CB] to-[#C3D7CC]
        text-slate-800
        border-t border-green-400/30
        shadow-inner
      "
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-slate-900">
            Bugfree
          </h3>

          <p className="text-slate-600 leading-relaxed">
            Professional and eco-friendly pest control
            solutions for homes and businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-slate-900">
            Quick Links
          </h4>

          <ul className="space-y-2 text-slate-600">
            {["Home", "About", "Services", "Blog", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-lime-600 transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-slate-900">
            Our Services
          </h4>

          <ul className="space-y-2 text-slate-600">
            {[
              "Termite Control",
              "Mosquito Control",
              "Home Protection",
              "Commercial Service",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-lime-600 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-slate-900">
            Contact Us
          </h4>

          <ul className="space-y-3 text-slate-600">
            <li>+91 98765 43210</li>
            <li>support@bugfree.com</li>
            <li>New Delhi, India</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-400/30 text-center py-6 text-sm text-slate-500">
        © 2026 Bugfree. All rights reserved.
      </div>
    </footer>
  );
}
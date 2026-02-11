import { useState } from "react";
import contactImg from "../contact/images/contact-main.jpg";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-[#C3D7CC] px-6 py-28">
      <div className="max-w-7xl mx-auto">

        {/* MAIN WRAPPER */}
        <div className="bg-green-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 grid lg:grid-cols-2 gap-12 items-start border border-white/10">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={contactImg}
                alt="Contact"
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
              />
            </div>


            {/* INFO CARDS */}
            {[
              { icon: "📞", title: "Call Us", value: "+91 XXXXX XXXXX" },
              { icon: "📧", title: "Email", value: "support@bugfree.com" },
              { icon: "🗺️", title: "Location", value: "123 Greeny Avenue, Delhi, India" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-gradient-to-br from-green-900/90 to-green-950/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-lg shadow-black/20 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 active:scale-[0.98]"
              >

                {/* TOP LINE */}
                <span className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-lime-400/0 via-lime-400/70 to-lime-400/0 opacity-0 group-hover:opacity-100 transition" />

                <div className="flex items-center gap-4">

                  {/* ICON */}
                  <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-lime-400/90 text-black text-xl shadow-lg shadow-lime-400/40 transition duration-300 group-hover:scale-110 group-hover:shadow-lime-400/70">
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-lime-300/80">
                      {item.title}
                    </p>

                    <p className="font-semibold text-white mt-1">
                      {item.value}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>


          {/* RIGHT SIDE FORM */}
          <div className="bg-green-950/90 rounded-2xl shadow-xl p-8 border border-white/10">

            <h1 className="text-3xl font-bold mb-6 text-center text-white">
              Send Us a Message
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* NAME */}
              <div>
                <label className="block text-sm mb-1 text-gray-300">Name</label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-green-900 border border-green-800 text-white focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30 transition"
                />
              </div>


              {/* EMAIL */}
              <div>
                <label className="block text-sm mb-1 text-gray-300">Email</label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-green-900 border border-green-800 text-white focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30 transition"
                />
              </div>


              {/* MESSAGE */}
              <div>
                <label className="block text-sm mb-1 text-gray-300">Message</label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 rounded-lg bg-green-900 border border-green-800 text-white focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30 resize-none transition"
                ></textarea>
              </div>


              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-lime-400 text-black py-3 rounded-full font-semibold shadow-lg shadow-lime-400/40 transition-all duration-300 hover:bg-lime-300 hover:shadow-lime-400/70 hover:-translate-y-[1px] active:scale-[0.97]"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
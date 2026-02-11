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
    <section className="pt-28 min-h-screen bg-green-950 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">

          {/* Image */}
          <div className="md:row-span-3 overflow-hidden rounded-2xl border border-green-800">
            <img
              src={contactImg}
              alt="Contact"
              className="w-full h-full object-cover min-h-[450px]"
            />
          </div>

          {/* Phone */}
          <div className="bg-green-900/60 border border-green-800 rounded-2xl p-6 flex gap-4 items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-lime-400 text-black text-xl">
              📞
            </div>
            <div>
              <p className="text-sm text-gray-400">Contact Us</p>
              <p className="font-semibold text-lg">+91 98765 43210</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-green-900/60 border border-green-800 rounded-2xl p-6 flex gap-4 items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-lime-400 text-black text-xl">
              ✉️
            </div>
            <div>
              <p className="text-sm text-gray-400">Email Us</p>
              <p className="font-semibold text-lg">support@bugfree.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-green-900/60 border border-green-800 rounded-2xl p-6 flex gap-4 items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-lime-400 text-black text-xl">
              📍
            </div>
            <div>
              <p className="text-sm text-gray-400">Our Location</p>
              <p className="font-semibold text-lg">
                123 Greeny Avenue, India
              </p>
            </div>
          </div>

        </div>


        {/* RIGHT SIDE — CONTACT FORM */}
        <div className="bg-green-900/60 backdrop-blur p-10 rounded-2xl border border-green-800 w-full">

          <h1 className="text-3xl font-bold mb-6 text-center">
            Send Us a Message
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg bg-green-950 border border-green-800 focus:outline-none focus:border-lime-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded-lg bg-green-950 border border-green-800 focus:outline-none focus:border-lime-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg bg-green-950 border border-green-800 focus:outline-none focus:border-lime-400 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-lime-400 text-black py-2 rounded-full font-semibold hover:bg-lime-300 transition"
            >
              Send Message →
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

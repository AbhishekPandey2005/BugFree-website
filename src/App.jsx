import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-[#F8F9FA] text-slate-900 min-h-screen">

      
      

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#C3D7CC]">
      <Hero />
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-green-600/40 to-transparent my-16"></div>
      <About />
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-green-600/40 to-transparent my-16"></div>
      <Services />
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-green-600/40 to-transparent my-16"></div>
      <Process />
    </div>
  );
}
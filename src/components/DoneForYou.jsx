import Navbar from "./Navbar";
import background from "../assets/background.jpg"; 
import WhyandWhyNot from "./WhyandWhyNot";
import DoneForYouCards from "./DoneForYouCards";

export default function DoneForYou() {
  return (
    <>
    <div className="w-full min-h-screen bg-black text-white relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            The Fastest Way for Online Fat Loss Coaches to Scale to{" "}
            <span className="text-white">$20K–$50K/Month,</span> Without the
            Guesswork
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-4">
            We Build Your Entire Client Acquisition System in 15 Days.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-8">
            You focus on closing clients – we handle everything else.
          </p>

          <a
            href="#services"
            className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg 
                       hover:scale-105 transition-transform duration-300"
          >
            GET STARTED
          </a>
        </div>
      </section>
    </div>
    <WhyandWhyNot />
    <DoneForYouCards />
    </>
  );
}

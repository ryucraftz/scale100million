import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo first.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Smooth scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navigateAndScroll = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => handleScroll(id), 200);
    } else {
      handleScroll(id);
    }
  };

  const scrollToTopIfHome = () => {
    setIsOpen(false);
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={scrollToTopIfHome}>
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
          />
          <div className="flex flex-col items-center leading-tight ml-2">
            <span className="text-white text-sm md:text-base font-extrabold tracking-wide uppercase">
              SCALE100MILLION
            </span>
            <span className="text-gray-300 text-[8px] md:text-[10px] tracking-[0.15em] text-center">
              "BILLION DOLLAR विषय"
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/"
            className="text-white font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1"
            onClick={scrollToTopIfHome}
          >
            Home
          </Link>
          <button
            className="text-white font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1"
            onClick={() => navigateAndScroll("services")}
          >
            Services
          </button>
          <button
            className="text-white font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1"
            onClick={() => navigateAndScroll("features")}
          >
            Features
          </button>
          <Link
            to="/contact"
            className="text-white font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-5 backdrop-blur-md px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block text-white font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1"
            onClick={scrollToTopIfHome}
          >
            Home
          </Link>
          <button
            className="block text-white font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1 w-full text-left"
            onClick={() => navigateAndScroll("services")}
          >
            Services
          </button>
          <button
            className="block text-white font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1 w-full text-left"
            onClick={() => navigateAndScroll("features")}
          >
            Features
          </button>
          <Link
            to="/contact"
            className="block text-white font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

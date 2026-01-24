import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo100m.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navigateAndScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => handleScrollToSection(id), 200);
    } else {
      handleScrollToSection(id);
    }
  };

  const scrollToTopIfHome = () => {
    setIsOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 border-b border-gray-200" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50" onClick={scrollToTopIfHome}>
          <img
            src={logo}
            alt="Scale100Million"
            className="h-12 md:h-20 w-auto object-contain filter invert"
          />
        </Link>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex items-center gap-8 bg-gray-100 px-8 py-3 rounded-full border border-gray-200 backdrop-blur-sm">
          <button
            className="text-gray-600 hover:text-black text-sm font-medium transition-colors"
            onClick={() => navigateAndScroll("mentorship")}
          >
            Mentorship
          </button>
          <button
            className="text-gray-600 hover:text-black text-sm font-medium transition-colors"
            onClick={() => navigateAndScroll("partner")}
          >
            Partner With Us
          </button>
          <button
            className="text-gray-600 hover:text-black text-sm font-medium transition-colors"
            onClick={() => navigateAndScroll("media")}
          >
            Media
          </button>
          <button
            className="text-gray-600 hover:text-black text-sm font-medium transition-colors"
            onClick={() => navigateAndScroll("join-team")}
          >
            Join Our Team
          </button>
        </div>

        {/* CTA Button - Right */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="bg-primary hover:bg-red-600 text-white text-sm font-bold py-3 px-6 rounded-pill transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.3)] hover:shadow-[0_0_30px_rgba(230,0,0,0.5)]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8">
          <button
            className="text-2xl font-bold text-black tracking-tight"
            onClick={() => navigateAndScroll("mentorship")}
          >
            Mentorship
          </button>
          <button
            className="text-2xl font-bold text-black tracking-tight"
            onClick={() => navigateAndScroll("partner")}
          >
            Partner With Us
          </button>
          <button
            className="text-2xl font-bold text-black tracking-tight"
            onClick={() => navigateAndScroll("media")}
          >
            Media
          </button>
          <button
            className="text-2xl font-bold text-black tracking-tight"
            onClick={() => navigateAndScroll("join-team")}
          >
            Join Our Team
          </button>
          <Link
            to="/contact"
            className="text-xl font-bold text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

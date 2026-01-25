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
    handleScroll(); // Check immediately on mount
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
      className={`fixed top-0 left-0 w-full z-[60] transition-[background-color,padding,box-shadow,backdrop-filter] duration-300 ${isOpen ? "bg-white" : scrolled ? "bg-white/10 backdrop-blur-2xl border-b border-white/20 py-3 shadow-lg" : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50" onClick={scrollToTopIfHome}>
          <img
            src={logo}
            alt="Scale100Million"
            className="h-14 md:h-16 w-auto object-contain filter invert hue-rotate-180"
          />
        </Link>

        {/* Desktop Menu - Right Aligned (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <button
            className="text-text-primary hover:text-primary font-medium transition-colors"
            onClick={() => navigateAndScroll("mentorship")}
          >
            Mentorship
          </button>
          <button
            className="text-text-primary hover:text-primary font-medium transition-colors"
            onClick={() => navigateAndScroll("partner")}
          >
            Partner With Us
          </button>
          <button
            className="text-text-primary hover:text-primary font-medium transition-colors"
            onClick={() => navigateAndScroll("media")}
          >
            Media
          </button>
          <button
            className="text-text-primary hover:text-primary font-medium transition-colors"
            onClick={() => navigateAndScroll("join-team")}
          >
            Join Our Team
          </button>
          <button
            className="text-text-primary hover:text-primary font-medium transition-colors"
            onClick={() => navigateAndScroll("contact")}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button - Right Aligned (Visible ONLY on Mobile) */}
        <button
          className="md:hidden text-black z-50 p-2 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <button
          className="text-3xl font-black text-gray-900 tracking-tight hover:text-primary transition-colors"
          onClick={() => navigateAndScroll("mentorship")}
        >
          Mentorship
        </button>
        <button
          className="text-3xl font-black text-gray-900 tracking-tight hover:text-primary transition-colors"
          onClick={() => navigateAndScroll("partner")}
        >
          Partner With Us
        </button>
        <button
          className="text-3xl font-black text-gray-900 tracking-tight hover:text-primary transition-colors"
          onClick={() => navigateAndScroll("media")}
        >
          Media
        </button>
        <button
          className="text-3xl font-black text-gray-900 tracking-tight hover:text-primary transition-colors"
          onClick={() => navigateAndScroll("join-team")}
        >
          Join Our Team
        </button>
        <Link
          to="/contact"
          className="px-8 py-3 bg-primary text-white rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

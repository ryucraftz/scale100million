import { useState, useEffect, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoOriginal from "../assets/logooriginal.png";
import logoWhite from "../assets/logowhite.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    if (isOpen) {
      setIsMenuClosing(true);
      setIsOpen(false);
      setTimeout(() => setIsMenuClosing(false), 300); // Match duration-300
    } else {
      setIsOpen(true);
    }
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll(); // Check immediately
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Footer Detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle logo color when footer intersects significantly (near header)
        // We use a rootMargin to detect when footer hits the top area
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-80px 0px 0px 0px", // Detect when overlapping top area
        threshold: 0.1
      }
    );

    const footer = document.getElementById("site-footer");
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, [location.pathname]); // Re-run if path changes (footer might assume new pos)


  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (isOpen) {
      setIsMenuClosing(true);
      setIsOpen(false);
      setTimeout(() => setIsMenuClosing(false), 300);
    }
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
    if (isOpen) {
      setIsMenuClosing(true);
      setIsOpen(false);
      setTimeout(() => setIsMenuClosing(false), 300);
    }
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Logo Logic:
  // Default: Original (Black+Blue)
  // Footer Visible + Not Open Menu: White (Invert)
  const isWhiteLogo = isFooterVisible && !isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[60] ${isOpen ? "transition-none delay-0 duration-0" : "transition-[background-color,padding,box-shadow,backdrop-filter] duration-300"
        } ${scrolled ? "py-3" : "py-5"} ${isOpen || isMenuClosing
          ? "bg-white"
          : scrolled
            ? isFooterVisible ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50" onClick={scrollToTopIfHome}>
          <img
            src={isWhiteLogo ? logoWhite : logoOriginal}
            alt="Scale100Million"
            className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu - Right Aligned (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {/* Update text colors based on background */}
          {["mentorship", "partner", "media", "join-team", "contact"].map((item) => (
            <button
              key={item}
              className={`${isWhiteLogo ? "text-white/80 hover:text-white" : "text-text-primary hover:text-primary"} font-medium transition-colors`}
              onClick={() => navigateAndScroll(item === "join-team" ? "join-team" : item)}
            >
              {item === "join-team" ? "Join Our Team" : item === "partner" ? "Partner With Us" : item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button - Right Aligned (Visible ONLY on Mobile) */}
        <button
          className={`md:hidden ${isWhiteLogo && !isOpen ? "text-white" : "text-black"} z-50 p-2 ml-auto`}
          onClick={toggleMenu}
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
          className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight hover:text-primary transition-colors"
          onClick={() => navigateAndScroll("mentorship")}
        >
          Mentorship
        </button>
        <button
          className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight hover:text-primary transition-colors"
          onClick={() => navigateAndScroll("partner")}
        >
          Partner With Us
        </button>
        <button
          className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight hover:text-primary transition-colors"
          onClick={() => navigateAndScroll("media")}
        >
          Media
        </button>
        <button
          className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight hover:text-primary transition-colors"
          onClick={() => navigateAndScroll("join-team")}
        >
          Join Our Team
        </button>
        <Link
          to="/contact"
          className="px-8 py-3 bg-primary text-white rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          onClick={() => {
            setIsMenuClosing(true);
            setIsOpen(false);
            setTimeout(() => setIsMenuClosing(false), 300);
          }}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

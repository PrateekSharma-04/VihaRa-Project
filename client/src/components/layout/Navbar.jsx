import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import logo from "../../assets/images/Vihara main logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isAiVaPage = location.pathname === "/aiva";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor =
    scrolled || isAiVaPage ? "text-[#1F3D34]" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Vihara Logo"
              className="h-10 md:h-15 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div
            className={`hidden md:flex items-center gap-10 text-lg font-medium transition-colors duration-300 ${textColor}`}
          >
            <Link to="/destinations">Destinations</Link>
            <Link to="/aiva">Explore with AiVa</Link>
            <Link to="/stories">Stories</Link>
          </div>

          {/* Icons + Hamburger */}
          <div
            className={`flex items-center gap-6 transition-colors duration-300 ${textColor}`}
          >
            <button className="hover:scale-110 transition">
              <Search size={22} />
            </button>

            <button className="hover:scale-110 transition">
              <User size={22} />
            </button>

            {/* Hamburger (Mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center gap-6 py-6 text-[#1F3D34] text-lg font-medium">
            <Link to="/destinations" onClick={() => setMenuOpen(false)}>
              Destinations
            </Link>

            <Link to="/aiva" onClick={() => setMenuOpen(false)}>
              Explore with AiVa
            </Link>

            <Link to="/stories" onClick={() => setMenuOpen(false)}>
              Stories
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
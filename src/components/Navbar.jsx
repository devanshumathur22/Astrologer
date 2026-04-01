import { NavLink } from "react-router-dom";
import { useState } from "react";
import useNavbarScroll from "../hooks/useNavbarScroll";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useNavbarScroll();
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    `px-4 py-2 transition ${
      isActive
        ? "text-yellow-400"
        : "text-black/70 dark:text-white/80 hover:text-yellow-300"
    }`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/90 dark:bg-[#05010d]/90 backdrop-blur border-b border-black/10 dark:border-white/10"
            : "bg-white/70 dark:bg-transparent backdrop-blur"
        }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-yellow-400">
          🔮 AstroGuru
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>

          {/* Services Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer px-4 py-2 text-black/70 dark:text-white/80 hover:text-yellow-300">
              Services ▾
            </span>

            <div className="absolute top-full left-0 pt-2">
              <div
                className="
                  w-56 rounded-xl shadow-lg
                  bg-white dark:bg-[#0b0620]
                  border border-black/10 dark:border-white/10
                  opacity-0 group-hover:opacity-100
                  pointer-events-none group-hover:pointer-events-auto
                  transition duration-200
                "
              >
                {[
                  ["Horoscope", "/horoscope"],
                  ["Kundli", "/kundli"],
                  ["Love & Marriage", "/love-marriage"],
                  ["Career", "/career"],
                  ["Health", "/health"],
                  ["Match Making", "/match-making"],
                  ["Gemstone", "/gemstone"],
                  ["Remedies", "/remedies"],
                ].map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    className="
                      block px-4 py-2 text-sm
                      text-black/70 dark:text-white/80
                      hover:bg-black/5 dark:hover:bg-white/5
                      hover:text-yellow-300
                    "
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          {/* CTA */}
          <NavLink
            to="/consultation"
            className="
              ml-2 px-5 py-2 rounded-full
              bg-yellow-400 text-black font-semibold
              hover:bg-yellow-300 transition
              shadow-[0_0_20px_rgba(250,204,21,0.4)]
            "
          >
            Book Consultation
          </NavLink>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              ml-3 px-3 py-2 rounded-full
              border border-black/20 dark:border-white/20
              hover:bg-black/5 dark:hover:bg-white/10 transition
            "
            title="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-black dark:text-white"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden px-6 py-4 space-y-3
            bg-white dark:bg-[#05010d]
            border-t border-black/10 dark:border-white/10
          "
        >
          {[
            ["Home", "/"],
            ["Horoscope", "/horoscope"],
            ["Kundli", "/kundli"],
            ["Love & Marriage", "/love-marriage"],
            ["Career", "/career"],
            ["Health", "/health"],
            ["Match Making", "/match-making"],
            ["Gemstone", "/gemstone"],
            ["Remedies", "/remedies"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className="block text-black/70 dark:text-white/80 hover:text-yellow-300"
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/consultation"
            onClick={() => setOpen(false)}
            className="
              block mt-3 text-center px-4 py-2 rounded-full
              bg-yellow-400 text-black font-semibold
            "
          >
            Book Consultation
          </NavLink>
        </div>
      )}
    </header>
  );
}

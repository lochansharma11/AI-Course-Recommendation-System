import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to handle anchor links correctly
  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent tracking-tight">
              AI Course <span className="text-gray-900">Recommendation</span>
            </span>
          </Link>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:scale-105 hover:from-blue-600 hover:to-indigo-700 transition-all"
                >
                  {link.name}
                </a>
              ) : (
                <a href={link.href} className="hover:text-blue-600 transition">
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-blue-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-7 h-7 transition-transform ${
              menuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="#4f46e5"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full right-4 mt-2 w-48 bg-white rounded-xl shadow-lg border border-blue-100 flex flex-col items-stretch z-50 animate-fade-in">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b last:border-b-0">
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    className="block px-6 py-3 hover:text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

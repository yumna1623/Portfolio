import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "../../assets/logo.png";
import { useTheme } from "../../context/ThemeContext";

export default function NavBar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact Me", href: "#contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow-md transition-colors duration-300 ${
        darkMode ? "bg-[#222831] text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
        <div className="h-12 w-48 select-none">
          <img
            src={logo}
            alt="Logo"
            className="h-full w-full object-contain"
            style={{ filter: darkMode ? "" : "invert(0)" }}
          />
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#00ADB5]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded hover:bg-amber-500 transition"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`md:hidden p-2 rounded border transition ${
              darkMode ? "border-gray-600" : "border-gray-300"
            }`}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className={`md:hidden px-6 pb-4 flex flex-col space-y-3 transition-colors duration-300 ${
            darkMode ? "bg-[#222831] text-white" : "bg-white text-black"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#00ADB5]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

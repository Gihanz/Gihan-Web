import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaCloudMoon } from "react-icons/fa";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

export default function Header({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;
  const baseLinkClass = "hover:text-blue-500 transition";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <FaSun size={18} color="#facc15" />
            ) : (
              <FaCloudMoon size={18} color="#3b82f6" />
            )}
          </button>
        </nav>

      </div>

    </header>
  );
}
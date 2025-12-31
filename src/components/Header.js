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
          : "bg-black/5"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between relative">
        {/* Profile Image */}
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex-shrink-0">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Profile"
            className="h-10 w-10"
          />
        </Link>

        {/* Centered Name */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h4 className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            <span className="block md:inline">Hi There, Welcome to </span>
            <span className="block md:inline">My Profile!</span>
          </h4>
        </div>

        {/* Right Side - Dark Mode Toggle */}
        <nav className="flex items-center font-medium text-sm">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition bg-black/10"
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

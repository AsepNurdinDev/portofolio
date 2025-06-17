import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "../DarkMode/DarkModeToggle";
import { div } from "framer-motion/client";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 mx-auto max-w-screen-xl transition-all duration-300 ${
          isVisible
            ? "backdrop-blur bg-white/70 dark:bg-gray-900/70 "
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto w-[90%] px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Asep <span className="text-blue-600 dark:text-white">Nurdin</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">

            <a
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:underline dark:hover:text-indigo-400 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:underline dark:hover:text-indigo-400 font-medium"
            >
              About
            </a>
            <a
              href="#project"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:underline dark:hover:text-indigo-400 font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:underline dark:hover:text-indigo-400 font-medium"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:underline dark:hover:text-indigo-400 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Hamburger Button */}
          <DarkModeToggle />

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden max-w-5xl mx-auto w-[90%] px-4 pb-4 space-y-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-b-md transition-all duration-300">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="block text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="block text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="block text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

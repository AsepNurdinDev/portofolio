import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "../DarkMode/DarkModeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PERBAIKAN: Memetakan href dengan benar & menambahkan flag 'isExternal'
  const navLinks = [
    { name: "Home", href: "#", isExternal: false },
    { name: "About", href: "#about", isExternal: false },
    { name: "Projects", href: "#project", isExternal: false }, // Diarahkan ke ID seksi internal
    { name: "Blog", href: "https://asepblog.my.id/", isExternal: true }, // Diarahkan ke domain blog kamu
    { name: "Contact", href: "#contact", isExternal: false },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 transition-all duration-500 pt-4">
      <nav
        className={`mx-auto max-w-5xl w-full transition-all duration-300 rounded-2xl border ${
          scrolled
            ? "backdrop-blur-md bg-white/40 dark:bg-slate-950/40 border-white/20 dark:border-slate-800/50 shadow-lg shadow-slate-900/5"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="px-6 py-3 flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
            Asep <span className="text-indigo-500 dark:text-indigo-400">Nurdin</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                // Jika external, buka di tab baru agar portofolio tidak tertutup
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-xl transition-all duration-200 hover:bg-slate-900/5 dark:hover:bg-white/5 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Area */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />

            {/* Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-900/5 dark:hover:bg-white/5 focus:outline-none transition-all"
                aria-label="Toggle Menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-64 opacity-100 border-t border-slate-200/20" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 space-y-1 bg-white/60 dark:bg-slate-950/60 backdrop-blur-lg rounded-b-2xl">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-900/5 dark:hover:bg-white/5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
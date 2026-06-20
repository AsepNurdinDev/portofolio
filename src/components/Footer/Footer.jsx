import { Facebook, Instagram, Github, Linkedin, Terminal } from "lucide-react"; 

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/60 py-12 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Identitas Brand / Nama */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <Terminal size={18} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-lg font-extrabold text-slate-950 dark:text-white tracking-tight">
              Asep Nurdin
            </span>
          </div>
          
          {/* Deskripsi Kompetensi Terkini */}
          <p className="max-w-md text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
            Full-Stack Developer & DevOps Practitioner. Berfokus pada pembangunan arsitektur backend yang tangguh, antarmuka modern yang optimal (SEO), dan manajemen infrastruktur awan.
          </p>
        </div>

        {/* Menu Navigasi Internal */}
        <ul className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider">
          <li>
            <a
              href="#about"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Jejaring Sosial Menggunakan Lucide Icons */}
        <ul className="mt-8 flex justify-center gap-5">
          {[
            { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
            { icon: <Instagram size={18} />, href: "https://www.instagram.com/aseppnrdn/", label: "Instagram" },
            { icon: <Github size={18} />, href: "https://github.com/AsepNurdinDev", label: "GitHub" },
            { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/aseppnrdn", label: "LinkedIn" },
          ].map((social, idx) => (
            <li key={idx}>
              <a
                href={social.href}
                rel="noreferrer"
                target="_blank"
                aria-label={social.label}
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 hover:shadow-sm shadow-slate-950/5 transition-all duration-200"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright Area */}
        <div className="mt-10 border-t border-slate-200/60 dark:border-slate-900 pt-6 text-center text-[11px] font-medium text-slate-400 dark:text-slate-500 tracking-wide">
          &copy; {new Date().getFullYear()} Asep Nurdin. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
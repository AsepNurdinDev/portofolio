const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Asep Nurdin</h3>
          <p className="text-gray-400 text-sm">
            Web Developer & UI Designer. Passionate about building beautiful and
            functional digital experiences.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Navigasi</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#about" className="hover:text-white transition">
                Tentang Saya
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-white transition">
                Project
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Ikuti Saya</h4>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/asepnurdin"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/ig.svg"
                alt="Instagram"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a
              href="https://github.com/asepnurdin"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/github.svg"
                alt="GitHub"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a
              href="https://linkedin.com/in/asepnurdin"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Asep Nurdin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

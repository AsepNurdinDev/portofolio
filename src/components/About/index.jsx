const About = () => {
  return (
    <section 
      id="about" 
      className="w-full bg-slate-50 dark:bg-slate-950 py-24 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Kontainer Utama Glassmorphism */}
        <div 
          data-aos="fade-up"
          className="relative backdrop-blur-md bg-white/40 dark:bg-slate-900/40 rounded-3xl border border-white/40 dark:border-slate-800/60 shadow-2xl shadow-slate-950/5 p-8 md:p-14 flex flex-col md:flex-row items-start gap-12 transition-all duration-300"
        >
          {/* Ambient Glow background */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* FOTO & STATS SECTION */}
          <div 
            data-aos="zoom-in" 
            className="w-full md:w-1/3 flex flex-col items-center md:sticky md:top-28 shrink-0"
          >
            {/* Frame Foto Utama */}
            <div className="relative group w-48 h-48 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent dark:from-slate-700 dark:to-transparent shadow-xl">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src="/asep.jpeg"
                  alt="Asep Nurdin"
                  className="object-cover w-full h-full filter saturate-[0.85] contrast-[1.05] group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Label Nama & Title */}
            <div className="mt-4 text-center">
              <p className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Asep Nurdin</p>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                Founder Mahakarya Digital
              </p>
            </div>

            {/* GALERI MAHAKARYA DIGITAL (UKURAN LEBIH BESAR & CARDS DENGAN STYLING RAPI) */}
            <div className="mt-6 w-full space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 text-center">
                Software House Showcase
              </p>
              
              <div className="grid grid-cols-2 gap-3 w-full">
                {/* Logo Card */}
                <div className="relative h-28 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/90 p-3 flex flex-col items-center justify-center group shadow-xs hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition-all duration-300">
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-60" />
                  <img 
                    src="/img/mahakaryadigitallogo.jpeg" 
                    alt="Logo Mahakarya Digital" 
                    className="w-full h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Photo/Activity Card */}
                <div className="relative h-28 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-900 group shadow-xs hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition-all duration-300">
                  <img 
                    src="/img/asepmhk.jpeg" 
                    alt="Aktivitas Mahakarya Digital" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                  </div>
                </div>
              </div>
            </div>

            {/* Statistik Minimalis */}
            <div className="mt-6 grid grid-cols-2 gap-4 w-full border-t border-slate-200/40 dark:border-slate-800/60 pt-5">
              <div className="text-center border-r border-slate-200/40 dark:border-slate-800/60 pr-2">
                <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  10+
                </p>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">
                  Projects & Labs
                </p>
              </div>
              <div className="text-center pl-2">
                <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  2+ Thn
                </p>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">
                  Eksplorasi Teknis
                </p>
              </div>
            </div>
          </div>

          {/* TEKS & PROFIL PROFESIONAL */}
          <div className="w-full md:w-2/3 flex flex-col justify-center font-sans tracking-tight">
            {/* Tag / Badge Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 w-fit mb-4 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Software House Founder & Engineer
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white leading-[1.15] tracking-tight mb-6">
              Membangun Solusi Digital & Infrastruktur <span className="text-indigo-500 dark:text-indigo-400">Skala Produksi</span>
            </h2>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-normal">
              <p>
                Saya adalah seorang Software Engineer sekaligus Founder dari <strong>Mahakarya Digital</strong>, sebuah software house yang berfokus pada pengembangan sistem perangkat lunak, aplikasi web, dan solusi infrastruktur digital modern untuk membantu transformasi bisnis dan pelaku usaha.
              </p>
              <p>
                Secara teknis, keahlian utama saya berfokus pada arsitektur backend, otomatisasi DevOps, dan efisiensi cloud computing. Saya terbiasa membangun ekosistem web performa tinggi menggunakan <strong>Golang</strong>, <strong>Next.js</strong>, dan <strong>Laravel</strong>, serta pengelolaan kontainerisasi via <strong>Docker</strong> di atas lingkungan server <strong>Ubuntu</strong>.
              </p>
              <p>
                Pendekatan yang saya terapkan selalu mengutamakan keandalan sistem, mulai dari penerapan pipeline <strong>CI/CD</strong>, sistem keamanan jaringan, hingga pemantauan server yang terintegrasi demi menjamin kualitas terbaik pada setiap produk digital yang dirilis.
              </p>
            </div>

            {/* LINK EKSKLUSIF KE WEBSITE MAHAKARYA DIGITAL */}
            <div className="mt-8 pt-2">
              <a
                href="https://www.mahakaryadigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5"
              >
                <span>Kunjungi Website Mahakarya Digital</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* TECH STACK VISUAL MINI */}
            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                Core Technologies & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Golang",
                  "Next.js",
                  "Laravel",
                  "Docker",
                  "CI/CD",
                  "Ubuntu Server",
                  "Cloudflare",
                  "MySQL",
                ].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-200/50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-300 border border-slate-300/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
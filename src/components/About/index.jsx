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
          className="relative backdrop-blur-md bg-white/30 dark:bg-slate-900/40 rounded-3xl border border-white/20 dark:border-slate-800/60 shadow-2xl shadow-slate-950/5 p-8 md:p-14 flex flex-col md:flex-row items-start gap-12 transition-all duration-300"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* FOTO & STATS SECTION */}
          <div 
            data-aos="zoom-in" 
            className="w-full md:w-1/3 flex flex-col items-center md:sticky md:top-28 shrink-0"
          >
            {/* Frame Foto Tech-Minimalist */}
            <div className="relative group w-44 h-44 rounded-2xl overflow-hidden p-[1px] bg-gradient-to-b from-indigo-500/50 to-transparent dark:from-slate-700 dark:to-transparent shadow-xl">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src="../img/dsc_3884.png"
                  alt="Asep Nurdin"
                  className="object-cover w-full h-full filter saturate-[0.85] contrast-[1.05] group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Statistik Minimalis */}
            <div className="mt-8 grid grid-cols-2 gap-4 w-full border-t border-slate-200/40 dark:border-slate-800/60 pt-6">
              <div className="text-center border-r border-slate-200/40 dark:border-slate-800/60 pr-2">
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  10+
                </p>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">
                  Projects & Labs
                </p>
              </div>
              <div className="text-center pl-2">
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  2+ Thn
                </p>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">
                  Eksplorasi Teknis
                </p>
              </div>
            </div>
          </div>

          {/* TEKS & PROFIL MAHASISWA PROFESIONAL */}
          <div className="w-full md:w-2/3 flex flex-col justify-center font-sans tracking-tight">
            {/* Tag / Badge Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 w-fit mb-4 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Computer Science Student & Engineer
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white leading-[1.15] tracking-tight mb-6">
              Menjembatani Teori Akademis dengan Infrastruktur <span className="text-indigo-500 dark:text-indigo-400">Skala Produksi</span>
            </h2>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-normal">
              <p>
                Saya adalah mahasiswa Ilmu Komputer yang mendedikasikan fokus pada arsitektur backend, otomatisasi DevOps, dan efisiensi cloud computing. Berangkat dari pemahaman teoritis yang kuat di bangku perkuliahan, saya aktif mengimplementasikannya ke dalam pengelolaan sistem dan siklus pengembangan perangkat lunak modern.
              </p>
              <p>
                Dalam lingkungan pengembangan, saya terbiasa membangun layanan backend performa tinggi menggunakan <strong>Golang</strong>, melakukan kontainerisasi aplikasi dengan <strong>Docker</strong> hingga orkestrasi via <strong>Kubernetes</strong>. Infrastruktur tersebut saya kelola secara mandiri di atas ekosistem <strong>Ubuntu Server</strong> dan <strong>Nginx</strong> dengan pendekatan cloud architecture yang optimal.
              </p>
              <p>
                Untuk menjaga kualitas kode dan stabilitas deployment, saya menerapkan pipeline <strong>CI/CD (GitHub Actions / Jenkins)</strong> serta sistem observabilitas menggunakan <strong>Prometheus</strong> dan <strong>Grafana</strong>. Selain mendalami sisi operasional infrastruktur, saya juga memanfaatkan fleksibilitas keahlian ini untuk membangun platform digital siap pakai yang profesional, seperti website profil perusahaan (company profile) dan landing page bisnis yang andal.
              </p>
            </div>

            {/* TECH STACK VISUAL MINI */}
            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {["Golang", "Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana", "Ubuntu Server", "Cloud Computing"].map((tech) => (
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
import { useState } from "react";
import { ExternalLink, Layers, Eye, X, Terminal, Cpu } from "lucide-react";

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  // State untuk menyimpan data project yang sedang aktif di dalam modal (null = modal tertutup)
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      img: "./img/project/cv.dwijayengabadi.png",
      title: "CV Dwijayeng Abadi Profile",
      desc: "Platform company profile premium untuk perusahaan supplier logistik pangan skala besar (Telur, Beras, Minyak, & LPG) dengan optimasi performa tinggi.",
      tech: ["Next.js", "TailwindCSS", "JavaScript", "SEO"],
      link: "https://www.dwijaabadi.com/",
    },
    {
      img: "./img/project/livingpork.png",
      title: "Living Pork",
      desc: "Ekosistem web kompleks untuk Living Pork, supplier daging babi segar di Bali. Memadukan identitas korporat, sistem katalog ritel interaktif dengan WhatsApp Checkout instan, serta mesin portal artikel (CMS) untuk strategi inbound marketing.",
      tech: ["Next.js", "TailwindCSS", "TypeScript", "SEO"],
      link: "https://www.livingpork.com/",
    },
    {
      img: "./img/project/2.png",
      title: "Interactive Coding Course Platform",
      desc: "Aplikasi platform manajemen pembelajaran kursus coding online, dilengkapi arsitektur RESTful API yang aman dan manajemen basis data relasional.",
      tech: ["React.js", "Express.js", "TailwindCSS", "MySQL"],
      link: "#",
    },
    {
      img: "./img/project/4.png",
      title: "Point of Sales (POS) Culinary System",
      desc: "Sistem kasir berbasis web real-time untuk optimalisasi manajemen pesanan pelanggan, pencatatan transaksi kas, dan rekapitulasi keuangan.",
      tech: ["HTML5", "TailwindCSS", "JavaScript ESM"],
      link: "#",
    },
    {
      img: "./img/project/3.png",
      title: "E-Commerce Hijab Aulia Integration",
      desc: "Sistem toko online hijab modern terintegrasi katalog dinamis, sistem manajemen konten, dan fitur tutorial interaktif.",
      tech: ["PHP", "TailwindCSS", "MySQL Infrastructure"],
      link: "#",
    },
    {
      img: "/img/project/elhaza.png", // Simpan gambar screenshot di public/img/project/elhazastore.png
      title: "Elhazastore (E-Commerce Korset Kesehatan)",
      desc: "Landing page & katalog produk interaktif untuk toko e-commerce korset kesehatan pinggang ergonomis. Dibangun menggunakan Next.js App Router dan Tailwind CSS dengan fitur ulasan pembeli terverifikasi, panduan ukuran, serta integrasi pemesanan langsung via WhatsApp.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      link: "https://elhazastore.com", // Sesuaikan dengan domain / link produksi Anda
    },
    {
      img: "/img/project/sudutlawass.png", // Simpan screenshot di public/img/project/sudutlawas.png
      title: "Sudutlawas (Toko Online Apparel Harley)",
      desc: "Platform toko online e-commerce yang menjual pakaian, aksesori, dan perlengkapan bernuansa klasik/vintage khusus penggemar Harley-Davidson. Dibangun dengan PHP Laravel dan Laravel Breeze untuk autentikasi sistem yang aman, serta dikemas dengan tampilan UI kustom menggunakan Tailwind CSS.",
      tech: ["PHP", "Laravel", "Laravel Breeze", "Tailwind CSS", "MySQL"],
      link: "https://sudutlawas.com", // Sesuaikan dengan domain/link demo Anda
    },
    {
      img: "/img/project/uhamka.png", // Simpan screenshot di public/img/project/sudutlawas.png
      title: "Uhamka Agrovision: Peternakan Domba Modern Jonggol",
      desc: "Landing page interaktif untuk manajemen distribusi domba jantan berkualitas langsung dari kandang Jonggol. Dilengkapi katalog harga transparan berdasarkan bobot riil (Dugul & Tanduk), pengelompokan varian tipe berat badan, serta fitur konversi order instan ke admin penjualan.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      link: "https://uhamka-agrovision.vercel.app/", // Sesuaikan dengan domain/link demo Anda
    },
    {
      img: "/img/project/mahakaryadigital.png", // Simpan screenshot di public/img/project/sudutlawas.png
      title: "Mahakarya Digital",
      desc: "Mahakarya Digital hadir sebagai studio rekayasa piranti lunak (*software house*) independen yang berdedikasi menjadi katalis utama transformasi digital bagi para pelaku usaha, UMKM, hingga korporasi di Indonesia. Kami percaya bahwa setiap entitas bisnis berhak memiliki infrastruktur digital yang kokoh, eksklusif, dan andal di pasar global. Melalui komitmen rekayasa kode yang presisi, kami siap memanifestasikan platform terbaik untuk bisnis Anda.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      link: "#", // Sesuaikan dengan domain/link demo Anda
    },
    {
      img: "./img/project/auth.png",
      title: "Authentication Service with Google OAuth",
      desc: "Authentication Service berbasis Golang dengan Google OAuth 2.0 untuk autentikasi pihak ketiga. Sistem menghasilkan JWT (access & refresh token) untuk session management yang aman. Redis digunakan sebagai session store untuk meningkatkan performa, sementara PostgreSQL menyimpan data user. Dirancang sebagai auth service terpisah agar scalable dan dapat digunakan oleh multiple service (SSO-like) dalam arsitektur microservices.",
      tech: ["Golang", "JWT", "OAuth2", "PostgreSQL", "Redis"],
      link: "https://github.com/AsepNurdinDev/auth-server",
    },
    {
      img: "./img/project/microservices.png",
      title: "Microservices Application (Production-Oriented)",
      desc: "Microservices App berbasis Golang dengan clean architecture dan pendekatan DevOps. Request masuk melalui Nginx (TLS, rate limiting) lalu diteruskan ke Gateway Service untuk validasi JWT dan routing ke Auth Service (PostgreSQL) dan Article Service (MongoDB). Redis digunakan untuk caching/session. Monitoring menggunakan Prometheus & Grafana, serta CI/CD otomatis via GitHub Actions. Dirancang scalable, secure, dan siap production.",
      tech: ["Golang", "MongoDB", "PostgreSQL", "JWT", "Docker", "Nginx", "Prometheus"],
      link: "https://github.com/AsepNurdinDev/microservice-app",
    },
    {
      img: "./img/project/blog.png",
      title: "Catatan Programmer (Blog)",
      desc: "Sebuah blog pribadi yang dibangun full-stack dengan Golang sebagai backend, Next.JS sebagai frontend, dan MySQL sebagai database. Dilengkapi dengan Cloudflare Tunnel untuk eksposur jaringan yang aman serta JWT Authentication.",
      tech: ["Go", "Next.js", "MySQL", "Docker", "Cloudflare", "JWT"],
      link: "https://asepblog.my.id/",
    },    
  ];

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <section 
      id="project" 
      className="w-full bg-slate-50 dark:bg-slate-950 py-24 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div data-aos="fade-right" className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-4">
            Portofolio
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-none mb-4">
            Proyek Pilihan
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Kumpulan sistem backend, arsitektur microservices, dan optimalisasi platform yang dirancang dengan performa tinggi.
          </p>
        </div>

        {/* Grid Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group flex flex-col justify-between backdrop-blur-md bg-white/30 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-sm shadow-slate-950/5 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 hover:bg-white/50 dark:hover:bg-slate-900/60 transition-all duration-300"
            >
              {/* Image Area */}
              <div className="w-full h-48 overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-200/40 dark:border-slate-800/40 relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 filter saturate-[0.9]"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-950 dark:text-white tracking-tight mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  {/* Text dibatasi 3 baris di halaman depan agar layout tetap simetris */}
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-5 line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                {/* Tags & Action Buttons */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 4).map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-[10px] font-semibold rounded-md bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-300/10"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Dual Actions: Detail & Link */}
                  <div className="flex items-center justify-between gap-2 border-t border-slate-200/30 dark:border-slate-800/30 pt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Eye size={14} />
                      <span>Detail</span>
                    </button>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Eksplorasi</span>
                      <ExternalLink size={12} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button "Lihat Semua" */}
        {projectsData.length > 6 && (
          <div data-aos="fade-up" className="flex justify-center mt-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm bg-white/20 dark:bg-slate-900/20 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:scale-[1.02]"
            >
              <Layers size={16} />
              <span>{showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Project"}</span>
            </button>
          </div>
        )}

        {/* PREMIUM MODAL COMPONENT (Akan muncul jika selectedProject tidak null) */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
            {/* Backdrop Blur Layer */}
            <div 
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal Card Content */}
            <div className="relative w-full max-w-2xl bg-white/90 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-scale-up">
              
              {/* Close Button Inside Modal */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X size={16} />
              </button>

              {/* Modal Image Header */}
              <div className="w-full h-56 sm:h-64 shrink-0 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 relative">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Core Info (Scrollable if text is too long) */}
              <div className="p-6 overflow-y-auto space-y-6 CustomScrollbar">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                    <Cpu size={10} /> Arsitektur Sistem
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Deskripsi Lengkap - Tanpa Terpotong */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Dokumentasi Proyek</span>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal whitespace-pre-line">
                    {selectedProject.desc}
                  </p>
                </div>

                {/* Seluruh Tech Stack Terpasang */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Teknologi & Infrastruktur</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/30"
                      >
                        <Terminal size={11} className="text-indigo-500" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Action Button */}
              <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/60 flex justify-end shrink-0">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-indigo-700 transition"
                >
                  <span>Kunjungi Tautan Proyek</span>
                  <ExternalLink size={14} />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Project;
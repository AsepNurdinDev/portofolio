const Tools = () => {
  // Pengelompokan stack yang komprehensif dari Front-End hingga DevOps
  const techCategories = [
    {
      category: "Back-End Development",
      description: "Bahasa pemrograman dan ekosistem server untuk memproses logika bisnis.",
      skills: [
        { title: "Golang", desc: "High-Perf Microservices", img: "./img/tools/tool/golang.png" },
        { title: "Node.js", desc: "Asynchronous JavaScript", img: "./img/tools/tool/nodejs.png" },
      ],
    },
    {
      category: "Front-End & Optimization",
      description: "Antarmuka modern yang cepat, interaktif, dan ramah mesin pencari.",
      skills: [
        { title: "Next.js", desc: "SSR & Production Framework", img: "./img/tools/tool/nextjs.png" },
        { title: "React.js", desc: "Component-Based Library", img: "./img/tools/tool/reactjs.png" },
        { title: "Tailwind CSS", desc: "Utility-First Styling", img: "./img/tools/tool/tailwind.png" },
        { title: "Search Engine Optimization", desc: "SEO & Web Performance", img: "./img/tools/tool/seo2.png" },
      ],
    },
    {
      category: "Databases & Storage",
      description: "Penyimpanan data persisten baik terstruktur maupun berbasis dokumen.",
      skills: [
        { title: "MongoDB", desc: "NoSQL Document Database", img: "./img/tools/tool/mongodb.png" },
        { title: "MySQL / SQL", desc: "Relational Database Management", img: "./img/tools/tool/mysqldb.png" },
      ],
    },
    {
      category: "DevOps & Cloud Infrastructure",
      description: "Isolasi lingkungan aplikasi, manajemen klaster, dan deployment server.",
      skills: [
        { title: "Docker", desc: "Containerization System", img: "./img/tools/tool/docker.png" },
        { title: "Kubernetes", desc: "Container Orchestration", img: "./img/tools/tool/kubernetes3.png" },
        { title: "Ubuntu Server", desc: "Linux OS Production Environment", img: "./img/tools/tool/ubuntu2.png" },
        { title: "Nginx", desc: "Reverse Proxy & Load Balancer", img: "./img/tools/tool/nginx.png" },
      ],
    },
    {
      category: "CI/CD & Observability",
      description: "Otomatisasi pengiriman kode terintegrasi dan monitoring metrik sistem.",
      skills: [
        { title: "CI/CD Pipeline", desc: "GitHub Actions / Jenkins", img: "./img/tools/tool/cicd.png" },
        { title: "Prometheus", desc: "Metrics & Time-Series Data", img: "./img/tools/tool/prometheus.png" },
        { title: "Grafana", desc: "Metrics Visualization & Alerting", img: "./img/tools/tool/grafana.png" },
      ],
    },
  ];

  return (
    <section 
      id="tools" 
      className="w-full bg-slate-50 dark:bg-slate-950 py-24 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div data-aos="fade-right" className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-4">
            Ekosistem Teknologi
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-none mb-4">
            Technical Stack & Architecture
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Kombinasi perangkat penulisan kode, manajemen data, orkestrasi infrastruktur, hingga optimasi performa yang saya kuasai.
          </p>
        </div>

        {/* Looping per Kategori Stack */}
        <div className="space-y-16">
          {techCategories.map((cat, catIdx) => (
            <div key={catIdx} data-aos="fade-up" data-aos-delay={catIdx * 50} className="space-y-5">
              
              {/* Judul Sub-Kategori */}
              <div className="border-l-2 border-indigo-500 pl-4">
                <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  {cat.category}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {cat.description}
                </p>
              </div>

              {/* Grid Cards dalam Kategori */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.skills.map((tool, toolIdx) => (
                  <div
                    key={toolIdx}
                    className="group flex items-center gap-3 backdrop-blur-md bg-white/30 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-3.5 shadow-sm shadow-slate-950/5 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 hover:bg-white/60 dark:hover:bg-slate-900/70 transition-all duration-300"
                  >
                    {/* Wadah Logo Minimalis */}
                    <div className="w-11 h-11 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800/80 p-2 border border-slate-200/40 dark:border-slate-700/50 group-hover:scale-105 transition-all duration-300">
                      <img
                        src={tool.img}
                        alt={tool.title}
                        className="w-full h-full object-contain filter saturate-[0.85] group-hover:saturate-100 transition-all"
                      />
                    </div>
                    
                    {/* Teks Deskripsi Tool */}
                    <div className="min-w-0">
                      <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white tracking-tight truncate">
                        {tool.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 truncate">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tools;
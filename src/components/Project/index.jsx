const Project = () => {
  return (
    <div data-aos="fade-right" id="project">
      <section className="fonts-popins bg-white dark:bg-gray-900 py-12 transition-colors">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2
            id="project"
            className="text-2xl font-bold text-gray-800 dark:text-white mb-10"
          >
            Project Saya
            <p className="text-xl mt-2 font-normal font-poppins text-gray-600 mb-2">
              Berikut adalah beberapa Project saya
            </p>
          </h2>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                img: "./img/image.png",
                title: "Website Kursus Coding",
                desc: "Sebuah website Kursus Coding yang menyediakan berbagai kelas dan materi bermutu",
                tech: ["React", "Express.js", "TailwindCSS", "MySQL"],
                link: "https://kursus-coding.vercel.app/",
              },
              {
                img: "./img/tools/tool/bntea.png",
                title: "Website Kursus Coding",
                desc: "Sebuah website Kursus Coding yang menyediakan berbagai kelas dan materi bermutu",
                tech: ["HTML", "TailwindCSS", "JavaScript"],
                link: "https://bntea-culinary.vercel.app/",
              },

              ...Array().fill({
                img: "../img/project4.jpg",
                title: "Dashboard Admin",
                desc: "Sistem dashboard admin untuk mengelola data user dan laporan secara real-time.",
                tech: ["React", "Tailwind", "Firebase"],
                link: "#",
              }),
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-700 transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 dark:bg-indigo-800 dark:text-white text-indigo-700 text-xs px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block bg-indigo-600 text-white text-sm px-7 py-2 rounded-full shadow hover:bg-indigo-700 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔍 Lihat Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

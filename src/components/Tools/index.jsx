const Tools = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 py-12 transition-colors">
        <div
          data-aos="fade-right"
          className="mx-auto max-w-screen-xl px-6 md:px-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
            Tools yang Saya Gunakan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan{" "}
            <br />
            Website ataupun Design
          </p>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* CARD */}
            {[
              {
                img: "./img/tools/tool/vscode.png",
                title: "Vscode",
                desc: "Code Editor",
              },
              {
                img: "./img/tools/tool/reactjs.png",
                title: "ReactJS",
                desc: "Library JavaScript",
              },
              {
                img: "./img/tools/tool/tailwind.png",
                title: "TailwindCSS",
                desc: "CSS Framework",
              },
              {
                img: "./img/tools/tool/nodejs.png",
                title: "Node.js",
                desc: "JavaScript Runtime",
              },
              {
                img: "./img/tools/tool/github.png",
                title: "Github",
                desc: "Repository Github",
              },
              {
                img: "./img/tools/tool/figma.png",
                title: "Figma",
                desc: "UI/UX Design Tool",
              },
              {
                img: "./img/tools/tool/express.png",
                title: "Express.js",
                desc: "JavaScript Framework",
              },
              {
                img: "./img/tools/tool/laravel2.png",
                title: "Laravel",
                desc: "PHP Framework",
              },
              {
                img: "./img/tools/tool/mysql-db.png",
                title: "MySQL",
                desc: "Database",
              },
            ].map((tool, index) => (
              <div 
                key={index}
                className="group flex items-center gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-gray-50 dark:bg-gray-700 ring-1 ring-gray-200 dark:ring-gray-600">
                  <img
                    src={tool.img}
                    alt={tool.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {tool.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;

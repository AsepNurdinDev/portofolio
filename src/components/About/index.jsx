const About = () => {
  return (
    <div data-aos="fade-up" id="about">
      <section className="w-full bg-white dark:bg-gray-900 py-12 transition-colors">
        <div className="mx-auto max-w-screen-xl px-6 md:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-10 transition-colors">
            {/* BAGIAN TEKS */}
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Tentang Saya
              </h2>
              <p
                data-aos="fade-right"
                className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
              >
                Saya adalah seorang Web Developer dan Designer yang memiliki
                pengalaman lebih dari 2 tahun dalam membuat berbagai website,
                desain digital, serta media promosi. Saya senang belajar hal
                baru dan selalu berusaha memberikan hasil terbaik dalam setiap
                project yang saya kerjakan.
              </p>
            </div>

            {/* FOTO + STATISTIK */}
            <div
              data-aos="fade-right"
              className="md:w-1/3 flex flex-col items-center"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-indigo-500 shadow-md">
                <img
                  src="../img/dsc_3884.png"
                  alt="Asep Nurdin"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-indigo-600">10+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Project
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-indigo-600">2+ thn</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Pengalaman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

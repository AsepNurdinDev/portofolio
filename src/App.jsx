import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Contact } from "lucide-react";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer/Footer";
import About from "./components/About";
import Project from "./components/Project"

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <section className="bg-white dark:bg-gray-900 lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-12 lg:px-8 lg:py-32">
          {/* KIRI */}
          <div className="max-w-prose text-left space-y-6">
            {/* Box foto kecil dan tagline */}
            <div className="flex items-center space-x-4 bg-indigo-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm w-fit">
              <img
                src="../img/profile.jpg"
                alt="Foto Asep"
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-600"
              />
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-white">
                  Web Developer & Designer
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  "Kreatif, Konsisten, dan Kolaboratif"
                </p>
              </div>
            </div>

            {/* Judul dan deskripsi */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Hi, Saya
              <strong className="text-indigo-600"> Asep </strong>
              Nurdin
            </h1>

            <p className="text-base text-pretty text-gray-700 dark:text-gray-300 sm:text-lg/relaxed">
              Saya mempunyai ketertarikan dalam bidang Programming dan Designer,
              terutama pada pembuatan Website dan Desain seperti Poster, Pamflet
              serta Banner. Ketertarikan ini telah saya tekuni lebih dari 4
              tahun.
            </p>

            {/* Tombol aksi */}
            <div className="flex gap-4">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700"
                href="#"
              >
                Download CV
              </a>
              <a
                className="inline-block rounded border border-gray-200 dark:border-gray-600 px-5 py-3 font-medium text-gray-700 dark:text-gray-300 shadow-sm transition hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                href="#project"
              >
                Lihat Project
              </a>
            </div>
          </div>

          {/* KANAN - Foto besar */}
          <div className="mt-10 md:mt-0 flex justify-center">
            <div className="mt-10 md:mt-0 flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-700 transition-transform duration-300 hover:scale-105">
                <img
                  src="../img/profile.jpg"
                  alt="Asep Nurdin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <section className="bg-white py-12">
        <div className="mx-auto max-w-screen-xl px-6 md:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Tools yang Saya Gunakan
          </h2>
          <p className="text-xl font-bold text-gray-800 mb-8">
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan{" "}
            <br />
            Website ataupun Design
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CARD */}
            {[
              {
                img: "../img/reactjs.png",
                title: "ReactJS",
                desc: "Library JavaScript",
              },
              {
                img: "../img/tailwind.png",
                title: "TailwindCSS",
                desc: "CSS Framework",
              },
              {
                img: "../img/laravel.jpg",
                title: "Laravel",
                desc: "PHP Framework",
              },
              {
                img: "../img/nodejs.png",
                title: "Node.js",
                desc: "JavaScript Runtime",
              },
              {
                img: "../img/figma.png",
                title: "Figma",
                desc: "UI/UX Design Tool",
              },
              { img: "../img/mysql.png", title: "MySQL", desc: "Database" },
            ].map((tool, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-gray-50 ring-1 ring-gray-200">
                  <img
                    src={tool.img}
                    alt={tool.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-500">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Project />

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

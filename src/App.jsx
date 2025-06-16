import React, { useEffect, useState } from "react";

import { ReactTyped } from "react-typed";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import { Contact } from "lucide-react";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Tools from "./components/Tools";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <section className="bg-white dark:bg-gray-900 lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-12 lg:px-8 lg:py-32">
          {/* KIRI */}
          <div className="max-w-prose text-left space-y-6">
            {/* Box foto kecil dan tagline */}
            <div
              data-aos="fade-right"
              className="flex items-center space-x-4 bg-indigo-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm w-fit"
            >
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
                  "Kreatif, Inovatif, dan Kolaboratif"
                </p>
              </div>
            </div>

            {/* Judul dan deskripsi */}
            <h1
              data-aos="fade-left"
              className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl"
            >
              Hi, Saya{" "}
              <ReactTyped
                strings={[
                  "Asep Nurdin",
                  "Seorang Web Developer",
                  "UI Designer",
                ]}
                typeSpeed={100}
                backSpeed={100}
                showCursor={true}
                loop={true}
                className="text-indigo-600 font-bold"
              />
            </h1>

            <p
              data-aos="fade-up"
              className="text-base text-pretty text-gray-700 dark:text-gray-300 sm:text-lg/relaxed"
            >
              Saya mempunyai ketertarikan dalam bidang Programming dan Designer,
              terutama pada pembuatan Website dan Desain seperti Poster, Pamflet
              serta Banner. Ketertarikan ini telah saya tekuni lebih dari 2
              tahun.
            </p>

            {/* Tombol aksi */}
            <div className="flex gap-4">
              <a
                data-aos="fade-right"
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700"
                href=".img/tools/tool/CV-ASEP-NURDIN.pdf"
                download="CV_Asep_Nurdin.pdf"
              >
                Download CV
              </a>
              <a
                data-aos="fade-left"
                className="inline-block rounded border border-gray-200 dark:border-gray-600 px-5 py-3 font-medium text-gray-700 dark:text-gray-300 shadow-sm transition hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                href="#project"
              >
                Lihat Project
              </a>
            </div>
          </div>

          {/* KANAN - Foto besar */}
          <div
            data-aos="fade-down"
            className="mt-10 md:mt-0 flex justify-center"
          >
            <div className="mt-10 md:mt-0 flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-700 transition-transform duration-300 hover:scale-105">
                <img
                  src="../img/dsc_3883.png"
                  alt="Asep Nurdin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <Tools />

      <Project />

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

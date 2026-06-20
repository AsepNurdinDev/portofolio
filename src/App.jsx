import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
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
    <div className="w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans tracking-tight">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
        
        {/* Efek Lingkaran Cahaya Premium di Latar Belakang */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-16 md:grid md:grid-cols-12 md:items-center md:gap-12 relative z-10">
          
          {/* KOLOM KIRI - KONTEN UTAMA */}
          <div className="max-w-prose text-left space-y-6 md:col-span-7">
            
            {/* Box Status Floating Glassmorphism */}
            <div
              data-aos="fade-right"
              className="flex items-center space-x-4 backdrop-blur-md bg-white/40 dark:bg-slate-900/40 p-3 rounded-2xl border border-white/20 dark:border-slate-800/60 shadow-lg shadow-slate-950/5 w-fit"
            >
              <img
                src="../img/profile.jpg"
                alt="Foto Asep"
                className="w-10 h-10 rounded-xl object-cover border border-indigo-500/30 shadow-inner"
              />
              <div className="pr-2">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-wider uppercase">
                  Backend & DevOps Engineer
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Available for Projects
                  </p>
                </div>
              </div>
            </div>

            {/* Judul Utama dengan Animasi Mengetik */}
            <h1
              data-aos="fade-up"
              className="text-4xl font-extrabold text-slate-950 dark:text-white sm:text-5xl tracking-tight leading-[1.15]"
            >
              Hi, Saya{" "}
              <span className="block mt-1">
                <ReactTyped
                  strings={[
                    "Asep Nurdin.",
                    "Backend Dev.",
                    "DevOps Engineer.",
                  ]}
                  typeSpeed={80}
                  backSpeed={60}
                  showCursor={true}
                  loop={true}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400 font-extrabold"
                />
              </span>
            </h1>

            {/* Deskripsi Karir Berbobot Profesional */}
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal"
            >
              Mahasiswa Ilmu Komputer yang fokus membangun arsitektur backend berkinerja tinggi, manajemen kontainer, serta otomatisasi pipeline infrastruktur cloud. Berpengalaman mentransformasikan logika sistem kompleks menjadi platform digital yang skalabel dan andal.
            </p>
{/* Tombol Aksi Modern */}
<div className="flex flex-wrap gap-4 pt-2" data-aos="fade-up" data-aos-delay="200">
  <a
    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition-all duration-300 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98]"
    // PERBAIKAN: Mengarah langsung ke file di root folder public
    href="/CV_ASEP_NURDIN.pdf" 
    download="CV_ASEP_NURDIN.pdf"
  >
    Download CV
  </a>
  <a
    className="inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm bg-white/20 dark:bg-slate-900/20 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-300 hover:bg-slate-100/50 dark:hover:bg-slate-900/50 hover:text-slate-950 dark:hover:text-white hover:scale-[1.02] active:scale-[0.98]"
    href="#project"
  >
    Lihat Project
  </a>
</div>
          </div>

          {/* KOLOM KANAN - FOTO UTAMA */}
          <div
            data-aos="fade-zoom-in"
            data-aos-delay="300"
            className="mt-12 md:mt-0 flex justify-center md:col-span-5"
          >
            {/* Frame Geometris Tech Kontemporer */}
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden p-[1px] bg-gradient-to-b from-indigo-500/30 to-transparent dark:from-slate-800 dark:to-transparent shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src="../img/dsc_3883.png"
                  alt="Asep Nurdin"
                  className="w-full h-full object-cover filter saturate-[0.9] contrast-[1.02]"
                />
              </div>
              {/* Overlay Glassmorphism Tipis saat di-hover */}
              <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* Komponen Lanjutan */}
      <About />
      <Tools />
      <Project />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
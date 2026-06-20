import { useState } from "react";
import { Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" }); // types: "success" | "error" | null

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/asepnurdin1902@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus({ type: "success", message: "Pesan Anda berhasil terkirim! Saya akan segera menghubungi Anda." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Gagal kirim");
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Gagal mengirim pesan. Silakan coba beberapa saat lagi." });
    } finally {
      setIsLoading(false);
      // Hilangkan alert otomatis setelah 5 detik
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-slate-50 dark:bg-slate-950 py-24 transition-colors duration-300 overflow-hidden relative"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div data-aos="fade-up" className="max-w-xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">
            Hubungi Saya
          </div>
          <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Mari Mulai <span className="text-indigo-500 dark:text-indigo-400">Kolaborasi</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto">
            Punya ide proyek company profile, kebutuhan arsitektur backend, atau optimasi DevOps? Kirimkan pesan Anda di bawah ini.
          </p>
        </div>

        {/* Notifikasi Status Pengiriman */}
        {status.type === "success" && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-xs font-medium text-emerald-600 dark:text-emerald-400 shadow-sm animate-fade-in">
            <CheckCircle2 size={16} className="shrink-0" />
            <span>{status.message}</span>
          </div>
        )}

        {status.type === "error" && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 p-4 text-xs font-medium text-rose-600 dark:text-rose-400 shadow-sm animate-fade-in">
            <AlertCircle size={16} className="shrink-0" />
            <span>{status.message}</span>
          </div>
        )}

        {/* Form dengan Efek Premium Glassmorphism */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 backdrop-blur-md bg-white/30 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/60 p-6 md:p-10 rounded-3xl shadow-xl shadow-slate-950/5 transition-all"
        >
          {/* Input Nama */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              required
              disabled={isLoading}
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama Anda"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-sm text-slate-900 dark:text-white p-3.5 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/20 transition-all disabled:opacity-50"
            />
          </div>

          {/* Input Email */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Alamat Email
            </label>
            <input
              type="email"
              name="email"
              required
              disabled={isLoading}
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-sm text-slate-900 dark:text-white p-3.5 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/20 transition-all disabled:opacity-50"
            />
          </div>

          {/* Input Pesan */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Detail Pesan
            </label>
            <textarea
              name="message"
              rows="4"
              required
              disabled={isLoading}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tuliskan detail rencana proyek atau pertanyaan Anda di sini..."
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-sm text-slate-900 dark:text-white p-3.5 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none disabled:opacity-50"
            ></textarea>
          </div>

          {/* Tombol Kirim dengan State Loading */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 disabled:from-slate-600 disabled:to-slate-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition-all duration-300 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] disabled:scale-100 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sedang Mengirim...</span>
              </>
            ) : (
              <>
                <span>Kirim Pesan</span>
                <Send size={14} />
              </>
            )}
          </button>
        </form>
        
      </div>
    </section>
  );
};

export default ContactForm;
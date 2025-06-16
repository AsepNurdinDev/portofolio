import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Gagal kirim");
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    }
  };

  return (
    <section
      className="bg-white dark:bg-gray-900 py-20 transition-colors"
      id="contact"
    >
      <div data-aos="fade-up" className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Hubungi Saya
        </h2>

        {isSubmitted && (
          <div className="mb-6 rounded-lg bg-green-100 dark:bg-green-200/20 p-4 text-green-800 dark:text-green-300 text-center">
            ✅ Email berhasil dikirim!
          </div>
        )}

        {isError && (
          <div className="mb-6 rounded-lg bg-red-100 dark:bg-red-200/20 p-4 text-red-800 dark:text-red-400 text-center">
            ❌ Gagal mengirim. Coba lagi nanti.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-colors"
        >
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">
              Nama
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-3 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-3 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">
              Pesan
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-3 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Kirim Pesan ✉️
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

export default function Contact() {
  return (
    <main className="pt-24">

      <section className="py-24 text-center bg-gray-50 dark:bg-transparent">
        <h1 className="text-4xl font-bold mb-4">
          Contact <span className="text-yellow-400">AstroGuru</span>
        </h1>

        <p className="mb-12 text-black/70 dark:text-white/70">
          Get in touch for consultations & queries
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          {/* INFO */}
          <div
            className="
              p-8 rounded-xl text-left
              bg-white dark:bg-[#0b0620]
              border border-black/10 dark:border-white/10
            "
          >
            <p className="mb-3 text-black/70 dark:text-white/70">
              📞 +91 XXXXX XXXXX
            </p>
            <p className="mb-3 text-black/70 dark:text-white/70">
              📧 astrologer@email.com
            </p>
            <p className="mb-3 text-black/70 dark:text-white/70">
              🕒 Mon – Sat (10 AM – 8 PM)
            </p>
            <p className="text-black/70 dark:text-white/70">
              📍 Jaipur, India
            </p>
          </div>

          {/* FORM */}
          <form
            className="
              p-8 rounded-xl space-y-4
              bg-white dark:bg-[#0b0620]
              border border-black/10 dark:border-white/10
            "
          >
            <input
              className="
                w-full p-3 rounded outline-none
                bg-gray-100 dark:bg-black/40
                text-black dark:text-white
                border border-black/10 dark:border-white/10
              "
              placeholder="Your Name"
            />

            <input
              className="
                w-full p-3 rounded outline-none
                bg-gray-100 dark:bg-black/40
                text-black dark:text-white
                border border-black/10 dark:border-white/10
              "
              placeholder="Email / Phone"
            />

            <textarea
              rows="4"
              className="
                w-full p-3 rounded outline-none
                bg-gray-100 dark:bg-black/40
                text-black dark:text-white
                border border-black/10 dark:border-white/10
              "
              placeholder="Message"
            />

            <button
              className="
                w-full py-3 rounded
                bg-yellow-400 text-black font-semibold
                hover:bg-yellow-300 transition
                shadow-[0_0_20px_rgba(250,204,21,0.4)]
              "
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

    </main>
  );
}

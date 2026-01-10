export default function Consultation() {
  return (
    <main className="pt-24">

      <section className="py-24 text-center bg-gray-50 dark:bg-transparent">
        <h1 className="text-4xl font-bold mb-4">
          Book <span className="text-yellow-400">Consultation</span>
        </h1>

        <p className="mb-12 text-black/70 dark:text-white/70">
          One-to-one personalized astrology guidance
        </p>

        <div
          className="
            max-w-3xl mx-auto p-10 rounded-xl
            bg-white dark:bg-[#0b0620]
            border border-black/10 dark:border-white/10
          "
        >
          <form className="grid gap-4">

            <input
              className="
                p-3 rounded outline-none
                bg-gray-100 dark:bg-black/40
                text-black dark:text-white
                border border-black/10 dark:border-white/10
              "
              placeholder="Full Name"
            />

            <input
              type="date"
              className="
                p-3 rounded outline-none
                bg-gray-100 dark:bg-black/40
                text-black dark:text-white
                border border-black/10 dark:border-white/10
              "
            />

            <input
              type="time"
              className="
                p-3 rounded outline-none
                bg-gray-100 dark:bg-black/40
                text-black dark:text-white
                border border-black/10 dark:border-white/10
              "
            />

            <input
              className="
                p-3 rounded outline-none
                bg-gray-100 dark:bg-black/40
                text-black dark:text-white
                border border-black/10 dark:border-white/10
              "
              placeholder="Place of Birth"
            />

            <select
              className="
                p-3 rounded outline-none
                bg-gray-100 dark:bg-black/40
                text-black dark:text-white
                border border-black/10 dark:border-white/10
              "
            >
              <option>Select Service</option>
              <option>Kundli</option>
              <option>Love & Marriage</option>
              <option>Career</option>
              <option>Health</option>
              <option>Gemstone</option>
            </select>

            <button
              className="
                mt-4 py-3 rounded
                bg-yellow-400 text-black font-semibold
                hover:bg-yellow-300 transition
                shadow-[0_0_20px_rgba(250,204,21,0.4)]
              "
            >
              Proceed to Consultation
            </button>

          </form>
        </div>
      </section>

    </main>
  );
}

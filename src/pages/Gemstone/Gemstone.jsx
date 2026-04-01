import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Gemstone() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="relative py-28 text-center overflow-hidden bg-gray-50 dark:bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.18),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Gemstone <span className="text-yellow-400">Recommendation</span>
          </h1>
          <p className="mt-6 text-lg text-black/70 dark:text-white/70">
            Wear the right stone to balance planetary energies — not fashion.
          </p>
          <Link
            to="/consultation"
            className="
              inline-block mt-10 px-8 py-3 rounded-full
              bg-yellow-400 text-black font-semibold
              hover:bg-yellow-300 transition
              shadow-[0_0_30px_rgba(234,179,8,0.4)]
            "
          >
            Get Gemstone Advice
          </Link>
        </motion.div>
      </section>

      {/* HOW GEMSTONES WORK */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              How <span className="text-yellow-400">Gemstones Work</span>
            </h2>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              Each gemstone carries a specific planetary vibration. When worn
              correctly, it strengthens weak planets and reduces negative
              effects shown in your Kundli.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              p-10 rounded-2xl
              bg-white dark:bg-[#0c0620]
              border border-black/10 dark:border-white/10
            "
          >
            <ul className="space-y-3 text-black/70 dark:text-white/70">
              <li>• Planetary energy resonance</li>
              <li>• Body aura interaction</li>
              <li>• Long-term effect</li>
              <li>• Must be Kundli-based</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PLANET & STONE */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Planets & <span className="text-yellow-400">Gemstones</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Sun – Ruby",
              "Moon – Pearl",
              "Mars – Red Coral",
              "Mercury – Emerald",
              "Jupiter – Yellow Sapphire",
              "Venus – Diamond",
              "Saturn – Blue Sapphire",
            ].map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="
                  p-8 rounded-xl text-center
                  bg-white dark:bg-[#0b0620]
                  border border-black/10 dark:border-white/10
                "
              >
                <p className="text-black/80 dark:text-white/80">{g}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ASTROLOGER DECIDES */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">
            What Astrologer <span className="text-yellow-400">Decides</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Which gemstone",
              "Stone weight (carat)",
              "Metal (Gold/Silver)",
              "Finger to wear",
              "Day & time",
              "Trial period",
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  p-8 rounded-xl
                  bg-white dark:bg-[#0b0620]
                  border border-black/10 dark:border-white/10
                "
              >
                <p className="text-black/70 dark:text-white/70">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WARNING */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-10 rounded-2xl bg-red-500/10 border border-red-500/30">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              ⚠️ Important Warning
            </h3>
            <p className="text-black/70 dark:text-white/70">
              Wearing gemstone without Kundli analysis can create negative
              effects. Always consult an astrologer before wearing any stone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-100 dark:bg-[#070213]">
        <h2 className="text-3xl font-bold mb-6">
          Want the <span className="text-yellow-400">Right Gemstone?</span>
        </h2>
        <Link
          to="/consultation"
          className="
            inline-block mt-6 px-10 py-3 rounded-full
            bg-yellow-400 text-black font-semibold
            hover:bg-yellow-300 transition
            shadow-[0_0_30px_rgba(234,179,8,0.4)]
          "
        >
          Book Gemstone Consultation
        </Link>
      </section>

    </main>
  );
}

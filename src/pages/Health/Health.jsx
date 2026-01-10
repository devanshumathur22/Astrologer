import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Health() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="relative py-28 text-center overflow-hidden bg-gray-50 dark:bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Health <span className="text-sky-500">Astrology</span>
          </h1>
          <p className="mt-6 text-lg text-black/70 dark:text-white/70">
            Identify health-sensitive periods and preventive guidance through astrology.
          </p>
          <Link
            to="/consultation"
            className="
              inline-block mt-10 px-8 py-3 rounded-full
              bg-sky-500 text-black font-semibold
              hover:bg-sky-400 transition
              shadow-[0_0_30px_rgba(56,189,248,0.4)]
            "
          >
            Get Health Guidance
          </Link>
        </motion.div>
      </section>

      {/* WHAT HEALTH ASTROLOGY IS */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              What is <span className="text-sky-500">Health Astrology?</span>
            </h2>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              Health astrology studies the influence of planets on different body
              parts. It helps identify weak areas, sensitive periods, and
              preventive remedies before problems become serious.
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
            <p className="text-sky-500 text-xl font-semibold mb-3">
              Important Note
            </p>
            <p className="text-black/70 dark:text-white/70">
              Astrology supports awareness and prevention, not medical diagnosis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BODY & PLANETS */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Body Parts & <span className="text-sky-500">Planets</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Sun – Heart, Bones",
              "Moon – Mind, Fluids",
              "Mars – Blood, Muscles",
              "Mercury – Nerves, Skin",
              "Jupiter – Liver, Growth",
              "Saturn – Joints, Chronic Issues",
            ].map((item, i) => (
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
                <p className="text-black/70 dark:text-white/70">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ASTROLOGER CHECKS */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">
            What Astrologer <span className="text-sky-500">Checks</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "6th House (Diseases)",
              "8th House (Chronic Issues)",
              "Planet Afflictions",
              "Running Dasha",
              "Transit Impact",
              "Weak Body Areas",
            ].map((r, i) => (
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
                <p className="text-black/70 dark:text-white/70">{r}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">
            What You <span className="text-sky-500">Receive</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Health-sensitive periods",
              "Preventive guidance",
              "Lifestyle suggestions",
              "Astro remedies",
              "Mental peace insights",
              "Well-being awareness",
            ].map((r, i) => (
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
                <p className="text-black/70 dark:text-white/70">{r}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-100 dark:bg-[#070213]">
        <h2 className="text-3xl font-bold mb-6">
          Want Better <span className="text-sky-500">Health Awareness?</span>
        </h2>
        <Link
          to="/consultation"
          className="
            inline-block mt-6 px-10 py-3 rounded-full
            bg-sky-500 text-black font-semibold
            hover:bg-sky-400 transition
            shadow-[0_0_30px_rgba(56,189,248,0.4)]
          "
        >
          Book Health Consultation
        </Link>
      </section>

    </main>
  );
}

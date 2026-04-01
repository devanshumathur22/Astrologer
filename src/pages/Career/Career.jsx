import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Career() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="relative py-28 text-center overflow-hidden bg-gray-50 dark:bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Career & <span className="text-green-500">Business</span> Astrology
          </h1>
          <p className="mt-6 text-lg text-black/70 dark:text-white/70">
            Choose the right profession, right timing, and growth path through astrology.
          </p>
          <Link
            to="/consultation"
            className="
              inline-block mt-10 px-8 py-3 rounded-full
              bg-green-500 text-black font-semibold
              hover:bg-green-400 transition
              shadow-[0_0_30px_rgba(34,197,94,0.4)]
            "
          >
            Get Career Guidance
          </Link>
        </motion.div>
      </section>

      {/* QUESTIONS ANSWERED */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Questions <span className="text-green-500">Answered</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Job or Business?",
              "Promotion Kab Milegi?",
              "Career Switch Sahi Hai?",
              "Government Job Chances?",
              "Business Growth Timing",
              "Foreign Opportunities",
            ].map((q, i) => (
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
                <p className="text-black/70 dark:text-white/70">{q}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ASTRO LOGIC */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              How Astrology <span className="text-green-500">Guides Career</span>
            </h2>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              Career is mainly seen through the 10th house, Saturn for stability,
              Jupiter for growth and Mercury for skills. Dasha and transit decide
              job changes and promotions.
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
              <li>• 10th House (Career)</li>
              <li>• Saturn (Discipline)</li>
              <li>• Jupiter (Growth)</li>
              <li>• Mercury (Skills)</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">
            What You <span className="text-green-500">Receive</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Career Direction",
              "Best Time for Growth",
              "Job Stability Insights",
              "Business Success Period",
              "Career Remedies",
              "Long-term Planning",
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
      <section className="py-24 text-center bg-gray-50 dark:bg-transparent">
        <h2 className="text-3xl font-bold mb-6">
          Want Clarity in Your <span className="text-green-500">Career?</span>
        </h2>
        <Link
          to="/consultation"
          className="
            inline-block mt-6 px-10 py-3 rounded-full
            bg-green-500 text-black font-semibold
            hover:bg-green-400 transition
            shadow-[0_0_30px_rgba(34,197,94,0.4)]
          "
        >
          Book Career Consultation
        </Link>
      </section>

    </main>
  );
}

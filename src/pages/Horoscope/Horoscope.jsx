import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Horoscope() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="relative py-28 text-center overflow-hidden bg-gray-50 dark:bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.18),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Daily <span className="text-purple-500">Horoscope</span> Reading
          </h1>
          <p className="mt-6 text-lg text-black/70 dark:text-white/70">
            Understand today’s planetary influence on your life.
          </p>
          <Link
            to="/consultation"
            className="
              inline-block mt-10 px-8 py-3 rounded-full
              bg-purple-500 text-black font-semibold
              hover:bg-purple-400 transition
              shadow-[0_0_30px_rgba(168,85,247,0.4)]
            "
          >
            Get Today’s Horoscope
          </Link>
        </motion.div>
      </section>

      {/* WHAT IS HOROSCOPE */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              What is a <span className="text-purple-500">Horoscope?</span>
            </h2>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              Horoscope is a daily, weekly or yearly prediction based on the
              movement of planets through zodiac signs. It helps you plan
              actions at the right time.
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
            <p className="text-purple-500 text-xl font-semibold mb-3">
              Key Insight
            </p>
            <p className="text-black/70 dark:text-white/70">
              Horoscope changes every day with planetary transits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HOW ASTROLOGER READS */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            How Astrologer <span className="text-purple-500">Reads Horoscope</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Current Planet Position",
              "Zodiac Sign",
              "Planetary Aspects",
              "Running Dasha",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="
                  p-8 rounded-xl text-center
                  bg-white dark:bg-[#0b0620]
                  border border-black/10 dark:border-white/10
                "
              >
                <p className="text-black/80 dark:text-white/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES OF HOROSCOPE */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">
            Types of <span className="text-purple-500">Horoscope</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Daily Horoscope",
              "Weekly Horoscope",
              "Monthly Horoscope",
              "Yearly Horoscope",
              "Career Horoscope",
              "Love Horoscope",
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  p-8 rounded-2xl
                  bg-white dark:bg-[#0c0620]
                  border border-black/10 dark:border-white/10
                "
              >
                <p className="text-black/70 dark:text-white/70">{type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">
            Benefits of <span className="text-purple-500">Horoscope</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Right timing decisions",
              "Avoid negative periods",
              "Mental clarity",
              "Better planning",
              "Relationship understanding",
              "Positive mindset",
            ].map((b, i) => (
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
                <p className="text-black/70 dark:text-white/70">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-100 dark:bg-[#070213]">
        <h2 className="text-3xl font-bold mb-6">
          Want Accurate <span className="text-purple-500">Predictions?</span>
        </h2>
        <Link
          to="/consultation"
          className="
            inline-block mt-6 px-10 py-3 rounded-full
            bg-purple-500 text-black font-semibold
            hover:bg-purple-400 transition
            shadow-[0_0_30px_rgba(168,85,247,0.4)]
          "
        >
          Book Horoscope Consultation
        </Link>
      </section>

    </main>
  );
}

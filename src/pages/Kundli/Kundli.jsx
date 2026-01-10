import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Kundli() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="relative py-28 text-center overflow-hidden bg-gray-50 dark:bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Janam <span className="text-yellow-400">Kundli</span> Analysis
          </h1>
          <p className="mt-6 text-lg text-black/70 dark:text-white/70">
            Your life blueprint created at the exact moment of your birth.
          </p>

          <Link
            to="/consultation"
            className="
              inline-block mt-10 px-8 py-3 rounded-full
              bg-yellow-400 text-black font-semibold
              hover:bg-yellow-300 transition
              shadow-[0_0_30px_rgba(250,204,21,0.4)]
            "
          >
            Get Your Kundli
          </Link>
        </motion.div>
      </section>

      {/* WHAT IS KUNDLI */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              What is <span className="text-yellow-400">Janam Kundli?</span>
            </h2>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              Janam Kundli is a cosmic map created using your birth date, time,
              and place. It shows planetary positions that influence your
              career, marriage, health, wealth, and overall life direction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              p-10 rounded-2xl text-center
              bg-white dark:bg-[#0c0620]
              border border-black/10 dark:border-white/10
            "
          >
            <p className="text-yellow-500 text-xl font-semibold mb-3">
              Astrology Fact
            </p>
            <p className="text-black/70 dark:text-white/70">
              Even 1 minute difference in birth time can change predictions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DETAILS REQUIRED */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">
            Details <span className="text-yellow-400">Required</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Full Name",
              "Date of Birth",
              "Time of Birth",
              "Place of Birth",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="
                  p-8 rounded-xl
                  bg-white dark:bg-[#0b0620]
                  border border-black/10 dark:border-white/10
                "
              >
                <p className="text-lg font-semibold text-yellow-500">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ASTROLOGER ANALYZES */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Astrologer <span className="text-yellow-400">Analyzes</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "12 Houses (Bhav)",
              "9 Planets (Navgraha)",
              "Yog & Dosha",
              "Mahadasha / Antardasha",
              "Planet Strength",
              "Transit Effects",
            ].map((point, i) => (
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
                <p className="text-black/80 dark:text-white/80">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">
            What You <span className="text-yellow-400">Receive</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Career Direction",
              "Marriage Timing",
              "Health Insights",
              "Financial Growth",
              "Problem Remedies",
              "Personal Guidance",
            ].map((res, i) => (
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
                <p className="text-black/70 dark:text-white/70">
                  {res}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-100 dark:bg-[#070213]">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Know Your <span className="text-yellow-400">Destiny?</span>
        </h2>
        <Link
          to="/consultation"
          className="
            inline-block mt-6 px-10 py-3 rounded-full
            bg-yellow-400 text-black font-semibold
            hover:bg-yellow-300 transition
            shadow-[0_0_30px_rgba(250,204,21,0.4)]
          "
        >
          Book Kundli Consultation
        </Link>
      </section>

    </main>
  );
}

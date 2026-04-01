import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="
        relative min-h-[90vh] flex items-center justify-center text-center
        overflow-hidden
        bg-gray-50 dark:bg-transparent
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.15),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Discover Your <span className="text-yellow-400">Destiny</span>
          <br />
          Through Ancient Astrology
        </h1>

        <p className="mt-6 text-lg text-black/70 dark:text-white/70">
          Personalized Kundli, Horoscope & Life Guidance based on Vedic Astrology
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            to="/kundli"
            className="
              px-8 py-3 rounded-full
              bg-yellow-400 text-black font-semibold
              hover:bg-yellow-300 transition
              shadow-[0_0_30px_rgba(250,204,21,0.4)]
            "
          >
            Get Your Kundli
          </Link>

          <Link
            to="/consultation"
            className="
              px-8 py-3 rounded-full
              border border-yellow-400
              text-yellow-600 dark:text-yellow-300
              hover:bg-yellow-400 hover:text-black
              transition
            "
          >
            Book Consultation
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function PageHero({ title, highlight, subtitle }) {
  return (
    <section
      className="
        relative py-28 text-center overflow-hidden
        bg-gray-50 text-black
        dark:bg-transparent dark:text-white
      "
    >
      {/* Glow background (same for both themes) */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.15),transparent_60%)]
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title}{" "}
          <span className="text-yellow-400">{highlight}</span>
        </h1>

        {subtitle && (
          <p className="text-black/70 dark:text-white/70 text-lg">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}

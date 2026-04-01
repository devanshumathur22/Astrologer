import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTAButton({
  title,
  highlight,
  description,
  buttonText = "Book Consultation",
  buttonLink = "/consultation",
}) {
  return (
    <section
      className="
        py-24 relative overflow-hidden
        bg-gray-50 text-black
        dark:bg-[#070213] dark:text-white
      "
    >
      {/* Glow background */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15),transparent_60%)]
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {title}{" "}
          <span className="text-yellow-400">{highlight}</span>
        </h2>

        <p className="text-black/70 dark:text-white/70 mb-10">
          {description}
        </p>

        <Link
          to={buttonLink}
          className="
            inline-block px-10 py-3 rounded-full
            bg-yellow-400 text-black font-semibold
            hover:bg-yellow-300 transition
            shadow-[0_0_25px_rgba(250,204,21,0.4)]
          "
        >
          {buttonText}
        </Link>
      </motion.div>
    </section>
  );
}

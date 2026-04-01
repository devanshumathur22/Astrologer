import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import services from "../../data/services";

export default function Services() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 bg-gray-100 dark:bg-[#070213]">
      <h2 className="text-3xl font-bold text-center mb-14">
        Astrology <span className="text-yellow-400">Services</span>
      </h2>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="
              p-8 rounded-xl
              bg-white dark:bg-[#0b0620]
              border border-black/10 dark:border-white/10
            "
          >
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-sm mb-4 text-black/70 dark:text-white/70">
              {service.description}
            </p>

            <Link
              to={service.path}
              className="text-yellow-500 hover:text-yellow-400 transition"
            >
              Explore →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

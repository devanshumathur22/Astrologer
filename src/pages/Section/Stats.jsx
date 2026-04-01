import { motion } from "framer-motion";

const stats = [
  { value: "5000+", label: "Kundli Read" },
  { value: "1200+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gray-100 dark:bg-[#070213]">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="
              p-10 rounded-2xl
              bg-white dark:bg-[#0c0620]
              border border-black/10 dark:border-white/10
            "
          >
            <div className="text-4xl font-bold text-yellow-400 mb-2">
              {s.value}
            </div>

            <p className="text-black/70 dark:text-white/70">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

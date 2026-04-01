import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const steps = [
  "Enter Birth Details",
  "Astrologer Analysis",
  "Personal Predictions",
  "Remedies & Guidance",
];

export default function HowItWorks() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="py-24 bg-gray-50 dark:bg-transparent"
    >
      <h2 className="text-3xl font-bold text-center mb-14">
        How It <span className="text-yellow-400">Works</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            className="
              p-6 rounded-xl text-center font-medium
              bg-white dark:bg-[#0b0620]
              border border-black/10 dark:border-white/10
              text-black/70 dark:text-white/70
            "
          >
            {step}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

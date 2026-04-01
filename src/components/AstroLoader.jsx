import { motion } from "framer-motion";

export default function AstroLoader() {
  return (
    <div
      className="
        fixed inset-0 z-[9999] flex items-center justify-center
        bg-white dark:bg-[#05010d]
        transition-colors duration-300
      "
    >
      {/* outer glow */}
      <div className="relative flex flex-col items-center">
        
        {/* rotating zodiac ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="
            absolute w-44 h-44 rounded-full
            border border-yellow-400/30
            shadow-[0_0_60px_rgba(250,204,21,0.25)]
          "
        />

        {/* inner spinning planet */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="
            w-20 h-20 rounded-full
            border-4 border-yellow-400 border-t-transparent
            shadow-[0_0_25px_rgba(250,204,21,0.6)]
            flex items-center justify-center
          "
        >
          <span className="text-2xl">🔮</span>
        </motion.div>

        {/* brand */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-2xl font-bold tracking-widest text-yellow-400"
        >
          ASTROGURU
        </motion.h2>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-2 text-sm tracking-wide text-black/60 dark:text-white/60"
        >
          Aligning planets with destiny
        </motion.p>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function MatchMaking() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="py-24 text-center bg-gray-50 dark:bg-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Match <span className="text-yellow-400">Making</span> (Gun Milan)
        </h1>
        <p className="max-w-2xl mx-auto text-black/70 dark:text-white/70">
          Marriage compatibility analysis based on Vedic astrology for long-term harmony.
        </p>
      </section>

      {/* WHAT IS GUN MILAN */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            What is <span className="text-yellow-400">Gun Milan?</span>
          </h2>
          <p className="leading-relaxed text-black/70 dark:text-white/70">
            Gun Milan is a traditional Vedic system that matches two Kundlis on
            36 points (Guns). It evaluates mental compatibility, health,
            progeny, finances, and overall marital happiness.
          </p>
        </div>
      </section>

      {/* 36 GUN SYSTEM */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">
            36 <span className="text-yellow-400">Gun</span> System
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Varna", "Spiritual compatibility"],
              ["Vashya", "Mutual influence"],
              ["Tara", "Health & destiny"],
              ["Yoni", "Physical & emotional bond"],
              ["Graha Maitri", "Mental harmony"],
              ["Gana", "Nature & temperament"],
              ["Bhakoot", "Family & finances"],
              ["Nadi", "Health & progeny"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="
                  p-8 rounded-xl
                  bg-white dark:bg-[#0b0620]
                  border border-black/10 dark:border-white/10
                "
              >
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCORE MEANING */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">
            Match <span className="text-yellow-400">Score Meaning</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["0 – 17 Guns", "Not recommended"],
              ["18 – 24 Guns", "Average match"],
              ["25 – 36 Guns", "Good to excellent match"],
            ].map(([range, meaning]) => (
              <div
                key={range}
                className="
                  p-8 rounded-xl
                  bg-white dark:bg-[#0b0620]
                  border border-black/10 dark:border-white/10
                "
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  {range}
                </h3>
                <p className="text-black/70 dark:text-white/70">
                  {meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOSHA CHECK */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Dosha <span className="text-yellow-400">Analysis</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              "Manglik Dosha",
              "Nadi Dosha",
              "Bhakoot Dosha",
            ].map((d) => (
              <div
                key={d}
                className="
                  p-8 rounded-xl
                  bg-white dark:bg-[#0b0620]
                  border border-black/10 dark:border-white/10
                "
              >
                <p className="text-black/70 dark:text-white/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-10 rounded-2xl bg-yellow-400/10 border border-yellow-400/30">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              ⚠️ Important Note
            </h3>
            <p className="text-black/70 dark:text-white/70">
              Low gun score does not always mean marriage failure.
              Detailed Kundli analysis and remedies can balance many doshas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-50 dark:bg-transparent">
        <h2 className="text-3xl font-bold mb-6">
          Check Your <span className="text-yellow-400">Compatibility</span>
        </h2>
        <Link
          to="/consultation"
          className="
            inline-block px-10 py-3 rounded-full
            bg-yellow-400 text-black font-semibold
            hover:bg-yellow-300 transition
            shadow-[0_0_20px_rgba(250,204,21,0.4)]
          "
        >
          Book Match Making Consultation
        </Link>
      </section>

    </main>
  );
}

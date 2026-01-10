import { Link } from "react-router-dom";

export default function Remedies() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="py-24 text-center bg-gray-50 dark:bg-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Astrology <span className="text-yellow-400">Remedies</span>
        </h1>
        <p className="max-w-2xl mx-auto text-black/70 dark:text-white/70">
          Simple, ethical and effective remedies based on your Kundli – no fear,
          no superstition.
        </p>
      </section>

      {/* WHAT ARE REMEDIES */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            What are <span className="text-yellow-400">Astrology Remedies?</span>
          </h2>
          <p className="leading-relaxed text-black/70 dark:text-white/70">
            Remedies are solutions suggested to balance weak or afflicted planets
            in your birth chart. They are meant to reduce negative impact and
            strengthen positive planetary energies in a natural and gradual way.
            <br /><br />
            Remedies are always given after proper Kundli analysis — never random
            or copied.
          </p>
        </div>
      </section>

      {/* TYPES OF REMEDIES */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Types of <span className="text-yellow-400">Remedies</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Mantra Remedies", "Chanting specific mantras to strengthen planets"],
              ["Gemstone Remedies", "Wearing gemstones based on Kundli"],
              ["Yantra Remedies", "Energized yantras for planetary balance"],
              ["Puja & Havan", "Spiritual rituals performed at right time"],
              ["Donation Remedies", "Charity to reduce planetary negativity"],
              ["Lifestyle Remedies", "Daily habits aligned with planets"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="
                  p-8 rounded-xl
                  bg-white dark:bg-[#0b0620]
                  border border-black/10 dark:border-white/10
                "
              >
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW REMEDIES ARE DECIDED */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">
            How Remedies Are <span className="text-yellow-400">Decided</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Planet Strength & Weakness",
              "Running Dasha / Mahadasha",
              "Current Transit",
              "Problem Severity",
            ].map((item) => (
              <div
                key={item}
                className="
                  p-6 rounded-xl
                  bg-white dark:bg-[#0b0620]
                  border border-black/10 dark:border-white/10
                "
              >
                <p className="text-black/70 dark:text-white/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-10 rounded-2xl bg-yellow-400/10 border border-yellow-400/30">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              ⚠️ Important Note
            </h3>
            <p className="text-black/70 dark:text-white/70">
              Remedies work gradually. Astrology does not promise instant magic.
              Consistency, faith and correct guidance are important.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-100 dark:bg-[#070213]">
        <h2 className="text-3xl font-bold mb-6">
          Need the <span className="text-yellow-400">Right Remedy?</span>
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
          Get Personalized Remedies
        </Link>
      </section>

    </main>
  );
}

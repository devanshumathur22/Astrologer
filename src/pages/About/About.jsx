import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="py-24 text-center bg-gray-50 dark:bg-transparent">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-yellow-400">AstroGuru</span>
        </h1>
        <p className="max-w-2xl mx-auto text-black/70 dark:text-white/70">
          Guiding lives through the wisdom of Vedic Astrology
        </p>
      </section>

      {/* ASTROLOGER STORY */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            The <span className="text-yellow-400">Astrologer</span>
          </h2>
          <p className="leading-relaxed text-black/70 dark:text-white/70">
            AstroGuru is a professional Vedic astrologer with years of experience
            in Kundli analysis, horoscope reading, career guidance, marriage
            compatibility, health astrology and gemstone consultation.
            <br /><br />
            The approach is practical, confidential and completely personalized.
            Astrology here is not superstition, but a time-tested system based on
            planetary calculations and cosmic timing.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            ["10+ Years", "Astrology Experience"],
            ["5000+", "Kundli Analyzed"],
            ["1200+", "Happy Clients"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="
                p-10 rounded-xl
                bg-white dark:bg-[#0b0620]
                border border-black/10 dark:border-white/10
              "
            >
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">
                {title}
              </h3>
              <p className="text-black/70 dark:text-white/70">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-gray-100 dark:bg-[#070213]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why <span className="text-yellow-400">Choose Me</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Accurate & ethical predictions",
              "100% confidential consultation",
              "Practical remedies only",
              "No fear-based astrology",
              "Clear & honest guidance",
              "Personal one-to-one sessions",
            ].map((point) => (
              <div
                key={point}
                className="
                  p-8 rounded-xl
                  bg-white dark:bg-[#0b0620]
                  border border-black/10 dark:border-white/10
                "
              >
                <p className="text-black/70 dark:text-white/70">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-50 dark:bg-transparent">
        <h2 className="text-3xl font-bold mb-6">
          Want Personal <span className="text-yellow-400">Guidance?</span>
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
          Book Consultation
        </Link>
      </section>

    </main>
  );
}

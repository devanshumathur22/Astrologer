import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
        bg-gray-100 text-black
        dark:bg-[#05010d] dark:text-white
        border-t border-black/10 dark:border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            🔮 AstroGuru
          </h3>
          <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">
            Vedic astrology based guidance for career, marriage, health and life
            decisions. Accurate, confidential and personalized consultations.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold text-lg mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-black/70 dark:text-white/70">
            <li><Link to="/horoscope" className="hover:text-yellow-300">Horoscope</Link></li>
            <li><Link to="/kundli" className="hover:text-yellow-300">Kundli Analysis</Link></li>
            <li><Link to="/love-marriage" className="hover:text-yellow-300">Love & Marriage</Link></li>
            <li><Link to="/career" className="hover:text-yellow-300">Career Guidance</Link></li>
            <li><Link to="/health" className="hover:text-yellow-300">Health Astrology</Link></li>
            <li><Link to="/gemstone" className="hover:text-yellow-300">Gemstone</Link></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-lg mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-black/70 dark:text-white/70">
            <li><Link to="/about" className="hover:text-yellow-300">About Astrologer</Link></li>
            <li><Link to="/consultation" className="hover:text-yellow-300">Book Consultation</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
            <li><span className="text-black/50 dark:text-white/50">Privacy Policy</span></li>
            <li><span className="text-black/50 dark:text-white/50">Terms & Conditions</span></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-lg mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-black/70 dark:text-white/70 text-sm">
            <li>📞 +91 8432241882</li>
            <li>📧 astrologer@email.com</li>
            <li>🕒 Mon – Sat (10 AM – 8 PM)</li>
          </ul>

          <Link
            to="/consultation"
            className="
              inline-block mt-6 px-6 py-2 rounded-full
              bg-yellow-400 text-black font-semibold
              hover:bg-yellow-300 transition
              shadow-[0_0_20px_rgba(250,204,21,0.4)]
            "
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="
          border-t border-black/10 dark:border-white/10
          py-6 text-center text-sm
          text-black/50 dark:text-white/50
        "
      >
        © {new Date().getFullYear()} AstroGuru. All Rights Reserved.
      </div>
    </footer>
  );
}

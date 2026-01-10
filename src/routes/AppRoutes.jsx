import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home.jsx";
import Horoscope from "../Pages/Horoscope/Horoscope.jsx";
import Health from "../Pages/Health/Health.jsx";
import Kundli from "../Pages/Kundli/Kundli.jsx";
import Career from "../Pages/Career/Career.jsx";
import LoveMarriage from "../Pages/LoveMarriage/LoveMarriage.jsx";
import Gemstone from "../Pages/Gemstone/Gemstone.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import Consultation from "../Pages/Consultation/Consultation.jsx";
import About from "../Pages/About/About.jsx";
import MatchMaking from "../Pages/MatchMaking/MatchMaking.jsx";
import Remedies from "../Pages/Remedies/Remedies.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/kundli" element={<Kundli />} />
        <Route path="/love-marriage" element={<LoveMarriage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/gemstone" element={<Gemstone />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/about" element={<About />} />
        <Route path="/match-making" element={<MatchMaking />} />
        <Route path="/remedies" element={<Remedies />} />
        <Route path="/health" element={<Health />} />

      </Route>
    </Routes>
  );
}

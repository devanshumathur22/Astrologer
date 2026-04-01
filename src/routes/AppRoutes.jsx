import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home.jsx";
import Horoscope from "../pages/Horoscope/Horoscope";
import Health from "../pages/Health/Health";
import Kundli from "../pages/Kundli/Kundli";
import Career from "../pages/Career/Career";
import LoveMarriage from "../pages/LoveMarriage/LoveMarriage";
import Gemstone from "../pages/Gemstone/Gemstone";
import Contact from "../pages/Contact/Contact";
import Consultation from "../pages/Consultation/Consultation";
import About from "../pages/About/About";
import MatchMaking from "../pages/MatchMaking/MatchMaking";
import Remedies from "../pages/Remedies/Remedies";



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

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#05010d] dark:text-white transition-colors duration-300">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

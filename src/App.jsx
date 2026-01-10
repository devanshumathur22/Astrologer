import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import AstroLoader from "./components/AstroLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // loader duration (ms)

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <AstroLoader />;

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

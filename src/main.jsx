import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // Importuj AnimatePresence
import Header from "./components/Header";
import "./index.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import FencesPage from "./components/FencesPage";
import GarageDoorsPage from "./components/GarageDoorsPage";
import SmartHomePage from "./components/SmartHomePage";
import IndustrialDoorsPage from "./components/IndustrialDoorsPage";
import ContactPage from "./components/ContactPage";
import ScrollToTop from "./components/utils/ScrollToTop";
import WindowsDoorsPage from "./components/WindowsDoorPage";
import DoorsPage from "./components/DoorsPage";
import BlindsAndShadesPage from "./components/BlindsAndShadesPage";
import WinterGardensPage from "./components/WinterGardensPage";

// Wrapper do obsługi animacji
function AnimatedRoutes() {
  const location = useLocation(); // Pobiera aktualną lokalizację

  return (
    <AnimatePresence mode="wait">
      {" "}
      {/* Tryb animacji */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/okna-i-drzwi" element={<WindowsDoorsPage />} />
        <Route path="/bramy-garazowe" element={<GarageDoorsPage />} />
        <Route path="/bramy-przemyslowe" element={<IndustrialDoorsPage />} />
        <Route path="/drzwi-zewnetrzne" element={<DoorsPage />} />
        <Route path="/rolety-i-zaluzje" element={<BlindsAndShadesPage />} />
        <Route path="/ogrodzenia" element={<FencesPage />} />
        <Route path="/ogrody-zimowe" element={<WinterGardensPage />} />
        <Route path="/inteligentny-dom" element={<SmartHomePage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);

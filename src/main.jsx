import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import FencesPage from "./components/FencesPage";
import GarageDoorsPage from "./components/GarageDoorsPage";
import SmartHomePage from "./components/SmartHomePage";
import IndustrialDoorsPage from "./components/IndustrialDoorsPage";
import ContactPage from "./components/ContactPage";
// Dodaj placeholdery dla stron
function OknaIDrzwi() {
  return <h1>Okna i Drzwi</h1>;
}
function DrzwiZewnetrzne() {
  return <h1>Drzwi Zewnętrzne</h1>;
}
function RoletyIZaluzje() {
  return <h1>Rolety i Żaluzje</h1>;
}
function OgrodyZimowe() {
  return <h1>Ogrody Zimowe</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/okna-i-drzwi" element={<OknaIDrzwi />} />
        <Route path="/bramy-garazowe" element={<GarageDoorsPage />} />
        <Route path="/bramy-przemyslowe" element={<IndustrialDoorsPage />} />
        <Route path="/drzwi-zewnetrzne" element={<DrzwiZewnetrzne />} />
        <Route path="/rolety-i-zaluzje" element={<RoletyIZaluzje />} />
        <Route path="/ogrodzenia" element={<FencesPage />} />
        <Route path="/ogrody-zimowe" element={<OgrodyZimowe />} />
        <Route path="/inteligentny-dom" element={<SmartHomePage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

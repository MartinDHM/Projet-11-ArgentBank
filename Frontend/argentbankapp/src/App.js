import React from "react";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/Headers.js";
import Accueil from "./components/Accueil/Accueil.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login/Login.js";

// Composant principal App
function App() {
  return (
    <div className="App">
      {/* Configuration des routes */}
      <Headers />
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Accueil />} />
        {/* Route pour la page Login */}
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

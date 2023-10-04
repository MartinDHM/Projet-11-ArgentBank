import React from "react";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/Headers.js";
import Accueil from "./components/Accueil/Accueil.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login/Login.js";
import User from "./components/User/User.js";

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
        {/* Route pour la page User */}
        <Route path="/User" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

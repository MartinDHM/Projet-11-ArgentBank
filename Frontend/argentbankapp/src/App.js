import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Headers from "./components/Headers.js";
import Accueil from "./components/Accueil/Accueil.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login/Login.js";
import User from "./components/User/User.js";
import { useSelector } from "react-redux/es/hooks/useSelector.js";

// Composant principal App
function App() {
  const isLoggedIn = useSelector((state) => state.setUserDatas !== "");
  return (
    <div className="App">
      {/* Configuration des routes */}
      <Headers />
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Accueil />} />
        {/* Route pour la page Login */}
        <Route path="/login" element={<Login />} />
        {/* Route pour la page User */}
        <Route
          path="/profile"
          element={isLoggedIn ? <User /> : <Navigate to="/Login" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

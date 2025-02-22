import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Headers from "./components/Headers.js";
import Accueil from "./components/Accueil/Accueil.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login/Login.js";
import User from "./components/User/User.js";
import { useSelector } from "react-redux";
import Error from "./components/Error/Error.js";

// Composant principal App
function App() {
  const isLoggedIn = useSelector((state) => state.signIn.islogin);
  const userToken = useSelector((state) => state.signIn.token);

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
          element={
            isLoggedIn && userToken !== "" ? (
              <User />
            ) : (
              <Navigate to="/profile" />
            )
          }
        />
        {/* Route par défaut pour les erreurs */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

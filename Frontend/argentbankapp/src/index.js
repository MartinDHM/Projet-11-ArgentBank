import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

// Création de la racine pour l'application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application React dans la racine
root.render(
  <div className="main-container">
    {/* Utilisation du BrowserRouter pour gérer les routes */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

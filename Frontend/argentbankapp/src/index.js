import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { Provider } from "react-redux";

// Création de la racine pour l'application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application React dans la racine
root.render(
  <Provider store={store}>
    <div className="main-container">
      {/* Utilisation du BrowserRouter pour gérer les routes */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </Provider>
);

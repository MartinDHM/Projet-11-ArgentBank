// Form.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Utilisé pour la navigation
import { useDispatch } from "react-redux"; // Utilisé pour dispatcher des actions Redux
import Button from "../Button/Button"; // Composant de bouton
import { signIn } from "../../Redux/store"; // Action Redux pour la connexion
import callAPI from "../../Api/callApi"; // Fonction pour effectuer des appels à l'API

function Form() {
  // Initialisation de l'état local du composant
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Fonction de navigation
  const dispatch = useDispatch(); // Fonction Redux pour dispatcher des actions

  // Fonction de gestion de la connexion
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Effectue la requête de connexion à l'API et récupère le token
      const response = await callAPI("getToken", null, {
        email: email,
        password: password,
      });

      // Récupère le token à partir de la réponse API
      const token = response.body.token;

      // Calcule la date d'expiration (1 heure plus tard)
      const expirationTime = new Date().getTime() + 60 * 60 * 1000;

      // Stocke le token dans le localStorage pour une utilisation ultérieure
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiration", expirationTime);

      // Dispatche l'action signIn avec le token pour l'authentification
      dispatch(signIn(token));

      // Navigue vers la page de profil ou effectue d'autres actions nécessaires
      navigate("/profile");
    } catch (error) {
      console.error("Une erreur s'est produite :", error);

      // Affiche un message d'erreur en cas d'échec de la connexion
      setError("Une erreur s'est produite lors de la connexion.");
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Button text="Sign In" className="sign-in-button" type="submit" />
        <div className="error-txt">{error}</div>
      </form>
    </section>
  );
}

export default Form;

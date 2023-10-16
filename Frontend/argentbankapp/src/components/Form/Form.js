import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { signIn } from "../../Redux/store.js";
import callAPI from "../../Api/callApi";

function Form() {
  // Initialisation de l'état local du composant
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Fonction de navigation
  const dispatch = useDispatch(); // Fonnction Redux pour dispatcher des actions

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

      // Stocke le token dans le localStorage pour une utilisation ultérieure
      localStorage.setItem("token", token);

      // Dispatche l'action signIn avec le token
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

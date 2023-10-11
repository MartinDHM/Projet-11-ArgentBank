import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { signIn } from "../../Redux/store.js"; // Importez l'action signIn depuis votre Redux store

function Form() {
  //Initialisation de l'état local du composant
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Utilise useNavigate pour obtenir une fonction de navigation.
  const dispatch = useDispatch(); // Utilise useDispatch pour obtenir la fonction dispatch de Redux.

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur de connexion");
      }

      const data = await response.json();
      const token = data.body.token;
      localStorage.setItem("token", token); // Stockez le token
      dispatch(signIn(token)); // Dispatchez l'action signIn avec le token
      navigate("/profile");
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
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

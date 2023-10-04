import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Formulaire soumis avec les données :", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleInputChange}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Link to="/User">
        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </Link>
    </form>
  );
}

export default LoginForm;

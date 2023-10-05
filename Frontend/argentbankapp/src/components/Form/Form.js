import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Form({ subtitle1, subtitle2, subtitle3, text }) {
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
      </form>
      <p className="subtitle">{subtitle1}</p>
      <p className="subtitle">{subtitle2}</p>
      <p className="subtitle">{subtitle3}</p>
      <p className="text">{text}</p>
      <Link to="/User">
        <Button text="Sign In" className="sign-in-button" type="submit" />
      </Link>
    </section>
  );
}

export default Form;

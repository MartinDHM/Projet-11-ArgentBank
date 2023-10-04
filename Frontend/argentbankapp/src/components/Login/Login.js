import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./Form/Form";

function Login() {
  return (
    <section className="main bg-dark">
      <div className="sign-in-content">
        <div className="icon-login">
          <i className="fa fa-user-circle sign-in-icon"></i>
        </div>
        <h2 className="Signin-text">Sign In</h2>
        <LoginForm />
      </div>
    </section>
  );
}

export default Login;

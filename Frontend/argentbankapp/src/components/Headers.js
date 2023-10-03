import React from "react";
import logo from "../assets/images/argentBankLogo.png";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <header className="headers">
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        </Link>
        <div className=".main-nav-item">
          <Link to="/Login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Headers;

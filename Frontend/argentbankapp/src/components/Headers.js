import React from "react";
import logo from "../assets/images/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // permet de lire l'état du store Redux et de dispatcher des actions.
import { signOut } from "../Redux/store"; // Importez la fonction signOut de votre Redux store

function Headers() {
  const isLoggedIn = useSelector((state) => state.signIn.token !== ""); // Utilise useSelector pour lire l'état Redux. Il vérifie si la propriété token dans l'état signIn n'est pas une chaîne vide
  const dispatch = useDispatch(); // permettra de dispatcher des actions Redux

  const handleLogout = () => {
    dispatch(signOut());    // utilise dispatch pour appeler la fonction signOut importée depuis le store Redux
  };

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
          {isLoggedIn ? (
            <Link to="/">
              <button className="logbutton" onClick={handleLogout}>
                <i className=" fa fa-sign-out"></i> Logout
              </button>
            </Link>
          ) : (
            <Link to="/Login">
              <button className="logbutton" onClick={handleLogout}>
                <i className="fa fa-user-circle"></i> Sign In
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Headers;

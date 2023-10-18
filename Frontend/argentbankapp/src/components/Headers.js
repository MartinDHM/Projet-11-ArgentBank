// Headers.js
import React, { useEffect } from "react";
import logo from "../assets/images/argentBankLogo.webp";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut, signIn } from "../Redux/store";

function Headers() {
  const isLoggedIn = useSelector((state) => state.signIn.islogin);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userProfile);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOut());
    navigate("/");
  };

  // Vérifie la validité du token au chargement de la page
  useEffect(() => {
    const checkTokenValidity = () => {
      const token = localStorage.getItem("token");
      const tokenExpiration = localStorage.getItem("tokenExpiration");

      if (token && tokenExpiration) {
        const currentTime = new Date().getTime();

        if (currentTime < tokenExpiration) {
          // Le token est valide, l'utilisateur est connecté
          dispatch(signIn(token));
        } else {
          // Le token a expiré, supprimez-le du localStorage et déconnectez l'utilisateur
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
          dispatch(signOut());
        }
      }
    };

    checkTokenValidity();
  }, [dispatch]);

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
        <div className="Username-position">
          {isLoggedIn ? (
            <div>
              <i className="usericon fa fa-user-circle "></i>

              {userData ? userData.userName : ""}
            </div>
          ) : null}
          {isLoggedIn ? (
            <Link to="/" className="main-nav-item">
              <div>
                <button className="logbutton" onClick={handleLogout}>
                  <i className="fa fa-sign-out"></i> Sign out
                </button>
              </div>
            </Link>
          ) : (
            <Link to="/Login">
              <button className="logbutton">
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

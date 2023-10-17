import React from "react";
import logo from "../assets/images/argentBankLogo.webp";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../Redux/store";

function Headers() {
  const isLoggedIn = useSelector((state) => state.signIn.token !== "");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userProfile);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOut());
    navigate("/");
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
        <div className="Username-position">
          {isLoggedIn ? (
            <div>
              <i className="usericon fa fa-user-circle "></i>

              {userData
                ? userData.userName // Accédez directement à userName
                : ""}
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

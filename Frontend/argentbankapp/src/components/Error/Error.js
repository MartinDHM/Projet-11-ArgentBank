import React from "react";
import { Link } from "react-router-dom";
import Img404 from "../../assets/images/404.webp";

// Composant NotFound
export default function NotFound() {
  return (
    <div className="notfound">
      <>
        <div className="notfound-container">
          {/* Titre de la page 404 */}
          <img src={Img404} alt="Error 404" />
          {/* Message d'erreur */}
          <p className="notfound-oups">Oups ! Une erreur est survenue.</p>
          {/* Lien de retour vers la page d'accueil */}
          <Link to="/">
            <p className="back-link">Retourner sur la page d'accueil</p>
          </Link>
        </div>
      </>
    </div>
  );
}

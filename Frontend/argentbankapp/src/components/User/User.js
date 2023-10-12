import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // Importez useDispatch
import { setUserDatas } from "../../Redux/store"; // Assurez-vous que le chemin d'importation est correct
import Button from "../Button/Button";
import AccountInfo from "../Account/AccountInfo";
import EditButton from "../Edit-button/edit";

function User() {
  const userData = useSelector((state) => state.signIn.userData); // Utilisez useSelector pour récupérer les données de l'utilisateur
  const dispatch = useDispatch(); // Utilisez useDispatch pour obtenir la fonction dispatch de Redux

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Token non trouvé dans le stockage local");
          return;
        }

        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const userData = await response.json();
          dispatch(setUserDatas(userData)); // Stockez les données de l'utilisateur dans le store
        } else {
          console.error("Erreur lors de la récupération des données de l'API");
        }
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    }

    fetchData();
  }, [dispatch]);

  console.log(userData);

  return (
    <section className="main bg-dark">
      <div className="account-name">
        <div className="header">
          <h1>Welcome back</h1>
          <h2 className="Name-account">
            {userData
              ? `${userData.body.firstName} ${userData.body.lastName}` // Modifiez l'accès aux propriétés
              : ""}
          </h2>
          <EditButton userData={userData} />
        </div>
      </div>

      <div className="account-section">
        <h2 className="sr-only">Accounts</h2>
        <section>
          <AccountInfo
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            description="Available Balance"
          />
        </section>
        <section>
          <AccountInfo
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
          />
        </section>
        <section>
          <AccountInfo
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"
          />
        </section>
      </div>
    </section>
  );
}

export default User;

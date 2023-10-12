import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../Redux/store";
import AccountInfo from "../Account/AccountInfo";
import EditButton from "../Edit-button/edit";
import callAPI from "../../Api/callApi";

function User() {
  const token = useSelector((state) => state.signIn.token);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userProfile); // Renommé userProfile en userData

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        // Requête pour récupérer le profil de l'utilisateur
        const response = await callAPI("getProfile", token, {});
        const userData = response.body;
        // Appel de l'action getUserData qui stocke le profil utilisateur dans le state
        dispatch(getUserData(userData));
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du profil de l'utilisateur :",
          error
        );
      }
    };
    getUserProfile();
  }, [token, dispatch]);

  return (
    <section className="main bg-dark">
      <div className="account-name">
        <div className="header">
          <h1>Welcome back</h1>
          <h2 className="Name-account">
            {userData ? `${userData.firstName} ${userData.lastName}` : ""}
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

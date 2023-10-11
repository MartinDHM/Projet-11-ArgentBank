import React from "react";
import { useSelector } from "react-redux"; // Importez useDispatch
import Button from "../Button/Button";
import AccountInfo from "../Account/AccountInfo";

function User() {
  const userData = useSelector((state) => state.signIn.userData);

  console.log(userData);

  return (
    <section className="main bg-dark">
      <div className="account-name">
        <div className="user-name">
          <h1>Welcome back</h1>
          <h2 className="Name-account">
            {userData
              ? `${userData.body.firstName} ${userData.body.lastName}`
              : ""}
          </h2>
        </div>
        <Button text="Edit Name" className="edit-button" type="submit" />
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

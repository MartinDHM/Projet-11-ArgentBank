import React from "react";
import Button from "../Button/Button";
import AccountInfo from "../Account/AccountInfo";

function User() {
  return (
    <section className="main bg-dark">
      <div className="account-name">
        <div className="user-name">
          <h1 className="welcome">Welcome back</h1>
          <h2 className="Name-account">Tony Jarvis!</h2>
        </div>
        <Button text="Edit Name" className="user-button" type="submit" />
      </div>
      <div className="account-section">
        <h2 className="sr-only">Accounts</h2>
        <AccountInfo
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <AccountInfo
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <AccountInfo
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </div>
    </section>
  );
}

export default User;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDatas } from "../../Redux/store";

function EditButton({ userData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState(
    userData?.body?.userName || ""
  );
  const token = useSelector((state) => state.signIn.token);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            username: newUserName,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur de connexion");
      }

      // Mettez ici la logique pour traiter la réponse de l'API
      const data = await response.json();
      console.log("Réponse de l'API :", data);

      // Mettez à jour le nom d'utilisateur dans Redux
      dispatch(
        setUserDatas({
          ...userData,
          body: { ...userData.body, userName: newUserName },
        })
      );
      closeModal();
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  useEffect(() => {
    setNewUserName(userData?.body?.userName || "");
  }, [userData]);

  return (
    <>
      <button className="edit-button" onClick={openModal}>
        Edit Name
      </button>
      {isModalOpen && (
        <div className="edit-section">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-wrapper">
              <label htmlFor="userName">User name:</label>
              <input
                type="text"
                id="userName"
                className="input-edit"
                defaultValue={userData.body.userName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="firstName"
                className="input-edit"
                value={userData.body.firstName}
                readOnly
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="lastName"
                className="input-edit"
                value={userData.body.lastName}
                readOnly
              />
            </div>
            <div className="button-container">
              <button
                type="submit"
                onClick={handleSave}
                className="interaction-button"
              >
                Save
              </button>
              <button className="interaction-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default EditButton;

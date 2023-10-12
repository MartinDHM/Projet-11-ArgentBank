import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserData } from "../../Redux/store";
import callAPI from "../../Api/callApi";

function EditButton({ userData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState(
    userData?.body?.userName || ""
  );
  const token = useSelector((state) => state.signIn.token);
  const userProfile = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = async () => {
    try {
      // Requête pour envoyer le nouveau nom d'utilisateur
      const response = await callAPI("putUserName", token, {
        userName: newUserName,
      });

      // Appel de l'action pour stocker le nouveau userName
      dispatch(editUserData(newUserName));

      closeModal(); // Vous devriez probablement appeler closeModal ici pour fermer la modal après avoir enregistré les modifications

      return response;
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour du nom d'utilisateur :",
        error
      );
    }
  };

  // Utilisation de useEffect pour mettre à jour newUserName lorsque userProfile.userName change
  useEffect(() => {
    setNewUserName(userProfile.userName);
  }, [userProfile.userName]);

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
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="firstName"
                className="input-edit"
                value={userProfile.firstName}
                readOnly
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="lastName"
                className="input-edit"
                value={userProfile.lastName}
                readOnly // I corrected this line to use userProfile.lastName
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

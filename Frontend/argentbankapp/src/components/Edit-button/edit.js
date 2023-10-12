import React, { useState } from "react";

function EditButton({ userData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    // Mettez ici la logique pour sauvegarder les modifications
    // Cela pourrait impliquer une requête à l'API, par exemple
    // Une fois les modifications enregistrées, vous pouvez fermer la modale
    closeModal();
  };

  return (
    <div>
      <button className="edit-button" onClick={openModal}>
        Edit Name
      </button>

      {isModalOpen && (
        <div className="edit-section">
          <div className="inline">
            <label htmlFor="pseudo">User name : </label>
            <input
              id="pseudo"
              className="input-edit"
              defaultValue={userData.body.userName}
            ></input>
          </div>
          <div className="inline">
            <label htmlFor="firstname">First name : </label>
            <input
              id="firstname"
              className="input-edit"
              defaultValue={userData.body.firstName}
            ></input>
          </div>
          <div className="inline">
            <label htmlFor="lastname">last name : </label>
            <input
            c
              id="lastname"
              className="input-edit"
              defaultValue={userData.body.lastName}
            ></input>
          </div>
          <div className="button-container">
            <button className="interaction-button" onClick={handleSave}>
              Save
            </button>
            <button className="interaction-button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditButton;

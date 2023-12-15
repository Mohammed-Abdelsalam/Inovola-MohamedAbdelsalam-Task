import React, { useState } from "react";

// components
import Grid from "../../components/Grid";
import Modal from "../../components/Modal";
import FormGrid from "../../components/FormGrid";

// FontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

const AvailableUnits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleNewProjectClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleSave = () => {
    handleCloseModal();
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row mx-auto p-4 justify-between">
        <h2 className="text-3xl text-title font-bold mb-4 text-center">
          Current projects
        </h2>
        <div className="icons flex gap-5 justify-center items-center">
          <button
            onClick={handleNewProjectClick}
            className="bg-button text-white p-3 shadow-md rounded-full text-md transition-transform duration-500 transform hover:scale-105 hover:bg-button-400"
          >
            New Project +
          </button>
          <div className="flex gap-3">
            <FontAwesomeIcon
              icon={faSearch}
              size="sm"
              className="bg-white rounded-full p-3 border-2 border-gray-300 flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faBell}
              size="sm"
              className="bg-white rounded-full p-3 border-2 border-gray-300 flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/*  Grid */}
      <Grid />

      {/*  Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <FormGrid onClose={handleCloseModal} onSave={handleSave} />
      </Modal>
    </div>
  );
};

export default AvailableUnits;

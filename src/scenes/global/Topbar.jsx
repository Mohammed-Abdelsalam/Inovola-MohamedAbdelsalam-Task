import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

const Topbar = ({ title }) => {
  return (
    <div className="flex mx-auto justify-between items-center mb-5 flex-col md:flex-row">
      <h2 className="text-3xl font-bold mb-4 md:mb-0">{title}</h2>
      <div className="flex gap-3">
        <FontAwesomeIcon
          icon={faBell}
          size="sm"
          className="bg-white rounded-full p-3 border-2 border-gray-300 flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faSearch}
          size="sm"
          className="bg-white rounded-full p-3 border-2 border-gray-300 flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Topbar;

import React from "react";

// React Router
import { Link } from "react-router-dom";

// FontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Item = ({ title, to, selected, setSelected, icon }) => {
  return (
    <Link to={to}>
      <div
        className={`flex items-center mt-1 my-2 py-2 px-5 cursor-pointer gap-3 ${
          selected === title ? "bg-primary border-r-[2px] border-blue-500" : ""
        }`}
        onClick={() => setSelected(title)}
      >
        <FontAwesomeIcon
          icon={icon ? icon : faClock}
          size="sm"
          className={`flex items-center justify-center ${
            selected === title ? "text-blue-900 font-[700]" : "text-icon"
          } mr-2`}
        />
        <span
          className={`mr-2 ${
            selected === title ? "text-blue-900 font-[700]" : "text-list"
          }`}
        >
          {title}
        </span>
      </div>
    </Link>
  );
};

export default Item;

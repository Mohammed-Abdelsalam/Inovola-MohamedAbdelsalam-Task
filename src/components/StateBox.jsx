import React from "react";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StateBox = ({ title, increase, icon, color }) => {
  return (
    <div className="w-full min-h-full rounded-xl font-[600] border-[1px] bg-white m-0 sm:m-6 py-6 md:w-full lg:w-max-full">
      <div className="flex flex-row justify-between md:flex-row">
        <div className="flex flex-col justify-between md:w-1/2 ml-4">
          <div className="flex items-stretch h-15">
            <h4 className="font-bold text-text">{title}</h4>
          </div>
          <div className="flex justify-between mt-1">
            <h5 className="text-text font-bold text-3xl">{increase}</h5>
          </div>
        </div>
        <div className="relative mr-5 w-20 h-20">
          <svg className="absolute w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="transparent"
              stroke={color ? color : "red"}
              strokeWidth="6"
              strokeOpacity="0.3"
            />
          </svg>
          <svg className="absolute w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="transparent"
              stroke={color ? color : "red"}
              strokeWidth="5"
              strokeDasharray="200"
              strokeDashoffset="50"
            />
          </svg>
          <div className="absolute flex items-center justify-center w-full h-full">
            <FontAwesomeIcon icon={icon} className=" px-1" color={color} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateBox;

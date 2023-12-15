import React from "react";

// Font Awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faTags,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ imageSrc, title, description, btn }) => {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg p-3 border-[1px]">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          src={imageSrc}
          alt={title}
          className="h-auto w-full max-h-40 object-cover object-center"
        />
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="block font-sans text-xl leading-snug tracking-normal text-blue-gray-900 antialiased font-bold">
            {title}
          </h5>
        </div>
        <p className="block font-sans text-sm font-light leading-relaxed text-gray-700 antialiased">
          {description}
        </p>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <div className="flex items-center text-icon gap-3">
            <FontAwesomeIcon icon={faLocationDot} className="text-icon" />
            <span>Boston</span>
          </div>
          <div className="flex items-center text-icon gap-3">
            <FontAwesomeIcon icon={faTags} className="text-icon" />
            <span>5 bedroom</span>
          </div>
          <div className="flex items-center text-icon gap-3">
            <FontAwesomeIcon icon={faLayerGroup} className="text-icon" />
            <span>Villa</span>
          </div>
        </div>
      </div>
      <div className="p-6 pt-3">
        <button
          className="block w-full select-none rounded-3xl bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-btnText shadow-md shadow-btnText-500/20 transition-all hover:shadow-lg hover:shadow-btnText-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default Card;

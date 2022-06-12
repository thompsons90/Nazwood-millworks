import React from "react";
import { CloseButton } from "./Modal.styled";
import { Link } from "react-router-dom";

export const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return (
    <>
      <ul id="nav" className={open === true ? `overlay ` : `hidden`}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <div className="overlay-inner text-center">
            <li>
              <Link to="/" className="nav-text">Home</Link>
            </li>
            <li>
              <Link to="/cabinets" className="nav-text">Cabinets</Link>
            </li>
            <li>
              <Link to="/kitchens" className="nav-text">Kitchens</Link>
            </li>
            <li>
              <Link to="/trim" className="nav-text">Trim</Link>
            </li>
            <li>
              <Link to="/misc" className="nav-text">Miscellaneous</Link>
            </li>
          </div>
      </ul>
    </>
  );
};

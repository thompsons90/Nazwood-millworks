import React from "react";
import { CloseButton } from "./Modal.styled";

export const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return (
    <>
      <ul id="nav" className={open === true ? `overlay ` : `hidden`}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <div className="overlay-inner text-center">
          <div className="">
            <li class="nav-link">
              <a
                data-name="About Us"
                className="nav-text"
                href="#about"
                onClick={onClose}
              >
                About Us
              </a>
            </li>
          </div>
          <div className="">
            <li class="nav-link">
              <a
                data-name="Services"
                className="nav-text"
                href="#services"
                onClick={onClose}
              >
                Services
              </a>
            </li>
          </div>
          <div className="">
            <li class="nav-link">
              <a
                data-name="Location"
                className="nav-text"
                href="#location"
                onClick={onClose}
              >
                Location
              </a>
            </li>
          </div>
          <div className="">
            <li class="nav-link">
              <a
                data-name="Contact Us"
                className="nav-text"
                href="#footer"
                onClick={onClose}
              >
                Contact Us
              </a>
            </li>
          </div>
        </div>
      </ul>
    </>
  );
};

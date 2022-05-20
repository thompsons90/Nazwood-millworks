import React from "react";

export const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return (
    <>
      <ul id="nav" className={open === true ? `overlay ` : `hidden`}>
        <button onClick={onClose}>X</button>
        <div className="overlay-inner text-center">
          <div className="">
            <li class="nav-link">
              <a
                data-name="Our Work"
                className="nav-text"
                href="#work"
                onClick={onClose}
              >
                Our work
              </a>
            </li>
          </div>

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
                data-name="Reviews"
                className="nav-text"
                href="#reviews"
                onClick={onClose}
              >
                Reviews
              </a>
            </li>
          </div>
          <div className="">
            <li class="nav-link">
              <a
                data-name="Contact Us"
                className="nav-text"
                href="#contact"
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

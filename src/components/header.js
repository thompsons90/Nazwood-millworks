import React, { useState } from "react";
import Menu from "../images/burger.png";

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div id="nav-bar">
      <div className="container-fluid">
        <div className="navigation">
          <div className="text-center" onClick={() => setHidden(!hidden)}>
            <img
              src={Menu}
              alt="wood-working"
              className="logo"
              width="140px"
              height="100px"
            ></img>
          </div>
        </div>

        <ul id="nav" className={hidden === true ? `overlay ` : `hidden`}>
          <div className="overlay-inner text-center">
            <div className="">
              <li class="nav-link">
                <a
                  data-name="Our Work"
                  className="nav-text"
                  href="#work"
                  onClick={() => setHidden(!hidden)}
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
                  onClick={() => setHidden(!hidden)}
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
                  onClick={() => setHidden(!hidden)}
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
                  onClick={() => setHidden(!hidden)}
                >
                  Contact Us
                </a>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

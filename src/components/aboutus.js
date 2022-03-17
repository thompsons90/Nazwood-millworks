import React from "react";

import { Reviews } from './reviews';
export const AboutUs = () => {
  return (
    <div className="aboutPage container-fluid wood-border">
      <h4 className="work-text">
        "Another quote"
      </h4>
      <div className="row">
        <div className="col-sm-8 ">
          <img src="./aboutus.jpg" className="img-fluid" alt="wood-working-professionals" />
        </div>
        <div className="col-sm-4">
          <h4 className="work-text">
            {" "}
            Nazwood Millworks is a family-owned manufacturer of high quality
            custom mouldings and millwork in the Inland Northwest. We are mill
            direct for home builders, contractors, architects and designers.
          </h4>
        </div>
      </div>
      <h4 className="work-text">"They did a great job" -A customer</h4>
      <Reviews />
      <div  id="reviews"></div>
    </div>
  );
};

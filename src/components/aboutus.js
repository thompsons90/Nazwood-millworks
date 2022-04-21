import React from "react";

export const AboutUs = () => {
  return (
    <div className="aboutPage container-fluid ">
      <h4 className="work-text">
        
      </h4>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-4 ">
          <img src="./makingmoulding.jpg" className="img-fluid"  alt="wood-working-professionals" />
        </div>
        <div className="col-sm-6">
          <h4 className="work-text about-text">
            {" "}
            Nazwood Millworks is a family-owned manufacturer of high quality
            custom mouldings and millwork in the Inland Northwest. We are mill
            direct for home builders, contractors, architects and designers.
          </h4>
        </div>
      </div>
      <div className="col-sm-0"></div>
    </div>
  );
};

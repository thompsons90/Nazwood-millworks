import React from "react";

export const AboutUs = () => {
  return (
    <div className="aboutPage container-fluid ">
      <h4 className="work-text">
        "Another quote"
      </h4>
      <div className="row">
        <div className="col-sm-4">
          <img src="./wood.jpg" className="img-fluid" alt="wood" />
        </div>
        <div className="col-sm-8">
          <h4 className="work-text">
            {" "}
            Nazwood Millworks is a family-owned manufacturer of high quality
            custom mouldings and millwork in the Inland Northwest. We are mill
            direct for home builders, contractors, architects and designers.
          </h4>
        </div>
      </div>
    </div>
  );
};

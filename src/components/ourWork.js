import React from "react";
import Carousel from "react-elastic-carousel";
import { WorkPopUp } from "../add-ons/workPopUp";
import woodworking from '../images/Woodwork.jpg'
export const OurWork = () => {
  return (
    <div className="workPage container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <h4 className="work-text">
            {" "}
            Nazwood Millworks is a family-owned manufacturer of high quality
            custom mouldings and millwork in the Inland Northwest. We are mill
            direct for home builders, contractors, architects and designers.
          </h4>
        </div>
        <div className="col-sm-8">
          <Carousel itemsToShow={1}>
            <img
              src="./slideshow/Woodwork.jpg"
              className="slideshow-image"
              alt="NAZWOOD"
            />
            <img
              src="./slideshow/2.jpg"
              className="slideshow-image"
              alt="Quality craftsmanshi["
            />
            <img
              src="./slideshow/3.jpg"
              className="slideshow-image"
              alt="wood"
            />
          </Carousel>
          
        </div >
        
        <div className="container-fluid">
        <h4 className="work-text">
        {" "}
        “From our Mill to your job-site <br />
        Quality and Service is our Passion.”
      
      </h4>
         <WorkPopUp /></div>
    </div>
    </div>
  );
};

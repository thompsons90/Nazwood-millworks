import React from "react";
import Carousel from "react-elastic-carousel";
import { WorkPopUp } from "../add-ons/workPopUp";
import woodworking from '../images/Woodwork.jpg'
export const OurWork = () => {
  return (
    <div className="workPage container-fluid wood-border">
      <div className="row">
        <div className="col-sm-12">
          <h4 className="work-text">
            {" "}
            The number 1 woodworker in spokane 
          </h4>
        </div>
        
        </div >
        
        <div className="container-fluid">
        
         <WorkPopUp /></div>
    <h4 className="work-text">
        {" "}
        “From our Mill to your job-site <br />
        Quality and Service is our Passion.”
      
      </h4>
    </div>
  );
};

import React from "react";
import ".//workPopUp.scss";
export const WorkPopUp = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 ">
          <div className="trim">
            <h3 className="work-text  our-work-title">TRIM</h3>
          
          <div className="work-subtitle">
            <ul>
              <li>Face Frame </li>

              <li>Euro </li>

              <li>Multi-family </li>

              <li>Entertainment Centers</li>

              <li>Closets</li>

              <li>Garage</li>

              <li>Vanities</li>

              <li>Custom furniture</li>
            </ul>
          </div></div>
        </div>
        <div className="col-sm-4">
          <div className="moulding">
            <h3 className="work-text  our-work-title">MOULDING</h3>
            <div className="work-subtitle">
              <ul>
                <li> Crown </li>

                <li>Base </li>

                <li>Case </li>

                <li>Trim packages</li>

                <li>Custom profiles</li>

                <li>Historic reproduction</li>

                <li>Arches</li>
              </ul>
            </div>{" "}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="cabinets">
            <h3 className="work-text our-work-title">
              SUPERIOR CRAFTED CABINETS
            </h3>
          {" "}
          <div className="work-subtitle">
            <ul>
              <li> Shiplap </li>

              <li>Tongue & Groove </li>

              <li>Custom Flooring </li>

              <li>Face Frame stock </li>

              <li>S4S</li>
            </ul>
          </div></div>
        </div>
      </div>
    </div>
  );
};

/* 
<h4 className="work-text">Moulding</h4>
          <div className="text-center">
            <ul>
              <li> Shiplap </li>
              <li>Tongue & Groove </li>
              <li>Custom Flooring </li>
              <li>Face Frame stock </li>
              <li>S4S</li>
            </ul>
          </div> */
import React from "react";
import Carousel from "react-elastic-carousel";

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
        </div>
        <div className="row">
          <div className="col-sm-4">
            <img src="./wood.jpg" className="img-fluid" alt="wood" />
            <h5 className="text-center">Boards</h5>
            <ul>
              <li> Shiplap</li>

              <li>Tongue & Groove </li>

              <li>Custom Flooring </li>

              <li>Face Frame stock </li>

              <li>S4S</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <img src="./wood.jpg" className="img-fluid" alt="wood" />
            <h5 className="text-center">Mouldings</h5>
            <ul>
          <li>Crown </li>  
          <li>Base</li>
 
<li>Case </li>

<li>Trim Packages</li>
 
<li>Custom Profiles </li>

<li>Historic Reproductions </li>

<li>Arches</li>
 
<li>Stair Parts</li>
</ul>
          </div>
          <div className="col-sm-4">
            <img src="./wood.jpg" className="img-fluid" alt="wood" />
            <h5 className="text-center">SUPERIOR CRAFTED CABINETS</h5>
            <ul>
                <li>Face frame </li>
            
            <li>Euro </li>

<li>Multi-family </li>

<li>Entertainment centers </li>

<li>Closets</li>

<li>Garage</li>

<li>Vanities</li>

<li>Custom Furniture</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import ".//workPopUp.scss";
import Carousel from "react-elastic-carousel";
export const WorkPopUp = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <h3 className="work-text">Trim</h3>
          <Carousel itemsToShow={1}>
            <img
              src="./slideshow/Woodwork.jpg"
              className="slideshow-image"
              alt="NAZWOOD"
            />
            <img
              src="./slideshow/2.jpg"
              className="slideshow-image"
              alt="Quality craftsmanship"
            />
            <img
              src="./slideshow/3.jpg"
              className="slideshow-image"
              alt="wood"
            />
          </Carousel>
          
          <div className="work-subtitle">
            <ul>
              <li> Shiplap </li>

              <li>Tongue & Groove </li>

              <li>Custom Flooring </li>

              <li>Face Frame stock </li>

              <li>S4S</li>
            </ul>
          </div></div>
          <div className="col-sm-4">
          <h3 className="work-text">Moulding</h3>
          <Carousel itemsToShow={1}>
            <img
              src="./slideshow/Woodwork.jpg"
              className="slideshow-image"
              alt="NAZWOOD"
            />
            <img
              src="./slideshow/2.jpg"
              className="slideshow-image"
              alt="Quality craftsmanship"
            />
            <img
              src="./slideshow/3.jpg"
              className="slideshow-image"
              alt="wood"
            />
          </Carousel>
          <div className="work-subtitle">
            <ul>
              <li> Shiplap </li>

              <li>Tongue & Groove </li>

              <li>Custom Flooring </li>

              <li>Face Frame stock </li>

              <li>S4S</li>
            </ul>
          </div></div>
          <div className="col-sm-4">
          <h3 className="work-text">Cabniets</h3>
          <Carousel itemsToShow={1}>
            <img
              src="./slideshow/Woodwork.jpg"
              className="slideshow-image"
              alt="NAZWOOD"
            />
            <img
              src="./slideshow/2.jpg"
              className="slideshow-image"
              alt="Quality craftsmanship"
            />
            <img
              src="./slideshow/3.jpg"
              className="slideshow-image"
              alt="wood"
            />
          </Carousel>
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
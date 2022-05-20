import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { SlideContainer } from "./Slideshow.styled";
import ImgA from "../images/Woodwork.jpg";
import ImgB from "../images/slideshow/bathroom.jpg";
import ImgC from "../images/slideshow/kitchen.jpg";
import ImgD from "../images/slideshow/moulding.jpg";
import ImgE from "../images/slideshow/splice1.png";
import ImgF from "../images/slideshow/stairs.jpg";

class Slideshow extends Component {
  render() {
    return (
      <SlideContainer>
        <Carousel
          autoPlay
          infiniteLoop
          swipeable
          showArrows={false}
          showThumbs={false}
          showStatus={false}
        >
          <div className="slide-container">
            <img src={ImgA} alt="1works" />
          </div>
          <div className="slide-container">
            <img src={ImgB} alt="1works" />
          </div>
          <div className="slide-container">
            <img src={ImgC} alt="1works" />
          </div>
          <div className="slide-container">
            <img src={ImgD} alt="1works" />
          </div>
          <div className="slide-container">
            <img src={ImgE} alt="1works" />
          </div>
          <div className="slide-container">
            <img src={ImgF} alt="1works" />
          </div>
        </Carousel>
      </SlideContainer>
    );
  }
}
export default Slideshow;

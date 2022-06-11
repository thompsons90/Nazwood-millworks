import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { SlideContainer } from "./Slideshow.styled";
import ImgA from "../newImages/newSlideshow/newSlide1";
import ImgB from "../newImages/newSlideshow/newSlide2";
import ImgC from "../newImages/newSlideshow/newSlide3";
import ImgD from "../newImages/newSlideshow/newSlide4";


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
        </Carousel>
      </SlideContainer>
    );
  }
}
export default Slideshow;

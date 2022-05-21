import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
// import { SlideContainer } from "./Slideshow.styled";
import ImgA from "../images/hisphotos/trim/milling.jpg";
import ImgB from "../images/hisphotos/trim/milling4.jpg";
import ImgC from "../images/hisphotos/trim/work4.jpg";
import ImgD from "../images/hisphotos/trim/woodcutouts.jpg";
import ImgE from "../images/hisphotos/trim/trim1.jpg";
import ImgF from "../images/hisphotos/trim/newMilling.jpg";
import { CarouselContainer, SlideContainer, Text } from "./cabinets.styled";
import { NewHeader } from "../components/NewHeader";

class TrimCarousel extends Component {
  render() {
    return (
      <>
        <NewHeader />
        <CarouselContainer>
          <Carousel
            autoPlay
            infiniteLoop
            swipeable
            showArrows={false}
            showThumbs={false}
            showStatus={false}
          >
            <SlideContainer>
              <img src={ImgA} alt="1works" />
            </SlideContainer>
            <SlideContainer>
              <img src={ImgB} alt="1works" />
            </SlideContainer>
            <SlideContainer>
              <img src={ImgC} alt="1works" />
            </SlideContainer>
            <SlideContainer>
              <img src={ImgD} alt="1works" />
            </SlideContainer>
            <SlideContainer>
              <img src={ImgE} alt="1works" />
            </SlideContainer>
            <SlideContainer>
              <img src={ImgF} alt="1works" />
            </SlideContainer>
          </Carousel>
          <Text>
            <h3>Trim:</h3>
            <p>
              We offer Crown, Shiplap, Tongue & Groove, Custom Flooring, Face
              Frame, & tock S4S.
            </p>
          </Text>
        </CarouselContainer>
      </>
    );
  }
}
export default TrimCarousel;

// import React from "react";
// import { Link } from "react-router-dom";

// export const Trim = () => {
//     return (
//         <div className="container-fluid">
// <h3 className="work-text" >Our Cabinet work</h3>
// <Link to="/" className="work-text">Back to home page</Link>
//             <div className="row">

//                 <div className="col-sm-4">
//                     <img src="/hisphotos/trim/milling2.jpg" className="img-fluid work-photo" alt="work-trim" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="hisphotos/trim/milling4.jpg" className="img-fluid work-photo" alt="work-trim" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="hisphotos/trim/Moulding1.jpg" className="img-fluid work-photo" alt="work-trim" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="hisphotos/trim/Moulding2.jfif" className="img-fluid work-photo" alt="work-trim" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="hisphotos/trim/trim1.jpg" className="img-fluid work-photo" alt="work-trim" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="hisphotos/trim/trim3.jpg" className="img-fluid work-photo" alt="work-trim" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="hisphotos/trim/trimphoto.jpg" className="img-fluid work-photo" alt="work-trim" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="hisphotos/trim/woodcutouts.jpg" className="img-fluid work-photo" alt="work-trim" />
//                 </div>

//             </div>
//             <Link to="/" className="work-text">Back to home page</Link>

//         </div>
//     )
// }

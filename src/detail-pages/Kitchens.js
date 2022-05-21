import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ImgA from "../images/hisphotos/kitchens/kitchen2.jpg";
import ImgB from "../images/hisphotos/kitchens/kitchen3.jpg";
import ImgC from "../images/hisphotos/kitchens/kitchen4.jpg";
import ImgD from "../images/hisphotos/kitchens/kitchen8.jpg";
import ImgE from "../images/hisphotos/kitchens/kitchen10.jpg";
import ImgF from "../images/hisphotos/kitchens/kitchen14.jpg";
import { CarouselContainer, SlideContainer, Text } from "./cabinets.styled";
import { NewHeader } from "../components/NewHeader";

class KitchenCarousel extends Component {
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
            <h3>Kitchens:</h3>
            <p>
              We offer Crown Base, Case Trim Packages, Custom Profiles, Historic
              Reproductions, & Arches.
            </p>
          </Text>
        </CarouselContainer>
      </>
    );
  }
}
export default KitchenCarousel;

// import React from "react";
// import { Link } from "react-router-dom";

// export const Kitchens = () => {
//     return (
//         <div className="container-fluid">
// <h3 className="work-text" >Our kitchen work</h3>
// <Link to="/" className="work-text">Back to home page</Link>
//             <div className="row">

//                 <div className="col-sm-4">
//                     <img src="/hisphotos/kitchens/kitchen2.jpg" className="img-fluid work-photo" alt="kitchen" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/kitchens/kitchen3.jpg" className="img-fluid work-photo" alt="kitchen" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/kitchens/kitchen4.jpg" className="img-fluid work-photo" alt="kitchen" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/kitchens/kitchen8.jpg" className="img-fluid work-photo" alt="kitchen" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/kitchens/kitchen10.jpg" className="img-fluid work-photo" alt="kitchen" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/kitchens/kitchen14.jpg" className="img-fluid work-photo" alt="kitchen" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/kitchens/kitchen38.jpg" className="img-fluid work-photo" alt="kitchen" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/kitchens/kitchen45.jpg" className="img-fluid work-photo" alt="kitchen" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/kitchens/kitchen46.jpg" className="img-fluid work-photo" alt="kitchen" />
//                 </div>
//             </div>
//             <Link to="/" className="work-text">Back to home page</Link>

//         </div>
//     )
// }

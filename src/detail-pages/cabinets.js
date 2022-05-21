import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ImgA from "../images/hisphotos/cabinets/cabinets1.jpg";
import ImgB from "../images/hisphotos/cabinets/work10.jpg";
import ImgC from "../images/hisphotos/cabinets/work11.jpg";
import ImgD from "../images/hisphotos/cabinets/work12.jpg";
import ImgE from "../images/hisphotos/cabinets/work13.jpg";
import ImgF from "../images/hisphotos/cabinets/work14.jpg";
import { CarouselContainer, SlideContainer, Text } from "./cabinets.styled";
import { NewHeader } from "../components/NewHeader";

class CabinetCarousel extends Component {
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
            <h3>Cabinets:</h3>
            <p>
              We offer Face frame Euro Multi-family Entertainment Centers,
              Closets, Garage, Vanities, & Custom Furniture{" "}
            </p>
          </Text>
        </CarouselContainer>
      </>
    );
  }
}
export default CabinetCarousel;

// export const Cabinets = () => {
//   return (
//     <div className="container-fluid">
//       <h3 className="work-text">Our Cabinet work</h3>
//       <Link to="/" className="work-text">
//         Back to home page
//       </Link>
//       <div className="row">
//         <div className="col-sm-4">
//           <img
//             src="/hisphotos/cabinets/cabinets1.jpg"
//             className="img-fluid work-photo"
//             alt="cabinets"
//           />
//         </div>
//         <div className="col-sm-4">
//           <img
//             src="/hisphotos/cabinets/work10.jpg"
//             className="img-fluid work-photo"
//             alt="cabinets"
//           />
//         </div>
//         <div className="col-sm-4">
//           <img
//             src="/hisphotos/cabinets/work11.jpg"
//             className="img-fluid work-photo"
//             alt="cabinets"
//           />
//         </div>
//         <div className="col-sm-4">
//           <img
//             src="/hisphotos/cabinets/work12.jpg"
//             className="img-fluid work-photo"
//             alt="cabinets"
//           />
//         </div>
//         <div className="col-sm-4">
//           <img
//             src="/hisphotos/cabinets/work13.jpg"
//             className="img-fluid work-photo"
//             alt="cabinets"
//           />
//         </div>
//         <div className="col-sm-4">
//           <img
//             src="/hisphotos/cabinets/work14.jpg"
//             className="img-fluid work-photo"
//             alt="cabinets"
//           />
//         </div>
//         <div className="col-sm-4">
//           <img
//             src="/hisphotos/cabinets/work15.jpg"
//             className="img-fluid work-photo"
//             alt="cabinets"
//           />
//         </div>
//         <div className="col-sm-4">
//           <img
//             src="/hisphotos/cabinets/work16.jpg"
//             className="img-fluid work-photo"
//             alt="cabinets"
//           />
//         </div>
//         <div className="col-sm-4">
//           <img
//             src="/hisphotos/cabinets/work17.jpg"
//             className="img-fluid work-photo"
//             alt="cabinets"
//           />
//         </div>
//       </div>
//       <Link to="/" className="work-text">
//         Back to home page
//       </Link>
//     </div>
//   );
// };

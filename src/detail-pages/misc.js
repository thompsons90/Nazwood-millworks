import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import ImgA from "../images/hisphotos/misc/dresser.jpg";
import ImgB from "../images/hisphotos/misc/misc2.jpg";
import ImgC from "../images/hisphotos/misc/misc3.jpg";
import ImgD from "../images/hisphotos/misc/thumbnail_IMG_3910.jpg";
import { CarouselContainer, SlideContainer, Text } from "./cabinets.styled";
import { NewHeader } from "../components/NewHeader";
import { NewFooter } from "../components/NewFooter";

class MiscCarousel extends Component {
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
              <img src={ImgA} alt="miscellaneous example one" />
            </SlideContainer>
            <SlideContainer>
              <img src={ImgB} alt="miscellaneous example two" />
            </SlideContainer>
            <SlideContainer>
              <img src={ImgC} alt="miscellaneous example three" />
            </SlideContainer>
            <SlideContainer>
              <img src={ImgD} alt="miscellaneous example four" />
            </SlideContainer>
          </Carousel>
          <Text>
            <h3>Miscellaneous:</h3>
            <p>
              Our exhibited work is not an exhausted list, there are more
              services that we offer!
            </p>
          </Text>
        </CarouselContainer>
        <NewFooter />
      </>
    );
  }
}
export default MiscCarousel;

// import React from "react";
// import { Link } from "react-router-dom";

// export const Misc = () => {
//     return (
//         <div className="container-fluid">
// <h3 className="work-text" >Our other wood work</h3>
// <Link to="/" className="work-text">Back to home page</Link>
//             <div className="row">

//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/dresser.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/misc1.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/misc2.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/misc3.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/thumbnail_IMG_3910.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/work7.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/work8.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/work9.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/work18.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/work19.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/work20.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/work21.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//                 <div className="col-sm-4">
//                     <img src="/hisphotos/misc/work22.jpg" className="img-fluid work-photo" alt="cabinets" />
//                 </div>
//             </div>
//             <Link to="/" className="work-text">Back to home page</Link>

//         </div>
//     )
// }

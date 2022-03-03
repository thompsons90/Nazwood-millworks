import React from "react";
import Carousel from 'react-elastic-carousel';

export const OurWork = () => {
    return (
        <div className="workPage container-fluid">
            <div className="row">
            <div className="col-sm-4">
             <h4 className="work-text">  Nazwood Millworks is a family-owned manufacturer of high quality custom mouldings and millwork in the Inland Northwest. We are mill direct for home builders, contractors, architects and designers.</h4> 
            </div>
            <div className="col-sm-8">
<Carousel itemsToShow={1} >
 <img src="./slideshow/Woodwork.jpg" className="slideshow-image" alt="NAZWOOD" />
 <img src="./slideshow/2.jpg" className="slideshow-image" alt="Quality craftsmanshi[" />
 <img src="./slideshow/3.jpg" className="slideshow-image" alt="wood" />
</Carousel>
            </div>
           <div className="row">
<div className="col-sm-4">
    <img src="./wood.jpg" className="img-fluid" alt="wood" />
    <h5 className="text-center">Boards</h5></div>
    <div className="col-sm-4">
    <img src="./wood.jpg" className="img-fluid" alt="wood" />
    <h5 className="text-center">Boards</h5></div><div className="col-sm-4">
    <img src="./wood.jpg" className="img-fluid" alt="wood" />
    <h5 className="text-center">Boards</h5></div>
    
           </div>

</div>

        </div>
    )
}
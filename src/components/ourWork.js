import React from "react";
import Carousel from 'react-elastic-carousel';

export const OurWork = () => {
    return (
        <div className="workPage container-fluid">
            <div className="row">
            <div className="col-sm-4">
             <h4 className="work-text">  Quality work is our guarantee</h4> 
            </div>
            <div className="col-sm-8">
<Carousel itemsToShow={1} >
 <img src="./slideshow/Woodwork.jpg" className="img-fluid" alt="NAZWOOD" />
 <img src="./slideshow/2.jpg" className="img-fluid" alt="Quality craftsmanshi[" />
 <img src="./slideshow/3.jpg" className="img-fluid" alt="wood" />
</Carousel>
            </div>


</div>
        </div>
    )
}
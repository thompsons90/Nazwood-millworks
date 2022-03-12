import React from 'react';

function Kenburns() {
    return(
    <div className="kenburns2">
      
     
      {/* You can add more ".slideshow-image" elements, but remember to update the "$items" variable on SCSS */}
      <div className="slideshow2">
        <div
          className="slideshow-image2"
          style={{ backgroundImage: "url(../slideshow/2.jpg)" }}
        ></div>
        <div
          className="slideshow-image2"
          style={{ backgroundImage: "url(../slideshow/3.jpg)" }}
        ></div>
        <div
          className="slideshow-image2"
          style={{ backgroundImage: "url(../slideshow/Woodwork.jpg)" }}
        ></div>
        
      </div>
</div>
    )
}
export default Kenburns
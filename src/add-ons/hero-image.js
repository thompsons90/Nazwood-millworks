import React, {useState, useEffect} from "react";
import './/hero-image.scss'
function HeroImage() {

  return (
    <div className=""><div className="slideshow-container"></div>
    <ul className="slideshow">
  <li><span>Image 01</span><div><h3>A little something something</h3></div></li>
  <li><span>Image 02</span><div><h3>A little something something</h3></div></li>
  <li><span>Image 03</span><div><h3>A little something something</h3></div></li>
  <li><span>Image 04</span></li>
  <li><span>Image 05</span></li>
  <li><span>Image 06</span></li>
</ul>
  </div>
  );
}
export default HeroImage;

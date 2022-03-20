import React, {useState, useEffect} from "react";

function HeroImage() {
const [number, setNumber] = useState(1)
useEffect(() => {
  const changeSlide = () => {
    setTimeout(() => {
      if (number < 4) {
        console.log(number)
setNumber(number + 1)
      }
      else  {
        setNumber(number - 2)
        console.log(number)
      }

  },3000)
  }
  changeSlide()
  
})
  return (
    <div className="hero-image-container">
     
      <div className={`slideshow2 slideshow${number}`}>
       <h1 className="hero-text">NAZWOOD MILLWORKS</h1>
      </div>
    </div>
  );
}
export default HeroImage;

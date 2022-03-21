import React, {useState, useEffect} from "react";

function HeroImage() {
const [number, setNumber] = useState(1)
const [text, setText] = useState(null)
useEffect(() => {
  const changeSlide = () => {
    setTimeout(() => {
      if (number < 4) {
        console.log(number)
        setText(
          'Quote about how great the business is '
        )
setNumber(number + 1)
      }
      else  {
        setNumber(number - 2)
        console.log(number)
        setText('Another quote')
      }
      if (number === 3) {
        setText('futher quotes')
      }

  },3000)
  }
  changeSlide()
  
})
  return (
    <div className="hero-image-container">
     
      <div className={`slideshow-master slideshow${number}`}>
       <h1 className="hero-text ">{text}</h1>
      </div>
    </div>
  );
}
export default HeroImage;

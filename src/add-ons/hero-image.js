import React, {useState, useEffect} from "react";

function HeroImage() {
const [number, setNumber] = useState(1)
const [text, setText] = useState("Very first quote")
useEffect(() => {
  const changeSlide = () => {
    setTimeout(() => {
      if (number < 4) {
        setText(
          'Second quote'
        )
setNumber(number + 1)
      }
      else  {
        setNumber(number - 2)
        setText('Third')
      }
      if (number === 3) {
        setText('Forth')
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

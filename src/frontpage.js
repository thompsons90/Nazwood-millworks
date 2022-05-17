import React from "react";
// import { AboutUs } from "./components/aboutus";
// import { Header } from "./components/header";
// import HeroImage from "./add-ons/hero-image";

import { OurWork } from "./components/ourWork";
// import { Reviews } from "./components/reviews";
// import { WoodTypes } from "./add-ons/woodtypes";
import { Footer } from "./components/footer";
import { NewHeader } from "./components/NewHeader";
import { About } from "./components/About";

export const FrontPage = () => {
  return (
    <div id="frontpage-container">
      {/* <HeroImage /> <Header /> */}
      <NewHeader />

      <div className="wood-border">
        <div id="about"></div>
        <br />
        <br />
        <br />
        <br />
        <About />
        {/* <AboutUs /> */}
        <div id="work"></div>
        <OurWork />
        <div id="reviews"></div>
        {/* <Reviews /> */}
      </div>
      <Footer />
      <div id="contact"></div>
    </div>
  );
};

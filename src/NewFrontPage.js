import React from "react";

import { About } from "./components/About";
import { Services } from "./components/Services";
import {
  FrontPageContainer,
  StyledLine,
  WoodSpecies,
} from "./NewFrontPage.styled";
import { NewFooter } from "./components/NewFooter";
import { NewLocation } from "./NewLocation";
import { NewHeader } from "./components/NewHeader";
import Slideshow from "./components/Slideshow";
// import { Slideshow } from "./components/Slideshow";

export const NewFrontPage = () => {
  return (
    <>
      <NewHeader />
      <FrontPageContainer>
        <Slideshow />

        <h2>Quality and Service is our Passion</h2>
        <StyledLine />
        <div id="about"></div>
        <About />
        <StyledLine />
        <div id="services"></div>
        <Services />
        <StyledLine />
        <WoodSpecies>
          <h2>Wood Species</h2>
          <p>
            Walnut, White Oak, Poplar, Alder, Cherry, Maple, & Hickory or contact us to discuss further options!
          </p>
          {/* <div className="location-container"></div> */}
        </WoodSpecies>
        <StyledLine />
        <div id="location"></div>
        <NewLocation />
        <div id="footer"></div>
        <NewFooter />
      </FrontPageContainer>
    </>
  );
};

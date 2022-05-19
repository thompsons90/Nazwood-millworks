import React from "react";
import { Footer } from "./components/footer";
import { NewHeader } from "./components/NewHeader";
import { About } from "./components/About";
import { Services } from "./components/Services";
import {
  FrontPageContainer,
  InvisibleDiv,
  StyledLine,
} from "./NewFrontPage.styled";
import { NewFooter } from "./components/NewFooter";
import { NewLocation } from "./NewLocation";

export const NewFrontPage = () => {
  return (
    <>
      <NewHeader />
      <FrontPageContainer>
        <InvisibleDiv />
        <h2>Quality and Service is our Passion</h2>
        <StyledLine />
        <About />
        <StyledLine />
        <Services />
        <StyledLine />
        {/* <Footer /> */}
        <div className="location-container"></div>
        <NewLocation />
        <NewFooter />
      </FrontPageContainer>
    </>
  );
};

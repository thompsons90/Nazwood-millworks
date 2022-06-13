import React from "react";
import { AboutContainer, Line, TextContainer } from "./About.styled";

export const About = () => {
  return (
    <AboutContainer>
      <TextContainer>
      <h3>About</h3>
      <h1>Nazwood Millworks</h1>
      <h3>Artistry | Archetecture | Craftsmanship</h3>
      <p>
        Call us direct at: </p><p> <a href="tel:15099911786">(509)991-1786</a> </p> <p>or</p><p>
        <a href="tel:12088198715">(208)819-8715</a></p><p> to discuss what we can mill
        for you!
      </p>
      <p>
        Nazwood Millworks is a family-owned manufactuer of high quality custom
        mouldings and millwork in the Inland Northwest. </p><p> We are mill direct to
        home builders, contractors, architects, and designers.
      </p>
      </TextContainer>
    </AboutContainer>
  );
};

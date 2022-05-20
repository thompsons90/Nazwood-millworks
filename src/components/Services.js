import React from "react";
import { WorkPopUp } from "../add-ons/workPopUp";
import { StyledLine } from "../NewFrontPage.styled";
import { ServiceContainer } from "./Services.styled";

export const Services = () => {
  return (
    <ServiceContainer>
      <h2>Services</h2>
      <WorkPopUp />
    </ServiceContainer>
  );
};

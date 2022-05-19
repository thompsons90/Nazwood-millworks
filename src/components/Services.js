import React from "react";
import { WorkPopUp } from "../add-ons/workPopUp";
import { ServiceContainer } from "./Services.styled";

export const Services = () => {
  return (
    <ServiceContainer>
      <hr />
      <h2>Services</h2>
      <WorkPopUp />
      <h2>Wood Species</h2>
      <p>Walnut, White Oak, Poplar, Alder, Cherry, Maple, & Hickory or...</p>
    </ServiceContainer>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { NewFooterContainer, EmployeeLink } from "./NewFooter.styled";

export const NewFooter = () => {
  return (
    <NewFooterContainer>
      <div id="hours-container">
        <p>Hours:</p>
        <p>Monday - Friday 7am-4pm PST</p>
        <p>Saturday - Sunday By Appointment Only</p>
      </div>
      <div id="contact-container">
        <p>Contact:</p>
        <p>sales@nazwood.com</p>
        <p>
          Direct <a href="tel:15099911786">(509)991-1786</a>
        </p>
        <p>
          Direct <a href="tel:12088198715">(208)819-8715</a>
        </p>
      </div>
      <EmployeeLink to="/login" className="employee-login">
        Employee Login
      </EmployeeLink>
    </NewFooterContainer>
  );
};

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  Container,
  HeaderText,
  MainLogo,
  NavbarContainer,
  TitleContainer,
} from "./NewHeader.styles";
// import { NewNavbar } from "./Modal";

export const NewHeader = () => {
  const [hidden, setHidden] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="modal-container">
      <Container>
        <TitleContainer>
          <MainLogo to="/"></MainLogo>
          <HeaderText>
            <h1>Nazwood</h1>
            <h1>Millworks</h1>
          </HeaderText>
        </TitleContainer>
        <NavbarContainer></NavbarContainer>
      </Container>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "../App.scss";
import Logo from "../logo.png";
// import { Header } from "./header";
// import { Navbar } from "./Navbar";
import { Container, HeaderText } from "./NewHeader.styles";

export const NewHeader = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <Container>
      <Link to="/">
        <img src={Logo} id="main-logo" alt="company logo"></img>
      </Link>
      <HeaderText>
        <h1>Nazwood</h1>
        <h1>Millworks</h1>
      </HeaderText>
      <div id="nav-container">{/* <Navbar /> */}</div>
    </Container>
  );
};

import styled from "styled-components";
import { colors } from "../utils/GlobalStyles";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100vw;
  height: 100px;
  background-color: ${colors.primary};
  z-index: 10;
  display: flex;
  box-shadow: -7px 2px 7px rgba(0, 0, 0, 0.5);
  h1 {
    color: white;
    font-weight: bold;
    text-shadow: #000 1px 1px 2px;
  }
`;

export const HeaderText = styled.div`
  margin-top: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
`;
export const MainLogo = styled(Link)`
  background-image: url(/newImages/newLogo/newLogo1.png);
  background-size: cover;
  width: 100px;
  margin: 10px;
`;

export const NavbarContainer = styled.div`
  float: right;
  width: 100px;
  margin: auto;
  display: flex;
  justify-content: end;
`;

export const MenuButton = styled.button`
  background: url(/newImages/newLogo/newHamburgerLogo.png);
  color: white;
  width: 50px;
  height: 50px;
  background-size: cover;
  border: none;
  &:hover {
    color: black;
  }
`;

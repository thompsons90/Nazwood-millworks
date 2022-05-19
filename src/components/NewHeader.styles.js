import styled from "styled-components";
import { colors } from "../utils/GlobalStyles";

export const Container = styled.div`
  position: fixed;
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

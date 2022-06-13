import styled from "styled-components";
import { colors } from "./utils/GlobalStyles";

export const NewLocationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  h3 {
    color: ${colors.primary};
    font-size: 25px;
    text-shadow: #FFF 1px 1px 2px;
    font-weight: bold;
  }
`;

export const AddressContainer = styled.div`
  border: 2px solid black;
  width: 100%;
  padding: 10px;
  p {
    font-size: 16px;
    line-height: 0.9;
  }
  text-align: center;
`;

export const LocationTitle = styled.h1`
  color: ${colors.primary};
  display: flex;
  justify-content: center;
  font-size: 25px;
  text-shadow: #FFF 1px 1px 2px;
  font-weight: bold;
`;

import styled from "styled-components";
import { colors } from "./utils/GlobalStyles";

export const NewLocationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  h3 {
    color: ${colors.primary};
    font-size: 25px;
    text-shadow: #000 1px 1px 2px;
    font-weight: bold;
  }
`;

export const AddressContainer = styled.div`
  border: 2px solid black;
  padding: 10px;
  p {
    font-size: 16px;
    line-height: 0.9;
  }
`;

export const LocationTitle = styled.h1`
  color: ${colors.primary};
  font-size: 25px;
  text-shadow: #000 1px 1px 2px;
  font-weight: bold;
`;

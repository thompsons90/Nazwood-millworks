import styled from "styled-components";
import { colors } from "../utils/GlobalStyles";

export const AboutContainer = styled.div`
width: 90%;  
background-image: url(/newImages/newTextures/texture4.png);
  background-size: cover;
  font-weight: bold;
  padding 10px;
  h1 {
    color: white;
    text-shadow: #000 1px 1px 2px;
    font-size: 40px;
  }
  h3 {
    color: ${colors.primary};
    font-size: 25px;
    text-shadow: #000 1px 1px 2px;
    font-weight: bold;
  }
  p {
    
  }
`;

export const Line = styled.hr`
  border: 10px solid black;
`;

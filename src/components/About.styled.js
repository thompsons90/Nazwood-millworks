import styled from "styled-components";
import { colors } from "../utils/GlobalStyles";

export const AboutContainer = styled.div`
width: 100%;  
background-image: url(/newTextures/texture4.jpg);
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
    text-shadow: #FFF 1px 1px 2px;
    font-weight: bold;
  }
  p {
    font-weight: bold;
    text-shadow: #FFF 1px 1px 2px;
    
  }
`;

export const Line = styled.hr`
  border: 10px solid black;
`;

import styled from "styled-components";
import { colors } from "../utils/GlobalStyles";

export const AboutContainer = styled.div`
width: 100%;  
background-image: url(/newTextures/texture4.jpg);
  background-size: cover;
  font-weight: bold;
  // padding 10px;
  display: flex;
  justify-content: center;
  h1 {
    color: white;
    text-shadow: #FFF 1px 1px 2px;
    font-size: 40px;
    display: flex;
    justify-content: center;
  }
  h3 {
    color: ${colors.primary};
    font-size: 25px;
    text-shadow: #FFF 1px 1px 2px;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
  p {
    font-weight: bold;
    text-shadow: #FFF 1px 1px 2px;
        display: flex;
    justify-content: center;
    margin: 10px;
    line-height: 1.15;
  }
`;

export const TextContainer = styled.div`
width: 80%;
text-align: center;
padding: 10px;
`
export const Line = styled.hr`
  border: 10px solid black;
`;

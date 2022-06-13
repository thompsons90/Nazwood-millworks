import styled from "styled-components";
import { device } from "../utils/Breakpoints";
import { colors } from "../utils/GlobalStyles";

export const CarouselContainer = styled.div`
  width: 90%;
  // height: 250px;
  margin: auto;
  margin-top: 150px;
  @media ${device.desktop} {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 15px;
    width: 75%;
  }
`;

export const SlideContainer = styled.div`
  // height: 240px;
  object-fit: contain;
  overflow: hidden;
  @media (max-width: 300px) {
    height: 175px;
  }
  @media ${device.tablet} {
    // height: 400px;
  }
  @media ${device.desktop} {
    // height: 500px;
  }
`;

export const Text = styled.div`
  background-color: #f1f1f1;
  h3 {
    color: ${colors.primary};
    font-size: 25px;
    text-shadow: #000 1px 1px 2px;
    font-weight: bold;
  }
  @media ${device.desktop} {
    padding: 15px;
  }
`;

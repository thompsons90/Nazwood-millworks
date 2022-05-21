import styled from "styled-components";
import { colors } from "../utils/GlobalStyles";

export const CarouselContainer = styled.div`
  width: 90%;
  height: 250px;
  margin: auto;
  margin-top: 150px;
`;

export const SlideContainer = styled.div`
  height: 250px;
  object-fit: contain;
  overflow: hidden;
`;

export const Text = styled.div`
  background-color: #f1f1f1;
  h3 {
    color: ${colors.primary};
    font-size: 25px;
    text-shadow: #000 1px 1px 2px;
    font-weight: bold;
  }
`;

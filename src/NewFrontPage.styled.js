import { colors } from "./utils/GlobalStyles";
import styled from "styled-components";

export const FrontPageContainer = styled.div`
  align-items: center;
  margin: auto;
  width: 90%;
  margin-top: 150px;
  h2 {
    display: flex;
  justify-content: center;
  }
`;

export const StyledLine = styled.div`
  border: 1px solid ${colors.secondary};
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const WoodSpecies = styled.div`
  h2 {
    color: ${colors.primary};
    font-size: 25px;
    text-shadow: #FFF 1px 1px 2px;
    font-weight: bold;
    display: flex;
  justify-content: center;
  }
  p {
    display: flex;
  justify-content: center;
  }
`;

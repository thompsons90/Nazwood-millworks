import styled from "styled-components";
import { colors } from "../utils/GlobalStyles";

export const ServiceContainer = styled.div`
  background-color: #f1f1f1;

  h2 {
    color: ${colors.primary};
    font-size: 25px;
    text-shadow: #000 1px 1px 2px;
    font-weight: bold;
  }
`;

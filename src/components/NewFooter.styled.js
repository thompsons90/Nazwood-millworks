import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../utils/GlobalStyles";

export const NewFooterContainer = styled.div`
  background-image: url(/newTextures/texture5.png);
  padding: 15px;
  line-height: 0.5;
  color: white;
  font-size: 12px;
  text-shadow: #000 1px 1px 2px;
  @media (min-width: 600px) {
    font-size: 16px;
  }
  text-align: center;
`;

export const EmployeeLink = styled(Link)`
  color: white;
  background-color: black;
  &:hover {
    background-color: black;
    color: ${colors.secondary};
    cursor: pointer;
  }
`;

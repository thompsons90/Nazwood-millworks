import { colors } from "./utils/GlobalStyles";
import styled from "styled-components";

export const FrontPageContainer = styled.div`
  align-items: center;
  margin: auto;
  width: 90%;
`;

export const InvisibleDiv = styled.div`
  height: 150px;
`;

// export const StyledLine = styled.div`
//   border: 5px solid ${colors.secondary};
//   width: 80%;
// `;

export const StyledLine = styled.div`
  border: 1px solid ${colors.secondary};
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

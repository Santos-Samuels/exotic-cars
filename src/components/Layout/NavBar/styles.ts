import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components";

export const StyledNav = styled.nav`
  /* padding: 15px 80px; */
  padding: 15px 25px;
  background-color: ${colors.backgroud};
  box-shadow: 0 10px 30px ${colors.shadow};
  width: 100%;
  z-index: 10;
`;

export const Logo = styled.div`
  text-transform: uppercase;

  & strong {
    font-weight: 500;
    font-size: 22px;
    margin-right: 4px;
  }
`;

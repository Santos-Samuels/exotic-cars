import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components";

export const StyledDiv = styled.div<{styledBackgroung: boolean}>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: ${props => props.styledBackgroung ? 'transparent linear-gradient(125deg, #FFFFFF 0%, #D8D7D7 100%) 0% 0% no-repeat padding-box' : colors.backgroud};
`

export const Container = styled.div`
  margin: 15px 15px;
  color: ${colors.font};

  @media (min-width: 900px) {
    margin: 15px 50px;
  }

  @media (min-width: 1200px) {
    margin: 15px 80px;
  }
`
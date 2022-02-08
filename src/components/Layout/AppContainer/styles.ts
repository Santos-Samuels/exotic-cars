import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div<{styledBackgroung: boolean}>`
  /* padding: 15px 80px; */
  padding: 15px 15px;
  color: ${colors.font};
  background-color: ${colors.backgroud};
  ${props => props.styledBackgroung ? 'background: transparent linear-gradient(125deg, #FFFFFF 0%, #D8D7D7 100%) 0% 0% no-repeat padding-box;' : ''}
`
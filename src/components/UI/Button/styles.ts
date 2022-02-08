import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components";

export const StyledButton = styled.div<{fill: boolean, centered: boolean, width: string}>`
  border-radius: 30px;
  padding: 9px 20px;
  border: 1px solid ${colors.font};
  background-color: ${props => props.fill ? colors.font : 'transparent'};
  color: ${props => props.fill ? '#FFFFFF' : colors.font};
  cursor: pointer;
  transition: transform .3s;
  ${props => props.centered ? 'margin: auto;' : ''};
  width: ${props => props.width ? props.width : 'auto'};

  &:hover {
    transform: scale(1.1);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
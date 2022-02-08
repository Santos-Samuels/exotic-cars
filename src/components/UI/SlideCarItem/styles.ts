import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components";

export const Container = styled.article<{isSelected: boolean}>`
  color: ${colors.font};
  background: transparent linear-gradient(125deg, ${props => props.isSelected ? '#b7b9f2' : '#d5d5d5'} 0%, #d4d4d4 100%) 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding: 15px 10px;
  width: 170px;
  margin: 10px;
  transition: transform .3s;
  cursor: pointer;
  ${props => props.isSelected ? 'transform: scale(1.2);' : ''}

  & img {
    width: 200px;
  }

  &:hover {
    transform: scale(1.2);
  }
`

export const StyledImage = styled.img`
  width: 110px;
`
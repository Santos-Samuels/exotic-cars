import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components";

export const Container = styled.article<{isSelected: boolean}>`
  color: ${colors.font};
  background: transparent linear-gradient(125deg, ${props => props.isSelected ? '#b7b9f2' : '#d5d5d5'} 0%, #d4d4d4 100%) 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding: 15px 10px;
  margin: 20px;
  transition: transform .5s;
  cursor: pointer;
  ${props => props.isSelected ? 'transform: scale(1.2);' : ''}

  & img {
    width: 100%;
  }

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 1300px) {
    margin: 30px;
  }
`
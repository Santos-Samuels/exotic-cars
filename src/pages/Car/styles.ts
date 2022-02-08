import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components";

export enum titleSize {
  xl = '38px',
  lg = '33px',
  md = '28px',
  sm = '23px',
  xs = '18px',
}

export const Title = styled.h1<{bold: boolean, size: titleSize}>`
  font-size: ${props => props.size};
  ${props => props.bold ? 'font-weight: 600;' : 'font-weight: 400;'}
`

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  & img {
    height: 110px;
    margin-right: 20px;
  }
`

export const ColorContainer = styled.div`
  text-align: center;
`

export const Button = styled.div<{fill?: boolean, centered?: boolean, width?: string}>`
  border-radius: 30px;
  padding: 9px 20px;
  border: 1px solid ${colors.font};
  background-color: ${props => props.fill ? colors.font : 'transparent'};
  color: ${props => props.fill ? '#FFFFFF' : colors.font};
  cursor: pointer;
  transition: transform .3s;
  ${props => props.centered ? 'margin: auto;' : ''};
  ${props => props.width ? `width: ${props.width};` : ''};

  &:hover {
    transform: scale(1.1);
  }
`
  
export const RowContainer = styled.div<{between?: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.between ? 'space-between': ' center'};
`
  
export const StyledImage = styled.img`
  width: 100%;
`
  
// export const StyledSection = styled.section`
//   display: flex;
//   flex-direction: row;
// `
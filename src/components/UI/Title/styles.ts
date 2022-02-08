import styled from "styled-components";

export enum titleSize {
  xl = '38px',
  lg = '33px',
  md = '28px',
  sm = '23px',
  xs = '18px',
}

export const StyledTitle = styled.h1<{bold: boolean, size: titleSize}>`
  font-size: ${props => props.size};
  font-weight: ${props => props.bold ? '600' : '300'};

  @media (min-width: 900px) {
    font-size: calc(${props => props.size} + 10px);
  }

  @media (min-width: 1200px) {
    font-size: calc(${props => props.size} + 20px);
  }
  
`
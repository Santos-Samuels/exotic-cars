import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components";

export const Container = styled.article`
  color: ${colors.font};
  background-color: ${colors.backgroudCard};
  border-radius: 20px;
  padding: 15px 10px;
  height: 180px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform .3s;
  cursor: pointer;
  position: relative;

  & p {
    text-transform: uppercase;
    font-weight: 300;
  }

  & img {
    width: 200px;
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const PriceContent = styled.div<{color: string}>`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & strong {
    font-size: 15px;
    align-self: flex-start;
    margin-top: -2px;
  }

  & span {
    font-size: 15px;
    align-self: flex-end;
  }

  & h5 {
    padding: 1px 6px;
    border-radius: 5px;
    background-color: ${props => props.color};
    color: #FFFFFF;
    position: absolute;
    top: -5px;
  }
`
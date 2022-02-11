import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components";

export const StyledNav = styled.nav`
  padding: 15px 25px;
  background-color: ${colors.backgroud};
  box-shadow: 0 10px 30px ${colors.shadow};
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 900px) {
    padding: 15px 50px;
  }

  @media (min-width: 1200px) {
    padding: 15px 100px;
  }
`;

export const Logo = styled.div`
  text-transform: uppercase;
  margin-right: 10px;

  & strong {
    font-weight: 500;
    font-size: 22px;
    margin-right: 4px;
  }
`;

export const AuthButton = styled.button<{outline?: boolean}>`
  border: ${props => props.outline ? `solid 2px ${colors.auth}` : 'none'};
  border-radius: 10px;
  padding: 5px 10px;
  color: ${colors.auth};
  background-color: ${colors.backgroud};
  font-weight: 600;
  margin-left: 8px;
  transition: transform .2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FilterContainer = styled.div`
  background-color: ${colors.backgroudCard};
  border-radius: 20px;
  padding: 3px 3px 5px 20px;
  display: flex;
  align-items: center;
  margin: 10px 0;

  @media (min-width: 930px) {
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
  }

  @media (min-width: 710px) {
    margin: 0;
  }
`

export const FilterContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

export const Input = styled.div`
  display: flex;
  align-items: center;

  & span {
    color: ${colors.icon};
    margin-right: 5px;
  }

  & input {
    border: none;
    background-color: ${colors.backgroudCard};
    font-weight: 600;
    color: ${colors.inputText};
    outline: 0;
  }
`

export const InputDataContainer = styled.div`
  margin: 0 15px;
  display: flex;
  align-items: center;
`

export const SearchButton = styled.span`
  background-color: ${colors.backgroud};
  border-radius: 20px;
  padding: 5px;
  box-shadow: 0px 3px 15px #00000014;
  color: ${colors.auth};
  cursor: pointer;
`

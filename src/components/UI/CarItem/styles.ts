import { colors } from "@shared/GlobalStyles/colors";
import styled from "styled-components";

export const Container = styled.article`
  color: ${colors.font};
  background-color: ${colors.backgroudCard};
  border-radius: 20px;
  padding: 15px 10px;

  & img {
    width: 200px;
  }
`
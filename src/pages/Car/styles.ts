import styled from "styled-components";

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

export const InfoContent = styled.section<{color: string}>`
  position: relative;

  & h5 {
    padding: 1px 6px;
    border-radius: 5px;
    font-size: 17px;
    background-color: ${props => props.color};
    color: #FFFFFF;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`
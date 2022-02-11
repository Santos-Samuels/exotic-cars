import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  margin: 25px auto 0;
`

export const StyledImage = styled.img`
  width: 100%;
  transition: all 0.3s;
  animation: go-back 1s;

  @keyframes go-back {
    0% {
        transform: translateY(100px);
    }
    100% {
        transform: translateY(0);
    }
  }

  @media (min-width: 900px) {
    width: 60%;
  }
`

export const ColorContainer = styled.div`
  text-align: center;

  @media (min-width: 900px) {
    align-self: flex-start;
  }
`
  
export const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`
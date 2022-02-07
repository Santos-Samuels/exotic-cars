import NavBar from "../NavBar";
import { Container, StyledDiv } from "./styles";

const AppContainer: React.FC = (props) => {
  return (
    <StyledDiv>
      <NavBar />
      <Container>{props.children}</Container>
    </StyledDiv>
  );
};

export default AppContainer;

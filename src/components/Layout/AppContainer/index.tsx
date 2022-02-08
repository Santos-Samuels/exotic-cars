import NavBar from "../NavBar";
import { Container, StyledDiv } from "./styles";

const AppContainer: React.FC<{styledBackgroung?: boolean}> = (props) => {
  return (
    <StyledDiv>
      <NavBar />
      <Container styledBackgroung={props.styledBackgroung ? props.styledBackgroung : false}>{props.children}</Container>
    </StyledDiv>
  );
};

export default AppContainer;

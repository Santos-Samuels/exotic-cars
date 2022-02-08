import NavBar from "../NavBar";
import { Container, StyledDiv } from "./styles";

const AppContainer: React.FC<{styledBackgroung?: boolean}> = (props) => {
  return (
    <StyledDiv styledBackgroung={props.styledBackgroung ? props.styledBackgroung : false}>
      <NavBar />
      <Container>{props.children}</Container>
    </StyledDiv>
  );
};

export default AppContainer;

import { Container } from './styles';

const AppContainer: React.FC = (props) => {
  return <Container>
      {props.children}
  </Container>;
}

export default AppContainer;
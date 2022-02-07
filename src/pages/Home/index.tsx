import { AppContainer, NavBar, CarList } from '@components/index';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <AppContainer>
        <CarList />
      </AppContainer>
    </>
  );
}

export default Home;
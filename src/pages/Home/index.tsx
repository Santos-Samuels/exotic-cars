import { AppContainer, CarList } from "@components/index";
import { ScrollButton } from "./styles";

const Home: React.FC = () => {
  return (
    <AppContainer>
      <CarList />
      <ScrollButton
      className="material-icons"
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      expand_less
    </ScrollButton>
    </AppContainer>
  );
};

export default Home;

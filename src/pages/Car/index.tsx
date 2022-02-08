import {
  InfoContainer,
} from "./styles";
import { AppContainer, Slide, Button, Title } from "@components/index";
import data from "@shared/services/cars.json";
import { useParams } from "react-router-dom";
import { titleSize } from "@components/UI/Title/styles";

const Car: React.FC = () => {
  const { id } = useParams();
  const car = data.cars.find((car) => car.id.toString() === id);

  return (
    <AppContainer styledBackgroung>
      <InfoContainer>
        <img src={car?.brand_logo} alt={`${car?.beand} logo`} />
        <div>
          <Title bold size={titleSize.lg}>
            {car?.beand + ' ' + car?.model}
          </Title>
          <Title bold={false} size={titleSize.md}>
            ${car?.price_per_day}/day
          </Title>
        </div>
      </InfoContainer>

      <Slide />
    </AppContainer>
  );
};

export default Car;

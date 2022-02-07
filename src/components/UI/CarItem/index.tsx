import { Container } from "./styles";
import { ICar } from "@shared/interfaces";
import Ferrari from '@assets/ferrari-red.png'

interface IProps {
  car: ICar;
}

const CarItem: React.FC<IProps> = (props) => {
  return (
    <Container>
      <h4>{props.car.beand}</h4>
      <p>{props.car.model}</p>
      <img src={props.car.images[0].url} alt={props.car.beand} />
    </Container>
  );
};

export default CarItem;

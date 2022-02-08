import { Container, PriceContent } from "./styles";
import { ICar } from "@shared/interfaces";
import { Link, useNavigate } from "react-router-dom";

interface IProps {
  car: ICar;
}

const CarItem: React.FC<IProps> = (props) => {
  const navigate = useNavigate();
  
  return (
    <Container onClick={() => navigate(`/car/${props.car.id}`)}>
      <div>
        <h4>{props.car.beand}</h4>
        <p>{props.car.model}</p>
      </div>

      <img src={props.car.image} alt={props.car.beand} />

      <PriceContent>
        <strong>$</strong>
        <h3>{props.car.price_per_day}</h3>
        <span>/day</span>
      </PriceContent>
    </Container>
  );
};

export default CarItem;

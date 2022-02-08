import { Container, PriceContent } from "./styles";
import { ICar } from "@shared/interfaces";
import { Link } from "react-router-dom";

interface IProps {
  car: ICar;
}

const CarItem: React.FC<IProps> = (props) => {
  return (
    <Link to={`/car/${props.car.id}`} style={{textDecoration: 'none'}}>
      <Container>
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
    </Link>
  );
};

export default CarItem;

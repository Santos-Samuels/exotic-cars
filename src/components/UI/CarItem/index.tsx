import { Container, PriceContent } from "./styles";
import { ICar } from "@shared/interfaces";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "@shared/GlobalStyles/colors";

interface IProps {
  car: ICar;
}

const CarItem: React.FC<IProps> = (props) => {
  const navigate = useNavigate();
  console.log(props.car)
  return (
    <Container onClick={() => navigate(`/car/${props.car.id}`)}>
      <div>
        <h4>{props.car.beand}</h4>
        <p>{props.car.model}</p>
      </div>

      <img src={props.car.image} alt={props.car.beand} />

      <PriceContent color={props.car.status === 'in stock' ? colors.success : colors.assent}>
        <strong>$</strong>
        <h3>{props.car.price_per_day}</h3>
        <span>/day</span>
        <h5>{props.car.status}</h5>
      </PriceContent>
    </Container>
  );
};

export default CarItem;

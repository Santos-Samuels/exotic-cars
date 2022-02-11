import { Container, PriceContent } from "./styles";
import { ICar } from "@shared/interfaces";
import { useNavigate } from "react-router-dom";
import { colors } from "@shared/GlobalStyles/colors";

interface IProps {
  car: ICar;
}

const CarItem: React.FC<IProps> = ({ car }) => {
  const navigate = useNavigate();
  console.log(car)
  return (
    <Container onClick={() => navigate(`/car/${car.id}`)}>
      <div>
        <h4>{car.beand}</h4>
        <p>{car.model}</p>
      </div>

      <img src={car.image} alt={car.beand} />

      <PriceContent color={car.status === 'in stock' ? colors.success : colors.assent}>
        <strong>$</strong>
        <h3>{car.price_per_day}</h3>
        <span>/day</span>
        <h5>{car.status}</h5>
      </PriceContent>
    </Container>
  );
};

export default CarItem;

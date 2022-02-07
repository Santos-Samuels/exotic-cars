import { Container } from './styles';
import data from '@shared/services/cars.json'
import CarItem from "../CarItem";

const CarList: React.FC = () => {
  return (
      <Container>
        {data.cars.map(car => <CarItem key={car.id} car={car} />)}
      </Container>
  );
}

export default CarList;
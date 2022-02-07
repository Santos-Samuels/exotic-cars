// import { Container } from './styles';

import { useParams } from "react-router-dom";

const Car: React.FC = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      Car Page {id}
    </div>
  );
}

export default Car;
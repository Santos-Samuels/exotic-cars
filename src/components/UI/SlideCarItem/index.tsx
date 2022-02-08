import { Container } from "./styles";

interface IProps {
  image: string;
  imageId: number;
  isSelected: boolean;
  slideHandler: (imageId:number) => void;
}

const SlideCarItem: React.FC<IProps> = (props) => {
  return (
    <Container isSelected={props.isSelected} onClick={() => props.slideHandler(props.imageId)}>
      <img src={props.image} alt="" />
    </Container>
  );
};

export default SlideCarItem;

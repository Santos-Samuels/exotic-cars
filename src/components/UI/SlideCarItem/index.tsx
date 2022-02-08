import { Container, StyledImage } from "./styles";

interface IProps {
  image: string;
  imageId: number;
  isSelected: boolean;
  slideHandler: (imageId:number) => void;
}

const SlideCarItem: React.FC<IProps> = (props) => {
  return (
    <Container isSelected={props.isSelected} onClick={() => props.slideHandler(props.imageId)}>
      <StyledImage src={props.image} alt="" />
    </Container>
  );
};

export default SlideCarItem;

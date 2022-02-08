import { ICarImage } from "@shared/interfaces";
import { useState } from "react";
import SlideCarItem from "../SlideCarItem";
import { Container } from "./styles";

interface IProps {
  carImages: ICarImage[];
}

const SlideCarList: React.FC<IProps> = (props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(1)

  const slideHendler = (imageId: number) => {
    setSelectedImageIndex(imageId)
  }

  return (
    <Container>
      {props.carImages.map(image => <SlideCarItem image={image.url} imageId={image.id} isSelected={image.id === selectedImageIndex} slideHandler={slideHendler} />)}
    </Container>
  );
};

export default SlideCarList;

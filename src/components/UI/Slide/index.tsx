import { useEffect, useState } from "react";
import Button from "../Button";
import SlideCarItem from "../SlideCarItem";
import Title from "../Title";
import { titleSize } from "../Title/styles";
import { ColorContainer, Container, StyledImage, StyledMain } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import data from "@shared/services/cars.json";
import { ICarImage } from "@shared/interfaces";

const Slide: React.FC = () => {
  const { id } = useParams();
  const car = data.cars.find((car) => car.id.toString() === id);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<ICarImage>(car!.images[1]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const slideHendler = (imageId: number) => {
    setSelectedImage(car!.images.find((image) => image.id === imageId)!);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
  }, []);

  return (
    <>
      <StyledMain>
        <Button clickHandler={() => navigate(-1)}>
          <span className="material-icons" style={{ marginRight: "5px" }}>
            arrow_back
          </span>
          Back to catalog
        </Button>

        {windowWidth > 900 && <StyledImage src={selectedImage.url} alt="" />}

        <ColorContainer>
          <Title bold size={titleSize.xl}>
            {selectedImage.id.toString().padStart(2, "0")}
          </Title>
          <Title bold={false} size={titleSize.xs}>
            {selectedImage.color}
          </Title>
        </ColorContainer>
      </StyledMain>

      {windowWidth <= 900 && <StyledImage src={selectedImage.url} alt="" />}

      <Button fill centered width="150px" clickHandler={() => {}}>
        Buy now
        <span className="material-icons" style={{ marginLeft: "5px" }}>
          arrow_forward
        </span>
      </Button>

      <Container>
        {car?.images.map((image) => (
          <SlideCarItem
            image={image.url}
            imageId={image.id}
            isSelected={image.id === selectedImage.id}
            slideHandler={slideHendler}
          />
        ))}
      </Container>
    </>
  );
};

export default Slide;

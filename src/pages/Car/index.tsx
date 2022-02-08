import {
  Button,
  ColorContainer,
  InfoContainer,
  RowContainer,
  StyledImage,
  Title,
  titleSize,
} from "./styles";
import { AppContainer, SlideCarList } from "@components/index";
import data from "@shared/services/cars.json";
import { useNavigate, useParams } from "react-router-dom";

const Car: React.FC = () => {
  const { id } = useParams();
  const car = data.cars.find((car) => car.id.toString() === id);
  const navigate = useNavigate();

  return (
    <AppContainer styledBackgroung>
      <InfoContainer>
        <img src={car?.brand_logo} alt={`${car?.beand} logo`} />
        <div>
          <Title bold size={titleSize.lg}>
            {car?.beand}
          </Title>
          <Title bold={false} size={titleSize.md}>
            ${car?.price_per_day}/day
          </Title>
        </div>
      </InfoContainer>

      <section>
        <RowContainer between>
          <Button onClick={() => navigate(-1)}>
            <RowContainer>
              <span className="material-icons" style={{ marginRight: "5px" }}>
                arrow_back
              </span>
              Back to catalog
            </RowContainer>
          </Button>

          <ColorContainer>
            <Title bold size={titleSize.xl}>
              {car?.images[0].id.toString().padStart(2, "0")}
            </Title>
            <Title bold={false} size={titleSize.xs}>
              {car?.images[0].color}
            </Title>
          </ColorContainer>
        </RowContainer>

        <StyledImage src={car?.image} alt="" />
      </section>

      <Button onClick={() => navigate(-1)} fill centered width="140px">
          <RowContainer>
            Buy now
            <span className="material-icons" style={{ marginLeft: "5px" }}>
              arrow_forward
            </span>
          </RowContainer>
        </Button>

      <SlideCarList carImages={car!.images} />
    </AppContainer>
  );
};

export default Car;

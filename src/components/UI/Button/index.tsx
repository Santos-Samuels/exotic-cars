import { StyledButton, Content } from "./styles";

interface IProps {
  fill?: boolean;
  centered?: boolean;
  width?: string;
  clickHandler: () => void;
}

const Button: React.FC<IProps> = (props) => {
  return (
    <StyledButton
      onClick={() => props.clickHandler()}
      fill={props.fill ? props.fill : false}
      centered={props.centered ? props.centered : false}
      width={props.width ? props.width : ""}
    >
      <Content>{props.children}</Content>
    </StyledButton>
  );
};

export default Button;

import { StyledTitle, titleSize } from './styles';

interface IProps {
  bold: boolean;
  size: titleSize;
}

const Title: React.FC<IProps> = (props) => {
  return <StyledTitle bold={props.bold} size={props.size}>{props.children}</StyledTitle>;
}

export default Title;
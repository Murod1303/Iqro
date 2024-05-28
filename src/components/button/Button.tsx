import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 131px;
  height: 42px;
  padding: 13px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: linear-gradient(180deg, #a93bff 0%, #8834ff 100%);
  box-shadow: 0px 15px 35px 0px rgba(86, 59, 255, 0.26);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
`;
interface ButtonProps {
  name: String;
  left: React.CSSProperties;
}
const Button = (props: ButtonProps) => {
  return <ButtonStyle style={props.left}>{props.name}</ButtonStyle>;
};

export default Button;

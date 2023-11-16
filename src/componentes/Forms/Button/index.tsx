import styled from "styled-components";

interface Props {
  _width?: string,
  _height?: string,
  _margin?: string,
  _padding?: string,
}
const Button = styled.button<Props>`
  width: ${Props => Props._width ? Props._width : ""};
  height: ${Props => Props._height ? Props._height : "25px"};
  margin: ${Props => Props._margin ? Props._margin : "20px"};
  padding: ${Props => Props._padding ? Props._padding : ""};
  cursor: pointer;
    color: white;
    background-color: #0086e4;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 4px;
    letter-spacing: 1px;
    transition-duration: 1s;
    &:hover {background-color: #18a0ff;}
    &:active {transform: scale(0.95);}
`;
export default Button;
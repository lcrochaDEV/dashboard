import { styled } from "styled-components";

interface Props {
    _width?: string,
    _height?: string,
    _fontsize?: string,
    _color?: string,
    _border?: string,
    _fontweight?: string,
    _focus?: boolean,
    _valid?: boolean,
    _bottom?:string
 }
 const Input = styled.input<Props>`
    width: ${Props => Props._width ? Props._width : ""};
    height: ${Props => Props._height ? Props._height : "25px"};
    border: ${Props => Props._border ? Props._border : "0"};
    color: ${Props => Props._color ? Props._color : ""};
    border-bottom: 1px solid #EEE;
    padding: 0 4px;
    transition-duration: 0.5s;
    position: relative; 
    bottom: ${Props => Props._bottom ? Props._bottom : ""};

    ${Props => Props._focus 
        ?`&:focus {
            outline: none; 
            border-bottom: 1px solid #0086e4;
            position: relative;
            margin-top: 30px;

        }`
        :`&:focus {
            outline: none; 
            border-bottom: 1px solid #0086e4;
        }`
    }
    ${Props => Props._valid ?
        `&:valid {
            position: relative;
            margin-bottom: 5px;
        }`
    : null
    }
`;

export default Input;

import styled from "styled-components";
import colors from "../../styles/colors";

const InputContainer = styled.input`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "3vw"};
    border: 0.1vw solid ${colors.inputColor};
    border-radius: 0.5vw;
    background-color: ${colors.white};
    padding: 0 1vw;
    box-sizing: border-box;
    font-size: 1.2vw;
    color: ${colors.inputColor};
`;

const Input = ({ width, height, value, ...props }) => {
  return <InputContainer width={width} height={height} value={value} {...props} />;
};

export default Input;

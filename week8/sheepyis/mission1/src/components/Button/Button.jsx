import styled from "styled-components";
import colors from "../../styles/colors";

const ButtonContainer = styled.div`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "3vw"};
    margin: ${(props) => props.margin || "0"};
    border: none;
    border-radius: 0.5vw;
    background-color: ${(props) => props.disabled ? colors.buttonColor : colors.buttonColor2};
    color: ${(props) => (props.disabled ? colors.inputColor : colors.white)};
    font-size: 1.2vw;
    font-weight: bold;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")}; 
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Button = ({ width, height, margin, text, disabled, ...props }) => {
    return (
      <ButtonContainer width={width} height={height} margin={margin} disabled={disabled} {...props}>
        {text}
      </ButtonContainer>
    );
  };

export default Button;

// custom-button.jsx

import styled from "styled-components";

const StyledButton = styled.button `
    background-color: purple;
    border : none;
    padding:0;
    color: white;
    
`

const CustomButton = () => {
    return (
        <StyledButton>
            커스텀 버튼
        </StyledButton>
    );
};

export default CustomButton;


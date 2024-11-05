import styled from "styled-components";
import colors from "../../styles/colors";

const ButtonTodo = styled.button`
    width: 5rem;
    height: 3rem;
    background-color: ${colors.buttonColor};
    font-size: 0.8rem;
    border: none;
    cursor: pointer;
    font-weight: bold;
`;

const TodoButton = ({ text, onClick }) => {
    return (
        <ButtonTodo onClick={onClick}>{text}</ButtonTodo>
    );
};

export default TodoButton;

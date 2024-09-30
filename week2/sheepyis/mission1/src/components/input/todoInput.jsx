import styled from "styled-components";
import colors from "../../styles/colors";

const InputTodo = styled.input`
    width: 50%;
    height: 3rem;
    background-color: ${colors.white};
    outline: 0.1vw solid ${colors.black};
    padding: 0 1vw;
    box-sizing: border-box;
    font-size: 1rem;
    color: ${colors.inputColor};

    &::placeholder {
        font-style: italic;
    }
`;

const TodoInput = ({ placeholder, value, onChange }) => {
    return (
        <InputTodo
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default TodoInput;

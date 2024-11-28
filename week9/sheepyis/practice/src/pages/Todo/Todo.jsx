import Time from "../../components/Time";
import InputTodo from "../../components/InputTodo";
import TodoList from "../../components/TodoList";
import styled from "styled-components";
import colors from "../../styles/colors";

const TodoContainer = styled.div`
    width: 30vw;
    height: 45vw;
    background-color: ${colors.white};
    border: none;
    border-radius: 2.5vw;
`

const TodoBar = styled.div`
    width: 100%;
    height: 0.15vw;
    background-color: ${colors.timeColor};
`

const Todo = () => {
    return (
        <div className="pageContainer">
            <TodoContainer>
                <Time />
                <TodoBar />

                <InputTodo />
                
                <TodoList />
            </TodoContainer>
        </div>
    )
}

export default Todo;
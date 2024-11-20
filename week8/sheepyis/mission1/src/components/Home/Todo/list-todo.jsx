import styled from "styled-components";
import ItemTodo from "./item-todo";

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.9vw;
    margin-top: 1.15vw;
`

const ListTodo = ({ data }) => {
    // console.log(data);

    return (
        <ListContainer>
            {data.map((todo) => (
                <ItemTodo 
                    key={todo.id}
                    id={todo.id}
                    title={todo.title} 
                    content={todo.content}
                    checked={todo.checked}
                />
            ))}
        </ListContainer>
    )
}

export default ListTodo;
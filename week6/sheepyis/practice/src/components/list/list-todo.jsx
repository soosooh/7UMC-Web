import React, { useContext } from "react";
import styled from "styled-components";
import ItemTodo from "../listItem/item-todo";
import { TodoContext } from "../../context/todoContext";

const ListContainer = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin: 1.65vw 0;
`;

const ListTodo = () => {
    const { todos } = useContext(TodoContext);
    return (
        <ListContainer>
            {todos.map(todo => (
                <ItemTodo 
                    key={todo.id} 
                    todo={todo} 
                />
            ))}
        </ListContainer>
    );
};

export default ListTodo;

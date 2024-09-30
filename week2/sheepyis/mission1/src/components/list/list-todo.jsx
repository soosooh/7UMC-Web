import React from "react";
import styled from "styled-components";
import ItemTodo from "../listItem/item-todo";

const ListContainer = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin: 1.65vw 0;
`;

const ListTodo = ({ todos, onDelete, onEdit }) => {
    return (
        <ListContainer>
            {todos.map(todo => (
                <ItemTodo 
                    key={todo.id} 
                    todo={todo} 
                    onDelete={onDelete} 
                    onEdit={onEdit} 
                />
            ))}
        </ListContainer>
    );
};

export default ListTodo;

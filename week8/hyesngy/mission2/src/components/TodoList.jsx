import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import updateTodo from "../apis/todo/updateTodo";
import deleteTodo from '../apis/todo/deleteTodo';
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  //border: 1px solid dodgerblue;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 8px;
  justify-content: center;
`

const TodoList = ({ todos }) => {
    const queryClient = useQueryClient();

    const { mutate: toggleTodo } = useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
        onError: (error) => {
            alert(`Error: ${error.message}`);
        },
    });

    const { mutate: editTodo } = useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
        onError: (error) => {
            alert(`Error: ${error.message}`);
        },
    });

    const { mutate: removeTodo } = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
        onError: (error) => {
            alert(`Error: ${error.message}`);
        },
    });

    const handleToggle = (id, checked) => {
        toggleTodo({ id, checked });
    };

    const handleEdit = (id, updatedData) => {
        editTodo({ id, ...updatedData });
    };

    const handleDelete = (id) => {
        removeTodo(id);
    };

    return (
        <ListWrapper>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
        </ListWrapper>
    );
};

export default TodoList;

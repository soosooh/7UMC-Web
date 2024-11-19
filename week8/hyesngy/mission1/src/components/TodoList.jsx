import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import updateTodo from "../apis/todo/updateTodo";
import deleteTodo from '../apis/todo/deleteTodo';

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

const TodoList = ({ todos, setTodos }) => {
    const handleToggle = async (id, checked) => {
        try {
            await updateTodo(id, { checked });
            const updatedTodos = todos.map((todo) =>
                todo.id === id ? { ...todo, checked } : todo
            );
            setTodos(updatedTodos);
        } catch (error) {
            console.log("🚀 ~ handleToggle ~ error:", error)
        }
    };

    const handleEdit = async (id, updatedData) => {
        try {
            await updateTodo(id, updatedData);
            const updatedTodos = todos.map((todo) =>
                todo.id === id ? { ...todo, ...updatedData } : todo
            );
            setTodos(updatedTodos);
        } catch (error) {
            console.error("🚀 ~ handleEdit ~ error:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteTodo(id);
            const updatedTodos = todos.filter((todo) => todo.id !== id);
            setTodos(updatedTodos);
        } catch (error) {
            console.error("🚀 ~ handleDelete ~ error:", error);
        }
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

import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListWrapper = styled.div`
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%; 
  height: auto; 
`;


const TodoListContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 90%;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #f0f0f0;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", content: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.title.trim() === "" || newTodo.content.trim() === "") {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    const newTodoItem = {
      id: todos.length + 1,
      title: newTodo.title,
      content: newTodo.content,
      checked: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo({ title: "", content: "" });
  };

  const handleUpdate = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoListWrapper>
      <TodoListContainer>
        <Title>⚡ UMC ToDoList ⚡</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            name="title"
            placeholder="제목을 입력해주세요"
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          />
          <Input
            name="content"
            placeholder="내용을 입력해주세요"
            value={newTodo.content}
            onChange={(e) => setNewTodo({ ...newTodo, content: e.target.value })}
          />
          <Button type="submit">ToDo 생성</Button>
        </Form>
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>등록된 Todo가 없습니다.</p>
        )}
      </TodoListContainer>
    </TodoListWrapper>
  );
};

export default TodoList;

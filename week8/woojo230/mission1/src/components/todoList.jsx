import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import TodoItem from './todoItem';

const Container = styled.div`
  height: 100vh;
  padding: 2rem;
  background-color: #e3f2fd;
`;

const Header = styled.h2`
  margin-bottom: 5rem;
  text-align: center;
  color: #333;
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 60%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 10px;
  width: 100%;
`;

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', content: '' });
  const { data } = useFetch('http://localhost:3000/todo');

  useEffect(() => {
    if (data && Array.isArray(data)) {
      // 데이터 유효성 검사 추가
      setTodos(data[0] || []);
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleAddTodo = async () => {
    if (!newTodo.title.trim() || !newTodo.content.trim()) return;
    const response = await fetch('http://localhost:3000/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    });
    const addedTodo = await response.json();
    setTodos([...todos, addedTodo]);
    setNewTodo({ title: '', content: '' });
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/todo/${id}`, { method: 'DELETE' });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = async (id) => {
    const todoToToggle = todos.find((todo) => todo.id === id);
    await fetch(`http://localhost:3000/todo/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ checked: !todoToToggle.checked }),
    });
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleEdit = async (id, updatedTodo) => {
    await fetch(`http://localhost:3000/todo/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo),
    });
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  return (
    <Container>
      <Header>⚡ UMC ToDoList ⚡</Header>
      <Form>
        <Input
          type="text"
          name="title"
          placeholder="제목을 입력해주세요"
          value={newTodo.title}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="content"
          placeholder="내용을 입력해주세요"
          value={newTodo.content}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
        />
      </Form>
      <TodoListContainer>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onToggle={handleToggle}
            onEdit={handleEdit}
          />
        ))}
      </TodoListContainer>
    </Container>
  );
}

export default TodoList;

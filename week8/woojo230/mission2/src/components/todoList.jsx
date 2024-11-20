import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTodos, useCreateTodo } from '../hooks/useTodoApi'; // useQuery 및 useMutation 훅
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

const Button = styled.button`
  width: 60%;
  padding: 0.8rem 1.5rem;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
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
  const { data, isLoading, error } = useTodos();
  const createTodoMutation = useCreateTodo();

  // 데이터가 변경될 때 평탄화 작업 수행
  useEffect(() => {
    if (data && Array.isArray(data)) {
      // 데이터 구조를 평탄화
      const flattenedTodos = Array.isArray(data[0]) ? data[0] : data;
      setTodos(flattenedTodos || []);
    }
  }, [data]);

  // event handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  // add event handler
  const handleAddTodo = () => {
    if (!newTodo.title.trim() || !newTodo.content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    createTodoMutation.mutate(newTodo, {
      onSuccess: (addedTodo) => {
        setTodos([...todos, addedTodo]);
        setNewTodo({ title: '', content: '' });
      },
    });
  };

  // loading & error handler
  if (isLoading) return <Container>Loading...</Container>;
  if (error) return <Container>오류가 발생했습니다: {error.message}</Container>;

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
        />
        <Button onClick={handleAddTodo}>추가</Button>
      </Form>
      <TodoListContainer>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </TodoListContainer>
    </Container>
  );
}

export default TodoList;

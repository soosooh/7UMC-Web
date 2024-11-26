import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, complete } from './redux/todoSlice';
import styled from 'styled-components';

const Container = styled.div`
  width: 360px;
  height: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DateTime = styled.div`
  font-size: 0.9rem;
  color: #555;
`;

const DayWeek = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 15px;
`;

const InputSection = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding-bottom: 10px;
`;

const Line = styled.div`
  border-top: 3px solid #ddd;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #ffffff;
  outline: none;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 10px;

  &:focus {
    border: 2px solid #007bff;
  }
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  span {
    flex: 1;
    margin: 0 10px;
    font-size: 1rem;
    cursor: pointer;
    color: ${(props) => (props.complete ? '#aaa' : '#333')};
    text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
  }
`;

const DeleteButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  font-size: 1rem;
  border: 0;
  &:hover {
    color: #d63447;
  }
`;

const CircleButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.complete ? '#007bff' : '#ddd')};
  border: none;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.complete ? '#0056b3' : '#bbb')};
  }
`;

export default function App() {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(add(input));
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <Container>
      <Header>
        <div>2024년 11월 27일</div>
        <DateTime>02:47:30</DateTime>
      </Header>
      <DayWeek>화요일</DayWeek>
      <Line />
      <InputSection>
        <Input
          type="text"
          placeholder="할 일을 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <AddButton onClick={handleAdd}>+</AddButton>
      </InputSection>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} complete={todo.complete}>
            <CircleButton
              complete={todo.complete}
              onClick={() => dispatch(complete(todo.id))}
            />
            <span>{todo.text}</span>
            <DeleteButton onClick={() => dispatch(remove(todo.id))}>
              삭제
            </DeleteButton>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
}

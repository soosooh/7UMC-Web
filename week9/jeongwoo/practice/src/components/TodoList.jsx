import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { remove, complete } from '../redux/todoSlice';
import { Trash2 } from 'lucide-react';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const Checkbox = styled.input`
  margin-right: 12px;
  width: 20px;
  height: 20px;
`;

const TodoText = styled.span`
  flex: 1;
  font-size: 16px;
  text-decoration: ${props => props.complete ? 'line-through' : 'none'};
  color: ${props => props.complete ? '#999' : '#333'};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    color: #ff4444;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const TodoList = () => {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();

  return (
    <List>
      {todos.map(todo => (
        <TodoItem key={todo.id}>
          <Checkbox
            type="checkbox"
            checked={todo.complete}
            onChange={() => dispatch(complete(todo.id))}
          />
          <TodoText complete={todo.complete}>{todo.text}</TodoText>
          <DeleteButton onClick={() => dispatch(remove(todo.id))}>
            <Trash2 />
          </DeleteButton>
        </TodoItem>
      ))}
    </List>
  );
};

export default TodoList;
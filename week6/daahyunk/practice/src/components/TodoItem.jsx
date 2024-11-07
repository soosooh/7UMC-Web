import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import { useTodoContext } from '../context/TodoContext';

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0rem;
  border-radius: 0.3125rem; 
`;

const EditInput = styled.input`
  flex-grow: 1;
  margin-right: 0.625rem; 
  padding: 0.3125rem;
  border: 0.0625rem solid #ccc; 
  border-radius: 0.25rem;
`;

const TodoText = styled.span`
  flex-grow: 1;
  margin-right: 0.625rem; 
  font-size: 1rem;
`;

const TodoItem = ({ todo }) => {
  const { editingId, editText, setEditText, deleteTodo, editTodo, updateTodo } = useTodoContext();

  return (
    <TodoItemContainer>
      {editingId === todo.id ? (
        <>
          <EditInput
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <Button onClick={updateTodo}>수정 완료</Button>
        </>
      ) : (
        <>
          <TodoText>{todo.task}</TodoText>
          <Button onClick={() => editTodo(todo.id, todo.task)}>수정하기</Button>
        </>
      )}
      <Button onClick={() => deleteTodo(todo.id)}>삭제하기</Button>
    </TodoItemContainer>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;

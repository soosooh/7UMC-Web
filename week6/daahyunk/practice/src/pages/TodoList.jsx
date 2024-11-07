import styled from 'styled-components';
import { useTodoContext } from '../context/TodoContext';
import TodoItem from '../components/TodoItem';
import Input from '../components/Input';
import Button from '../components/Button';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 10rem; 
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  margin: 0 auto;
  padding: 1.25rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 1.25rem;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1.25rem;
`;

const StyledButton = styled(Button)`
  margin-left: 0.625rem; 
`;

const TodoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.625rem;
`;

const TodoList = () => {
  const { todos, text, setText, addTodo } = useTodoContext();

  return (
    <PageContainer>
      <TodoListContainer>
        <Title>📓♫₊Todo List˚.🎧 ✩</Title>
        <InputContainer>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onSubmit={(e) => {
              e.preventDefault();
              addTodo();
            }}
            placeholder="할 일을 입력하세요"
          />
          <StyledButton onClick={addTodo}>할 일 등록</StyledButton>
        </InputContainer>
        <TodoItemsContainer>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </TodoItemsContainer>
      </TodoListContainer>
    </PageContainer>
  );
};

export default TodoList;

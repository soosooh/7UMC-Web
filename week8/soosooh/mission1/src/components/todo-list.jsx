import styled from "styled-components";
import TodoItem from "./todo-item";
const TodoListContainer = styled.div`
  margin-top: 20px;
  width: 600px;
  background-color: #e1e7f5;

  @media (max-width: 768px) {
    width: 400px;
    height: 40px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 30px;
    font-size: 10px;
  }
`;

const TodoList = ({ todos, onDelete }) => {
  return (
    <TodoListContainer>
      {todos
        .filter((todo) => todo && todo.id) // 유효한 todo만 렌더링
        .map((todo, index) => (
          <TodoItem
            key={todo.id || index}
            id={todo.id}
            title={todo.title}
            content={todo.content}
            onDelete={onDelete}
          />
        ))}
    </TodoListContainer>
  );
};

export default TodoList;

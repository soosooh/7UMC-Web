import InputTodo from "../../components/Input/InputTodo";
import TodoList from "../../components/List/TodoList";
import Time from "../../components/Time/Time";
import s from "./TodoPage.module.css";
const TodoPage = () => {
  return (
    <div className={s.todoPage}>
      <Time />
      <InputTodo />
      <TodoList />
    </div>
  );
};

export default TodoPage;

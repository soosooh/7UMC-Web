import Input from "./components/Input";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import "./App.css";
import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";

const App = () => {
  const {
    todos, text, setText, editingId, setEditingId, editText, setEditText,
    handleSubmit, addTodo, deleteTodo, updateTodo
  } = useContext(TodoContext);

  return (
    <>
      <div className="container">
        <div className="addTodoDiv">
          <form onSubmit={handleSubmit}>
            <Input value={text} onChange={(e) => setText(e.target.value)} inputType="add" />
            <Button onClick={() => addTodo()} text="할 일 등록" type="submit" />
          </form>
        </div>
        <TodoList
          todos={todos}
          editingId={editingId}
          setEditText={setEditText}
          setEditingId={setEditingId}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          editText={editText}
        />
      </div>
    </>
  );
};


export default App;

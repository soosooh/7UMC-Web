// App.jsx
import { useContext } from "react";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";
import { TodoProvider, TodoContext } from "./todoContext";

function App() {
  const { todos, text, setText, editingId, editText, setEditText, addTodo, deleteTodo, updateTodo, handleEditClick } = useContext(TodoContext);

  return (
    <TodoProvider>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={addTodo}>할 일 등록</Button>
      </form>
      <div className="lists">
        {todos.map(({ id, task }) => (
          <div className="list" key={id} style={{ display: "flex", gap: "10px" }}>
            <div className="list__text">
              {editingId !== id && (
                <h4 style={{ display: "flex", gap: "5px" }}>
                  <p>{task}</p>
                </h4>
              )}
              {editingId === id && (
                <h4 style={{ display: "flex", gap: "5px" }}>
                  <Input defaultValue={task} onChange={(e) => setEditText(e.target.value)} />
                </h4>
              )}
            </div>
            <div className="list__button">
              <Button onClick={() => deleteTodo(id)}>삭제하기</Button>
              {editingId === id ? (
                <Button onClick={() => updateTodo(editingId, editText)}>수정완료</Button>
              ) : (
                <Button onClick={() => handleEditClick(id, task)}>수정진행</Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </TodoProvider>
  );
}

export default App;

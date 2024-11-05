import "./App.css";

import Button from "./components/button/Button";
import Input from "./components/input/Input";
import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";

function App() {
  const {
    todos,
    text,
    setText,
    editingId,
    setEditingId,
    editText,
    setEditText,
    handleSubmit,
    addTodo,
    deleteTodo,
    updateTodo,
  } = useContext(TodoContext);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <Button onClick={addTodo} type="submit">
          할 일 등록
        </Button>
      </form>
      <div className="textContainer">
        {todos.map((todo) => (
          <div style={{ display: "flex", gap: "20px" }}>
            {/* 수정이 아닐 때*/}
            {editingId !== todo.id && (
              <div key={todo.id} style={{ display: "flex", gap: "10px" }}>
                {/* <p>{todo.id}</p> */}
                <p>{todo.task}</p>
              </div>
            )}
            {/* 수정중 상태일 때 */}
            {editingId === todo.id && (
              <div key={todo.id} style={{ display: "flex", gap: "10px" }}>
                {/* <p>{todo.id}.</p> */}
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <Button onClick={() => deleteTodo(todo.id)}>삭제하기</Button>

            {/* editingId !== todo.id 수정이 아닌 상태*/}
            {/*editingId !== todo.id 수정 중인 상태 */}
            {editingId === todo.id ? (
              <Button onClick={() => updateTodo(editingId, editText)}>
                수정완료
              </Button>
            ) : (
              <Button onClick={() => setEditingId(todo.id)}>수정 진행</Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;

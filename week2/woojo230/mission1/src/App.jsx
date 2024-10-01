import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "todo만들어보기" },
    { id: 2, task: "안녕하세요" },
  ]);

  const [text, setText] = useState("");

  const [EditingId, setEditingId] = useState("");

  const [editText, setEditText] = useState("");

  //랜더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //추가하기 기능 구현
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText("");
  };

  //삭제하기 기능 구현
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  //수정하기
  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: newText } : item))
    );
    setEditingId("");
  };

  const handleEditClick = (id, task) => {
    setEditingId(id);
    setEditText(task); // 해당 task 값을 editText에 설정
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        /> */}
        {/* <button onClick={() => addTodo()}>할 일 등록</button> */}
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={() => addTodo()}>할 일 등록</Button>
      </form>
      <div className="lists">
        {todos.map(({ id, task }, _) => (
          <div className="list" style={{ display: "flex", gap: "10px" }}>
            <div className="list__text">
              {/* 수정중 X */}
              {EditingId !== id && (
                <h4 key={id} style={{ display: "flex", gap: "5px" }}>
                  {/* <p>{id}. </p> */}
                  <p>{task}</p>
                </h4>
              )}
              {/* 수정중 O */}
              {EditingId === id && (
                <h4 key={id} style={{ display: "flex", gap: "5px" }}>
                  {/* <p>{id}. </p> */}
                  {/* <input
                  defaultValue={task}
                  onChange={(e) =>
                     setEditText(e.target.value)}
                /> */}
                  <Input
                    defaultValue={task}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </h4>
              )}
              {/* <button onClick={() => deleteTodo(id)}>삭제하기</button> */}
            </div>
            <div className="list__button">
              {" "}
              <Button onClick={() => deleteTodo(id)}>삭제하기</Button>
              {EditingId === id ? (
                // <button onClick={() => updateTodo(EditingId, editText)}>
                //   수정완료
                // </button>
                <Button onClick={() => updateTodo(EditingId, editText)}>
                  수정완료
                </Button>
              ) : (
                // <button onClick={() => setEditingId(id)}>수정진행</button>
                <Button onClick={() => setEditingId(id)}>수정진행</Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

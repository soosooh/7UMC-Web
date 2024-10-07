import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(false);
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 추가
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('할 일을 입력해주세요!');
      return;
    }

    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text }
    ]);
    setText('');
  };

  // 삭제
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 수정
  const updateTodo = (id, text) => {
    if (text.trim().length === 0) {
      alert('텍스트를 입력해주세요!');
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
    setEditText('');
  };

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

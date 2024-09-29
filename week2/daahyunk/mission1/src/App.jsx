import { useState } from 'react';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '할 일 1' },
    { id: 2, task: '할 일 2' },
  ]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // 할 일 추가하기
  const addTodo = () => {
    if (text.trim() === '') return;
    setTodos([...todos, { id: Math.floor(Math.random() * 100) + 1, task: text }]);
    setText('');
  };

  // 할 일 삭제하기
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 수정 버튼 클릭 시 input 창으로 바꾸기
  const editTodo = (id, task) => {
    setEditingId(id);
    setEditText(task);
  };

  // 수정 완료 시
  const updateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editingId ? { ...todo, task: editText } : todo
      )
    );
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="app">
      <h1 className="title">Todo List</h1>
      <div className="input-container">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onSubmit={addTodo}
          placeholder="할 일을 입력하세요"
        />
        <Button onClick={addTodo}>할 일 등록</Button>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => editTodo(todo.id, todo.task)}
            isEditing={editingId === todo.id}
            editText={editText}
            onEditChange={(e) => setEditText(e.target.value)}
            onUpdate={updateTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, task: '이렇게' },
    { id: 2, task: '할 일을 추가해보세요' },
  ]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // 할 일 추가하기
  const addTodo = () => {
    if (!text.trim()) return; 
    setTodos([...todos, { id: Date.now(), task: text }]);
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
    <TodoContext.Provider
      value={{
        todos,
        text,
        setText,
        editingId,
        editText,
        setEditText,
        addTodo,
        deleteTodo,
        editTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTodoContext = () => useContext(TodoContext);

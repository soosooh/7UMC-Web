import React, { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editContent, setEditContent] = useState(todo.content);

  const navigate = useNavigate();

  // 완료 상태 토글 핸들러
  const handleCheck = async () => {
    try {
      await updateTodo(todo.id, { checked: !todo.checked });
    } catch (error) {
      console.error('Failed to toggle completion:', error.message);
    }
  };

  // 수정 저장 핸들러
  const handleSave = async () => {
    const updatedFields = {};
    if (editTitle.trim() !== todo.title) updatedFields.title = editTitle.trim();
    if (editContent.trim() !== todo.content) updatedFields.content = editContent.trim();

    if (Object.keys(updatedFields).length === 0) {
      setIsEditing(false);
      return;
    }

    try {
      await updateTodo(todo.id, updatedFields);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save todo:', error.message);
    }
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        marginBottom: '12px',
        borderRadius: '8px',
        backgroundColor: todo.checked ? '#f0fdfa' : '#fff',
        position: 'relative',
        transition: 'background-color 0.2s ease',
      }}
    >
      <button
        onClick={() => navigate(`/todo/${todo.id}`)}
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          padding: '6px 12px',
          fontSize: '12px',
          color: 'white',
          backgroundColor: '#3b82f6',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        자세히 보기
      </button>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            placeholder="내용을 입력하세요"
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <Button onClick={handleSave} text="저장" variant="primary" />
            <Button onClick={() => setIsEditing(false)} text="취소" variant="default" />
          </div>
        </>
      ) : (
        <>
          <div>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={handleCheck}
              style={{ marginRight: '8px' }}
            />
            <span
              style={{
                textDecoration: todo.checked ? 'line-through' : 'none',
                color: todo.checked ? '#9ca3af' : '#000',
              }}
            >
              {todo.title || 'Untitled Todo'}
            </span>
          </div>
          <p>{todo.content || '내용 없음'}</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            <Button onClick={() => setIsEditing(true)} text="수정" variant="primary" />
            <Button onClick={() => deleteTodo(todo.id)} text="삭제" variant="danger" />
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;

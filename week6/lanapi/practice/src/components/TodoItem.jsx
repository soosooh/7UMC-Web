import React, { useState } from 'react';
import Button from './Button';

function TodoItem({ todo, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    // 수정된 텍스트가 있고 기존 텍스트와 다른 경우에만 업데이트
    if (editText.trim() && editText !== todo.text) {
      onUpdate(todo.id, editText.trim());
    } else if (!editText.trim()) {
      setEditText(todo.text); // 빈 입력인 경우 원래 텍스트로 복원
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 기본 이벤트 방지
      handleUpdate();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      backgroundColor: 'white',
      borderRadius: '12px',
      marginBottom: '12px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    }}>
      <div style={{ flex: 1, marginRight: '16px' }}>
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            style={{
              width: '100%',
              padding: '8px 12px',
              fontSize: '16px',
              border: '2px solid #3b82f6',
              borderRadius: '6px',
              outline: 'none',
            }}
            autoFocus
            placeholder="수정할 내용을 입력하고 Enter를 누르세요"
          />
        ) : (
          <span style={{ fontSize: '16px', color: '#1f2937' }}>
            {todo.text}
          </span>
        )}
      </div>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        {isEditing ? (
          <>
            <Button
              onClick={handleUpdate}
              text="저장"
              variant="primary"
            />
            <Button
              onClick={() => {
                setEditText(todo.text);
                setIsEditing(false);
              }}
              text="취소"
              variant="danger"
            />
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                setIsEditing(true);
                setEditText(todo.text);
              }}
              text="수정"
              variant="primary"
            />
            <Button
              onClick={() => onDelete(todo.id)}
              text="삭제"
              variant="danger"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ToDoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newContent, setNewContent] = useState(todo.content);

  const handleEdit = () => {
    if (isEditing) {
      // 수정 완료 시 변경 사항 반영
      onEdit(todo.id, newTitle, newContent);
    }
    setIsEditing(!isEditing); // 수정 상태 토글
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        style={styles.checkbox}
      />
      <div style={styles.textContainer}>
        {isEditing ? (
          <>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              style={styles.editInput}
            />
            <input
              type="text"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              style={styles.editInput}
            />
          </>
        ) : (
          <>
            <Link to={`/todo/${todo.id}`} style={styles.link}>
              <p style={styles.title}>{todo.title}</p>
              <p style={styles.content}>{todo.content}</p>
            </Link>
          </>
        )}
      </div>
      <button onClick={handleEdit} style={styles.editButton}>
        {isEditing ? '수정완료' : '수정'}
      </button>
      {!isEditing && (
        <button onClick={onDelete} style={styles.deleteButton}>
          삭제
        </button>
      )}
    </div>
  );
};

const styles = {
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  checkbox: {
    marginRight: '10px',
    transform: 'scale(1.2)',
  },
  textContainer: {
    flex: 1,
    marginRight: '10px',
  },
  title: {
    margin: 0,
    fontWeight: 'bold',
    fontSize: '14px',
  },
  content: {
    margin: 0,
    fontSize: '12px',
    color: '#666',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  editInput: {
    marginBottom: '5px',
    padding: '5px',
    fontSize: '14px',
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '3px',
  },
  editButton: {
    padding: '5px 10px',
    backgroundColor: '#f5f5f5',
    color: '#000',
    border: '1px solid #ddd',
    borderRadius: '3px',
    cursor: 'pointer',
    marginRight: '5px',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#f5f5f5',
    color: '#000',
    border: '1px solid #ddd',
    borderRadius: '3px',
    cursor: 'pointer',
  },
};

export default ToDoItem;

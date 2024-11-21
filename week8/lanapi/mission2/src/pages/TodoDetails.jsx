import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TodoContext } from '../contexts/TodoContext';

const TodoDetails = () => {
  const { id } = useParams(); // Path Parameter로 id를 추출
  const navigate = useNavigate();
  const { todos, updateTodo, deleteTodo } = useContext(TodoContext); // TodoContext에서 todo 관리
  const [todo, setTodo] = useState(null); // 선택된 todo를 저장할 상태
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부
  const [editedTitle, setEditedTitle] = useState(''); // 수정할 제목
  const [editedContent, setEditedContent] = useState(''); // 수정할 내용

  useEffect(() => {
    const todoItem = todos.find((item) => item.id === parseInt(id)); // ID를 기준으로 todo 찾기
    if (todoItem) {
      setTodo(todoItem);
      setEditedTitle(todoItem.title);
      setEditedContent(todoItem.content);
    }
  }, [id, todos]); // id 또는 todos가 변경될 때마다 실행

  const handleSave = () => {
    updateTodo(todo.id, { title: editedTitle, content: editedContent }); // todo 수정
    setTodo({ ...todo, title: editedTitle, content: editedContent }); // 상태 업데이트
    setIsEditing(false); // 수정 완료 후 수정 모드 종료
  };

  const handleDelete = () => {
    deleteTodo(todo.id); // todo 삭제
    navigate('/'); // 삭제 후 홈으로 이동
  };

  if (!todo) return <p>Todo를 찾을 수 없습니다.</p>; // Todo를 못 찾은 경우

  return (
    <article style={styles.container}>
      <header style={styles.header}>⚡ UMC ToDoList ⚡</header>

      <section style={styles.statusContainer}>
        <strong style={styles.status}>{todo.checked ? '완료' : '미완료'}</strong>
        <time style={styles.date}>{new Date(todo.createdAt).toLocaleString()}</time>
      </section>

      {isEditing ? (
        <form style={styles.editContainer} onSubmit={(e) => e.preventDefault()}>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            style={styles.input}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            placeholder="내용을 입력하세요"
            style={styles.textarea}
          />
        </form>
      ) : (
        <>
          <h2 style={styles.title}>{todo.title}</h2>
          <section style={styles.contentBox}>
            <p style={styles.content}>{todo.content}</p>
          </section>
        </>
      )}

      <footer style={styles.buttonContainer}>
        {isEditing ? (
          <>
            <button style={styles.saveButton} onClick={handleSave}>
              저장
            </button>
            <button style={styles.cancelButton} onClick={() => setIsEditing(false)}>
              취소
            </button>
          </>
        ) : (
          <button style={styles.editButton} onClick={() => setIsEditing(true)}>
            수정
          </button>
        )}
        <button style={styles.deleteButton} onClick={handleDelete}>
          삭제
        </button>
      </footer>
    </article>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'lavender',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  statusContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightsteelblue',
    padding: '10px 20px',
    borderRadius: '10px',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  status: {
    fontSize: '18px',
  },
  date: {
    fontSize: '14px',
    color: 'black', // 검은색으로 변경
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0',
    color: 'darkgray',
  },
  contentBox: {
    padding: '20px',
    backgroundColor: 'white',
    border: '2px solid darkgray',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  content: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333',
  },
  editContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  editButton: {
    flex: 1,
    padding: '10px 0',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  saveButton: {
    flex: 1,
    padding: '10px 0',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  cancelButton: {
    flex: 1,
    padding: '10px 0',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#f1c40f',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  deleteButton: {
    flex: 1,
    padding: '10px 0',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: 'lightcoral',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default TodoDetails;


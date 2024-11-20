import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function TodoDetails() {
  const { id } = useParams(); // URL에서 ID 추출
  const { todos } = useContext(TodoContext);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const todoItem = todos.find((item) => item.id === parseInt(id));
    setTodo(todoItem);
  }, [id, todos]);

  if (!todo) {
    return <p>Todo를 찾을 수 없습니다.</p>;
  }

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{todo.title}</h1>
      <p>{todo.content}</p>
      <p>완료 여부: {todo.checked ? '완료' : '미완료'}</p>
      <p>생성 시간: {new Date(todo.createdAt).toLocaleString()}</p>
    </div>
  );
}

export default TodoDetails;



// import React, { useContext } from 'react';
// import { TodoContext } from '../contexts/TodoContext';
// import { useParams } from 'react-router-dom';

// function TodoDetails() {
//   const { todos } = useContext(TodoContext);
//   const { id } = useParams();
//   const todo = todos.find((todo) => todo.id === parseInt(id));

//   if (!todo) {
//     return <p>존재하지 않는 투두입니다.</p>;
//   }

//   return (
//     <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
//       <h1>{todo.title}</h1>
//       <p>{todo.description}</p>
//       <p>생성 시간: {new Date(todo.createdAt).toLocaleString()}</p>
//       <p>완료 상태: {todo.isCompleted ? '완료됨' : '진행 중'}</p>
//     </div>
//   );
// }

// export default TodoDetails;

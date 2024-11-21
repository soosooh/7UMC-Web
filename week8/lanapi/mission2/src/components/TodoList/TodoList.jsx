import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoSearch from './TodoSearch';
import TodoItem from '../TodoItem/TodoItem';
import ErrorScreen from '../animation/ErrorScreen';
import LoadingScreen from '../animation/LoadingScreen';

function TodoList() {
  const [query, setQuery] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const queryClient = useQueryClient();

  // GET 요청: Todo 데이터 가져오기
  const { data: todos = [], isLoading, isError } = useQuery({
    queryKey: ['todos', query],
    queryFn: async () => {
      const response = await axios.get('/api/todos', {
        params: { title: query || '' }, // 검색어를 query parameter로 전달
      });
      return response.data;
    },
    refetchOnWindowFocus: false, // 포커스 시 리패치 방지
  });

  // POST 요청: Todo 생성
  const addTodoMutation = useMutation(
    async (newTodo) => {
      const response = await axios.post('/api/todos', newTodo);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos']); // 데이터 리패치
      },
    }
  );

  // DELETE 요청: Todo 삭제
  const deleteTodoMutation = useMutation(
    async (id) => {
      await axios.delete(`/api/todos/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos']); // 데이터 리패치
      },
    }
  );

  // PATCH 요청: Todo 업데이트
  const updateTodoMutation = useMutation(
    async ({ id, updatedData }) => {
      const response = await axios.patch(`/api/todos/${id}`, updatedData);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos']); // 데이터 리패치
      },
    }
  );

  const handleAddTodo = ({ title, content }) => {
    const newTodo = {
      title: title.trim(),
      content: content.trim(),
      checked: false,
    };
    addTodoMutation.mutate(newTodo); // Todo 추가 요청
  };

  const handleDeleteTodo = (id) => {
    deleteTodoMutation.mutate(id); // Todo 삭제 요청
  };

  const handleUpdateTodo = (id, updatedData) => {
    updateTodoMutation.mutate({ id, updatedData }); // Todo 업데이트 요청
  };

  if (isLoading) return <LoadingScreen />; // 로딩 애니메이션 표시
  if (isError || isErrorVisible) {
    setTimeout(() => setIsErrorVisible(false), 3000);
    return <ErrorScreen />; // 에러 애니메이션 표시
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '24px',
        }}
      >
        Todo List
      </h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoSearch query={query} onSearchChange={setQuery} />
      {todos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#9ca3af' }}>
          검색된 Todo가 없습니다.
        </p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => handleDeleteTodo(todo.id)}
            onUpdate={(updatedData) => handleUpdateTodo(todo.id, updatedData)}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;

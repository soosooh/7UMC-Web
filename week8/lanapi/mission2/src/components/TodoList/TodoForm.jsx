import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function TodoForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  // useMutation을 사용해 POST 요청 처리
  const addTodoMutation = useMutation(
    async (newTodo) => {
      const response = await axios.post('/api/todos', newTodo);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos']); // Todo 목록 리패치
        setTitle('');
        setContent(''); // 입력 필드 초기화
      },
      onError: (error) => {
        alert(`에러가 발생했습니다: ${error.message}`);
      },
    }
  );

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 입력하세요.');
      return;
    }

    const newTodo = {
      title: title.trim(),
      content: content.trim(),
      checked: false, // 기본 값
    };

    addTodoMutation.mutate(newTodo); // Todo 생성 요청
  };

  return (
    <div style={{ marginBottom: '32px' }}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
        style={{ width: '100%', marginBottom: '8px' }}
      />
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
        style={{ width: '100%', marginBottom: '16px' }}
      />
      <Button
        onClick={handleSubmit}
        text={addTodoMutation.isLoading ? '생성 중...' : 'TODO 생성'}
        variant={title.trim() && content.trim() ? 'primary' : 'default'}
        style={{ width: '100%' }}
        disabled={addTodoMutation.isLoading} // 로딩 중 버튼 비활성화
      />
    </div>
  );
}

export default TodoForm;

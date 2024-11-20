import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 입력하세요.');
      return;
    }
    onAddTodo({ title, content });
    setTitle('');
    setContent('');
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
        text="TODO 생성"
        variant={title.trim() && content.trim() ? 'primary' : 'default'}
        style={{ width: '100%' }}
      />
    </div>
  );
}

export default TodoForm;

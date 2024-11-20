import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

function TodoSearch({ query, onSearchChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
      {/* 검색 입력창 */}
      <Input
        value={query}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="검색어를 입력하세요"
        style={{
          flex: 1, // 입력창이 가능한 최대 너비 사용
        }}
      />

      <Button
        text="검색"
        onClick={() => onSearchChange(query.trim())} 
        variant={query.trim() ? 'primary' : 'default'}
        style={{
          height: '48px',
          padding: '0 40px', 
          fontSize: '16px', 
          borderRadius: '8px', 
          width: 'auto',
          whiteSpace: 'nowrap',
        }}
      />
    </div>
  );
}

export default TodoSearch;


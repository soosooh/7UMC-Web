import React from 'react';

function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: '100%',
        height: '48px', 
        padding: '12px 16px', 
        fontSize: '16px',
        border: '2px solid #e1e1e1',
        borderRadius: '8px',
        outline: 'none',
        boxSizing: 'border-box', 
        transition: 'border-color 0.2s ease',
      }}
      onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
      onBlur={(e) => (e.target.style.borderColor = '#e1e1e1')}
    />
  );
}

export default Input;

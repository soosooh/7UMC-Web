// src/components/Button.jsx
import React from 'react';

function Button({ onClick, text, variant }) {
  const backgroundColor = variant === 'primary' ? '#3b82f6' : '#dc3545';
  const hoverColor = variant === 'primary' ? '#2563eb' : '#c82333';

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        fontSize: '16px',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = hoverColor)}
      onMouseOut={(e) => (e.target.style.backgroundColor = backgroundColor)}
    >
      {text}
    </button>
  );
}

export default Button;

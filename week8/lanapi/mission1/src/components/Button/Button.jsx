import React from 'react';

function Button({ onClick, text, variant = 'default', disabled, style }) {
  const colors = {
    primary: { background: '#3b82f6', hover: '#2563eb' },
    danger: { background: '#ef4444', hover: '#dc2626' },
    default: { background: '#e5e7eb', hover: '#d1d5db' },
  };

  const currentColor = colors[variant] || colors.default;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...style,
        backgroundColor: currentColor.background,
        color: variant === 'default' ? '#9ca3af' : 'white',
        border: 'none',
        padding: '12px 16px',
        fontSize: '16px',
        borderRadius: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'background-color 0.2s ease',
      }}
      onMouseOver={(e) => {
        if (!disabled) e.target.style.backgroundColor = currentColor.hover;
      }}
      onMouseOut={(e) => {
        if (!disabled) e.target.style.backgroundColor = currentColor.background;
      }}
    >
      {text}
    </button>
  );
}


export default Button;
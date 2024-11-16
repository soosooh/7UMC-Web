import React from 'react';

const Button = ({ onClick, label }) => {
    return (
        <button
            onClick={onClick}
            className="todo-button"
            style={{
                border: 'none',
                backgroundColor: '#B5D2ED',
                padding: '6px 12px',
                marginLeft: '10px',
                cursor: 'pointer',
                fontSize: '16px',
                borderRadius: '4px',
                transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#A5C2E5'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#B5D2ED'}
        >
            {label}
        </button>
    );
};

export default Button;

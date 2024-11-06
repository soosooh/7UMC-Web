import React from 'react';
import globalStyles from '../styles/Global';

const Button = ({ text, onClick, isApply }) => {
  const buttonStyle = isApply
    ? { ...globalStyles.Button, ...globalStyles.applyButton }
    : globalStyles.Button;

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

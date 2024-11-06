import React from 'react';
import globalStyles from '../styles/Global';

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      style={globalStyles.Input}
      placeholder={placeholder}
    />
  );
};

export default Input;

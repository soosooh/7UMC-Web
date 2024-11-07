import React from 'react';
import '../styles/Input.css';

const Input = ({ value, onChange, placeholder }) => (
  <input
    className="input"
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;
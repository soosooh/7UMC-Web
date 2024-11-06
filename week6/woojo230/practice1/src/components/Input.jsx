// Input.jsx
import React from "react";

function Input({ value, defaultValue, onChange }) {
  return (
    <input
      value={value} // value를 props로 받아서 설정
      defaultValue={defaultValue}
      onChange={onChange} // onChange를 props로 받아서 설정
    />
  );
}

export default Input;

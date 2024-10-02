import React, { useState } from 'react';
import Button from '../Button/Button';

const InputTodo = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') {
            alert('할 일을 입력해주세요!');
            return;
        }
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '30px 0 25px',
                width: '50%',
                border: '2px solid #000000',
            }}
        >
            <input
                type="text"
                style={{
                    width: '100%',
                    padding: '6px',
                    fontSize: '24px',
                    border: '1px solid #B5D2ED',
                    borderRadius: '4px',
                    marginRight: '10px',
                }}
                placeholder="스터디 계획을 작성해보세요!"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button label="추가" />
        </form>
    );
};

export default InputTodo;

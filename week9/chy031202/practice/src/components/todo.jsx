import { useState } from 'react'
import React from 'react'
import TodoList from './TodoList'
import InputTodo from './InputTodo'
import styled from "styled-components";
import DateTimeDisplay from './time';

function Todo() {
    const [count, setCount] = useState(0)

    return (
        <Wrapp>
        <DateTimeDisplay/>
        <Divider />
        <InputTodo />

        <TodoList />
        </Wrapp>
    )
}

const Wrapp = styled.main`
background:white;
width:30vw;
min-width:380px;
min-height:510px;
height:40vw;
display:flex;
flex-direction:column;
justify-content: center;
border-radius: 50px;
align-items: center;

`

const Divider = styled.hr`
    border: none;
    background-color: #E7E8F4;
    height: 2px;
    width: 100%;
`;

export default Todo

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/todoSlice";
import s from '../styles/TodoList.module.css'
import styled from "styled-components";

export default function InputTodo() {
    const dispatch = useDispatch()

    const [todolist, setTodolist] = useState(
    {
        id : 0,
        text : "",
    }
    )

    function handleText(e) {
        setTodolist({text : e.target.value})
    }

    function onReset () {
        setTodolist({text : ""})
    }
    
        
    return (
        <Wrapp>
        <form onSubmit={(e) => {
            e.preventDefault()
            if(todolist.text !== ""){dispatch(add(todolist.text))}
            else(alert("할 일을 입력해주세요!"))
            onReset()
            }}>
                <div>
                <input className={s.textbar} type="text"  
                value = {todolist.text} onChange={handleText}></input>
                <input className={s.submitbutton} type="submit" value="+"></input>
                </div>
            </form>
        </Wrapp>

        )
    }


const Wrapp = styled.main`
width:100%;
margin-top:25px;
height:100%;
height:30px;
`
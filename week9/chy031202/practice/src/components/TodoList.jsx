import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import s from '../styles/TodoList.module.css'
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

export default function TodoList() {
    const todolist = useSelector(state => state.todo)
    const dispatch = useDispatch()

    console.log(todolist)

    const todolistView = todolist.map((todo, idx) => (
        
    <li className={s.list}key={todolist[idx].id}>
        <Checkbox className={s.checkbox} type="checkbox" 
        onChange={()=> dispatch(complete(todolist[idx].id))}/>
        <Title className={s.todolist}>{todo.complete === false ? <>{todo.text}</> : <del>{todo.text}</del>}</Title>
        <Button className={s.deleteBtn} type="button" onClick={() => dispatch(remove(todolist[idx].id))}>
            <FaTrashAlt /> 
        </Button>
    </li> 
    )
    )


    return (
        <Wrapp>
        <Ul>{todolistView}</Ul>   
        </Wrapp>
    )
    }

const Wrapp = styled.main`
width:100%;
height:100%;
display:flex;
box-sizing: border-box;
margin-top:20px;
`

const Ul = styled.ul`
min-width:80%;
margin:0
`

const Button = styled.button`
background-color: transparent;
color: white;
border-color:gray;
border-style:solid;
    cursor: pointer;
border-radius:50px;
width:30px;
height:30px;
&:hover{
background-color: red;
}

`

const Title = styled.div`
width:100%;
position: relative;
text-align: left;
margin-left: 10px; 
`

const Checkbox = styled.input`
appearance: none;
width:37px;
height:30px;

    cursor: pointer;
border-radius:50px;
border: 3px solid gray;
&:checked {
background: #00B7FF;
}
`
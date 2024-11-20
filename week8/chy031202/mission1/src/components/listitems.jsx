import styled from "styled-components";
import React from 'react';
import { useNavigate } from "react-router-dom";


const ListItem = ({ id, title, content, checked , deleteTodo , updateTodo, toggleChecked}) => {
    const navigate = useNavigate();

    const handleTitleClick = () => {
        navigate(`/todo/${id}`); // 해당 id의 상세 페이지로 이동
    };

    
    return (
        <TodoItem>
            <Checkbox 
            type="checkbox"
            checked={checked}
            onChange={() => toggleChecked(id)}
            />
            <div>
                <Input value={title} onClick={handleTitleClick} style={{ cursor: "pointer" }} />
                <Input value={content}/>
            </div>
            <ButtonWrapp>
            <Button onClick={()=>updateTodo(id)}>   수정</Button>
            <Button onClick={()=>deleteTodo(id)}>   삭제</Button>
            </ButtonWrapp>
            
        </TodoItem>
        );
};

const Input = styled.input`
border:none;
width:100%;

`

const ButtonWrapp = styled.div`
display:flex;
display-direction:row;
margin-left: auto;
`

const Button = styled.button`
margin-right:10px;
width: 120px;
height: 50px;
background: #EDEDED;
border-radius: 10px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;

display: flex;
align-items: center;
text-align: center;

color: #000000;


`

const Checkbox = styled.input`
margin-right: 10px;
width: 20px;
height: 20px;
`;


const TodoItem = styled.div`

display:flex;
flex-direction:row;

box-sizing: border-box;
justify-content:center;
align-items:center;

width: 704px;
height: 90px;
background: #FFFFFF;
border: 2px solid #A19D9D;
border-radius: 10px;

margin-bottom: 10px;

p {
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;

color: #A19D9D;
}`; 


export default ListItem;
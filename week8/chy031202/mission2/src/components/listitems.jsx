import styled from "styled-components";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ListItem = ({ id, title, content, checked , deleteTodo , updateTodo, toggleChecked}) => {
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태
    const [editedTitle, setEditedTitle] = useState(title); // 제목 상태
    const [editedContent, setEditedContent] = useState(content); // 내용 상태

    const handleTitleClick = () => {
        navigate(`/todo/${id}`); // 해당 id의 상세 페이지로 이동
    };

    const handleEditToggle = () => {
        if (isEditing) {
            // 저장 버튼 클릭 시 수정 완료 처리
            updateTodo(id, { title: editedTitle, content: editedContent, checked });
        }
        setIsEditing(!isEditing); // 수정 모드 토글
    };

    return (
        <TodoItem>
            <Checkbox 
            type="checkbox"
            checked={checked}
            disabled={!isEditing}
            onChange={() => isEditing && toggleChecked(id)} //수정모드일때만
            />
            <div>
                {isEditing ? (
                    <>
                        {/* 수정 가능한 입력 필드 */}
                        <Input 
                            value={editedTitle} 
                            onChange={(e) => setEditedTitle(e.target.value)} 
                            placeholder="제목을 입력하세요"
                        />
                        <Input 
                            value={editedContent} 
                            onChange={(e) => setEditedContent(e.target.value)} 
                            placeholder="내용을 입력하세요"
                        />
                    </>
                ) : (
                    <>
                        {/* 읽기 전용 필드 */}
                        <Input 
                            value={title} 
                            onClick={handleTitleClick} 
                            style={{ cursor: "pointer" }} 
                            readOnly 
                        />
                        <Input 
                            value={content} 
                            readOnly 
                        />
                    </>
                )}
            </div>
            <ButtonWrapp>
            <Button onClick={handleEditToggle}>
                    {isEditing ? "저장" : "수정"}
                </Button>
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
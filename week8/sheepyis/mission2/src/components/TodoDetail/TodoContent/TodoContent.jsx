import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../../Input/Input";

const TodoContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.95vw;
    margin: 0.75vw 0 1.85vw 0;
`;

const TodoContent = ({ data, editMode, onUpdate }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (data) {
            setTitle(data.title || "");
            setContent(data.content || "");
        }
    }, [data]);

    const handleTitleChange = (e) => {
        if (editMode) {
            const value = e.target.value;
            setTitle(value);
            onUpdate("title", value);
        }
    };

    const handleContentChange = (e) => {
        if (editMode) {
            const value = e.target.value;
            setContent(value);
            onUpdate("content", value);
        }
    };

    return (
        <TodoContentContainer>
            <Input value={title} onChange={handleTitleChange} disabled={!editMode} />
            <Input as="textarea" height="25vw" value={content} onChange={handleContentChange} disabled={!editMode} style={{padding: "1vw", outline: "none", resize: "none"}} />
        </TodoContentContainer>
    );
};

export default TodoContent;

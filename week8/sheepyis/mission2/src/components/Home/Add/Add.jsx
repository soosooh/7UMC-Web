import { useState } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { postTodo } from "../../../api/todo";
import { queryClient } from "../../../main";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
`

const Add = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const { mutate: postTodoMutation } = useMutation({
        mutationFn: postTodo,
        onSuccess: (data) => {
            console.log(data);
            queryClient.invalidateQueries({
                queryKey: ["todos"],
            })
        },
        onError: (error) => {
            console.log(error);
        },
        onSettled: () => {
            console.log("항상 실행됨");
        }
    });

    // console.log(data[0].map((todo) => console.log(todo)));

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(title, content);
        postTodoMutation({ title, content });
        // window.location.reload()
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputContainer>
                <Input name="title" placeholder="제목을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} />
                <Input name="content" placeholder="내용을 입력해주세요." value={content} onChange={(e) => setContent(e.target.value)} />
            </InputContainer>
    
            <Button type="submit" text="ToDo 생성" margin="1.85vw 0" disabled={!title.trim() || !content.trim()}/>
        </form>
    )
}

export default Add;
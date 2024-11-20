import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getTodoItem, patchTodo, deleteTodo } from "../../api/todo";
import Done from "../../components/TodoDetail/Done/Done";
import Time from "../../components/TodoDetail/Time/Time";
import TodoContent from "../../components/TodoDetail/TodoContent/TodoContent";
import Button from "../../components/Button/Button";

const TopContainer = styled.div`
    display: flex;
    gap: 1vw;
    align-items: center;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const TodoDetail = () => {
    const { id } = useParams();
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();
    
    const { data: todo } = useQuery({
        queryFn: () => getTodoItem({ id }),
        queryKey: ["todo", id],
    });

    const { mutate: patchTodoMutation } = useMutation({
        mutationFn: patchTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["todo"],
            });
        },
    });

    const { mutate: deleteTodoMutation } = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["todo"],
            });
        },
    });

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        patchTodoMutation({
            id: todo.id,
            title: todo.title,
            content: todo.content,
            checked: todo.checked,
        });
        setEditMode(false);
    };

    const handleDeleteClick = () => {
        deleteTodoMutation({ id: id });
        alert("할 일이 삭제되었습니다.");
        navigate("/");
        // 삭제하고 이동 후에 왜 새로고침 해야 사라지는데..?
        window.location.reload();
    };

    return (
        <div className="pageContainer">
            <TopContainer>
                <Done checked={todo?.checked} />
                <Time updatedAt={todo?.updatedAt} />
            </TopContainer>

            <TodoContent data={todo} editMode={editMode} onUpdate={(field, value) => {
                todo[field] = value;
            }} />

            <ButtonContainer>
                {editMode ? (
                    <Button width="48%" text="수정완료" onClick={handleSaveClick} />
                ) : (
                    <Button width="48%" text="수정하기" onClick={handleEditClick} />
                )}
                <Button width="48%" text="삭제하기" onClick={handleDeleteClick} />
            </ButtonContainer>
        </div>
    );
};

export default TodoDetail;

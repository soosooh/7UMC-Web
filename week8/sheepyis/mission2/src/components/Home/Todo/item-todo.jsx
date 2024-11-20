import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../main";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../Button/Button";
import { deleteTodo, patchTodo } from "../../../api/todo";

const ItemContainer = styled.div`
    width: 100%;
    height: 4.5vw;
    background-color: ${colors.white};
    border: 0.1vw solid ${colors.inputColor};
    border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
`;

const ToggleButton = styled.div`
    width: 1vw;
    height: 1vw;
    border: 0.05vw solid ${colors.black};
    border-radius: 0.15vw;
    background-color: ${(props) => (props.checked ? colors.buttonColor2 : "transparent")};
    cursor: pointer;
`;

const TodoContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3vw;
    width: 60%;
`;

const TodoP = styled.p`
    width: 100%;
    font-size: 0.9vw;
    font-weight: bold;
    color: ${colors.inputColor};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const TodoInput = styled.input`
    width: 100%;
    font-size: 0.9vw;
    font-weight: bold;
    color: ${colors.inputColor};
    border: 0.1vw solid ${colors.inputColor};
    border-radius: 0.5vw;
    padding: 0.2vw;
    box-sizing: border-box;
`;

const ItemTodo = ({ id, title, content, checked }) => {
    const [isChecked, setIsChecked] = useState(checked);
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);
    const navigate = useNavigate();

    const { mutate: patchTodoMutation } = useMutation({
        mutationFn: patchTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["todos"],
            });
            setIsEditing(false);
        }
    });

    const { mutate: deleteTodoMutation } = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["todos"],
            });
        }
    });

    const handleToggle = () => {
        const updatedChecked = !isChecked;
        setIsChecked(updatedChecked);
        patchTodoMutation({ id, title, content, checked: updatedChecked });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        patchTodoMutation({
            id,
            title: newTitle,
            content: newContent,
            checked: isChecked,
        });
    };

    const handleTodoItemClick = () => {
        navigate(`/${id}`);
    }

    return (
        <ItemContainer>
            <ContentContainer>
                <ToggleButton checked={isChecked} onClick={handleToggle} />
                <TodoContentContainer>
                    {isEditing ? (
                        <>
                            <TodoInput type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                            <TodoInput type="text" value={newContent} onChange={(e) => setNewContent(e.target.value)} />
                        </>
                    ) : (
                        <>
                            <TodoP id={id} style={{ cursor: "pointer" }} onClick={handleTodoItemClick}>{title}</TodoP>
                            <TodoP>{content}</TodoP>
                        </>
                    )}
                </TodoContentContainer>
                {isEditing ? (
                    <Button width="6vw" height="2.5vw" text="완료" style={{ backgroundColor: colors.buttonColor, color: colors.black }} onClick={handleSaveClick} />
                ) : (
                    <Button width="6vw" height="2.5vw" text="수정" style={{ backgroundColor: colors.buttonColor, color: colors.black }} onClick={handleEditClick} />
                )}

                <Button width="6vw" height="2.5vw" text="삭제" style={{ backgroundColor: colors.buttonColor, color: colors.black }} onClick={() => deleteTodoMutation({ id: id })} />
            </ContentContainer>
        </ItemContainer>
    );
};

export default ItemTodo;

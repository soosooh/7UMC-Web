import { useState } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../Button/Button";
import useApi from "../../../hooks/useApi";

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

const ItemTodo = ({ id, title, content, checked, onDelete }) => {
    const [isChecked, setIsChecked] = useState(checked);
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);
    const { patch, del } = useApi();

    const handleToggle = async () => {
        const updatedChecked = !isChecked;
        setIsChecked(updatedChecked);

        await patch(`/${id}`, { checked: updatedChecked });
        window.location.reload();
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = async () => {
        await patch(`/${id}`, {
            title: newTitle,
            content: newContent,
            checked: isChecked,
        });
        setIsEditing(false);
        window.location.reload();
    };

    const handleDeleteClick = async () => {
        await del(`/${id}`);
        window.location.reload();
    };


    return (
        <ItemContainer>
            <ContentContainer>
                <ToggleButton checked={isChecked} onClick={handleToggle} />
                <TodoContentContainer>
                    {isEditing ? (
                        <>
                            <TodoInput value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                            <TodoInput value={newContent} onChange={(e) => setNewContent(e.target.value)} />
                        </>
                    ) : (
                        <>
                            <TodoP>{newTitle}</TodoP>
                            <TodoP>{newContent}</TodoP>
                        </>
                    )}
                </TodoContentContainer>
                <Button width="6vw" height="2.5vw" text={isEditing ? "완료" : "수정"} onClick={isEditing ? handleSaveClick : handleEditClick} style={{ backgroundColor: colors.buttonColor, color: colors.black }} />
                <Button width="6vw" height="2.5vw" text="삭제" onClick={handleDeleteClick} style={{ backgroundColor: colors.buttonColor, color: colors.black }} />
            </ContentContainer>
        </ItemContainer>
    );
};

export default ItemTodo;

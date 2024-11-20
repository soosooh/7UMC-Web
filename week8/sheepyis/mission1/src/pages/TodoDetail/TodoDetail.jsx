import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useApi from "../../hooks/useApi";
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
    const navigate = useNavigate();
    const { data, error, loading, get, patch, del } = useApi();
    const [editMode, setEditMode] = useState(false);
    const [updatedData, setUpdatedData] = useState({});

    useEffect(() => {
        get(`/${id}`);
    }, [id]);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = async () => {
        try {
            await patch(`/${id}`, updatedData);
            setEditMode(false);
            get(`/${id}`);
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdate = (field, value) => {
        setUpdatedData((prev) => ({ ...prev, [field]: value }));
    };

    const handleDeleteClick = async () => {
        try {
            await del(`/${id}`);
            alert("할 일이 삭제되었습니다.");
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="pageContainer">
            <TopContainer>
                <Done checked={data.checked} />
                <Time updatedAt={data.updatedAt} />
            </TopContainer>

            <TodoContent data={data} editMode={editMode} onUpdate={handleUpdate} />

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

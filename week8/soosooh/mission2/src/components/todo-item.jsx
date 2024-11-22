import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  margin-top: 20px;
  height: 40px;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 40px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    height: 30px;
    font-size: 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 400px;
    height: 40px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 30px;
    font-size: 10px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledCheckbox = styled.input`
  margin-right: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: white;
  color: black;

  @media (max-width: 768px) {
    width: 80%;
    height: 50%;
    font-size: 10px;
  }
`;

const StyledTitle = styled.h3`
  color: black;
  margin: 0;
  margin-top: -5px;
`;

const StyledContent = styled.p`
  color: black;
  margin: 0;
  margin-bottom: 5px;
`;

const StyledButton = styled.button`
  margin-left: 10px;
  padding: 10px 30px;
  background-color: #ededed;
  color: black;
  font-weight: 700px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100px;

  @media (max-width: 768px) {
    width: 80px;
    font-size: 10px;
  }
`;

const TodoItem = ({
  id,
  title,
  content,
  checked: initialChecked,
  onDelete,
  onUpdate,
}) => {
  const [checked, setChecked] = useState(initialChecked);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  const handleCheckboxChange = (e) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    onUpdate(id, { checked: newChecked }); // 서버에 상태 동기화
  };

  const handleEditClick = () => {
    if (isEditing) {
      // 저장 모드로 전환 시 업데이트 처리
      onUpdate(id, { title: editTitle, content: editContent });
    }
    setIsEditing(!isEditing);
  };

  return (
    <ItemContainer>
      <TextContainer>
        <StyledCheckbox
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <TitleContainer>
          <Link
            to={`/detail/${id}`}
            state={{ title: editTitle, content: editContent }}
            onClick={(e) => isEditing && e.preventDefault()}
          >
            {isEditing ? (
              <StyledInput
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            ) : (
              <StyledTitle>{editTitle}</StyledTitle>
            )}
          </Link>
          {isEditing ? (
            <StyledInput
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
          ) : (
            <StyledContent>{editContent}</StyledContent>
          )}
        </TitleContainer>
      </TextContainer>
      <ButtonContainer>
        <StyledButton onClick={handleEditClick}>
          {isEditing ? "저장" : "수정"}
        </StyledButton>
        <StyledButton onClick={() => onDelete(id)}>삭제</StyledButton>
      </ButtonContainer>
    </ItemContainer>
  );
};

export default TodoItem;

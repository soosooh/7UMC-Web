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

const TodoItem = ({ id, title, content, onDelete }) => {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // Save changes if exiting edit mode
      setEditTitle(editTitle);
      setEditContent(editContent);
    }
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

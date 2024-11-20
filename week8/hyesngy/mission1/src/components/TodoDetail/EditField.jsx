import React from "react";
import styled from "styled-components";

const EditField = ({ value, isEditing, onEdit, onSave, onChange }) => {
  return (
    <EditableWrapper>
      {isEditing ? (
        <>
          <EditableInput
            type="text"
            value={value}
            onChange={onChange}
          />
          <EditButton onClick={onSave}>저장</EditButton>
        </>
      ) : (
        <>
          <FieldValue>{value}</FieldValue>
          <EditButton onClick={onEdit}>수정</EditButton>
        </>
      )}
    </EditableWrapper>
  );
};

export default EditField;

const EditableWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`
const EditableInput = styled.input`
  flex: 1;
  border: 1px solid lightgray;
  padding: 0.5rem;
  border-radius: 4px;
`
const EditButton = styled.button`
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
  border: none;
  background-color: dodgerblue;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`
const FieldValue = styled.div`
  flex: 1;
`
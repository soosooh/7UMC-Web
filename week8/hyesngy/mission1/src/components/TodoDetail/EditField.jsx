import React from "react";
import styled from "styled-components";

const EditField = ({ value, isEditing, onChange }) => {
  return (
    <EditableWrapper>
      {isEditing ? (
        <EditableInput
          type="text"
          value={value}
          onChange={onChange}
        />
      ) : (
        <FieldValue>{value}</FieldValue>
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
  border: 1px dashed lightgray;
  padding: 0.5rem;
  border-radius: 4px;
`
const FieldValue = styled.div`
  flex: 1;
`
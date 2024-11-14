import styled from "styled-components";

export const Input = styled.input`
  width: 25rem;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`
export const SubmitBtn = styled.button`
  width: 25rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${(props) => (props.disabled ? 'gray' : '#F82F62')};
  text-align: center;
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 1rem;
  margin-top: 2rem;
`
export const ErrorMsg = styled.p`
  color: #FF073D;
  align-self: flex-start;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

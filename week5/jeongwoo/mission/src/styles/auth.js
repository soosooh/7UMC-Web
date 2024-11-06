import styled from '@emotion/styled';

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  background-color: #141414;
  width: 100%;
`;

export const AuthWrapper = styled.div`
  width: 400px;
  margin-top: -100px;
  text-align: center;
`;

export const AuthTitle = styled.h2`
  color: white;
  font-size: 32px;
  margin-bottom: 32px;
  text-align: center;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledInput = styled.div`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.p`
  color: #f03e3e;
  text-align: left;
  margin-top: 8px;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.isValid ? '#f93063' : '#666'};
  color: white;
  font-size: 16px;
  cursor: ${props => props.isValid ? 'pointer' : 'not-allowed'};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.isValid && '#0350a8'};
  }
`;
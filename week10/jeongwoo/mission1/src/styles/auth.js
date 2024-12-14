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
  position: relative;
  margin-bottom: 32px; // 에러 메시지를 위한 여백 확보
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  border: 1px solid ${props => props.error ? '#f03e3e' : 'transparent'};
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -24px;
  left: 0;
  color: #f03e3e;
  text-align: left;
  font-size: 14px;
  margin: 0; // 기존 margin 제거
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
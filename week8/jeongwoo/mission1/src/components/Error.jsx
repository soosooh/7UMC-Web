import styled from 'styled-components';

const ErrorContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: #fff3f3;
  border: 1px solid #dc3545;
  border-radius: 8px;
  color: #dc3545;
  text-align: center;
`;

const ErrorTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #dc3545;
`;

const ErrorMessage = styled.p`
  margin: 0;
  color: #666;
`;

const RetryButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const Error = ({ error, onRetry }) => (
  <ErrorContainer>
    <ErrorTitle>오류가 발생했습니다</ErrorTitle>
    <ErrorMessage>{error}</ErrorMessage>
    {onRetry && (
      <RetryButton onClick={onRetry}>
        다시 시도
      </RetryButton>
    )}
  </ErrorContainer>
);

export default Error;
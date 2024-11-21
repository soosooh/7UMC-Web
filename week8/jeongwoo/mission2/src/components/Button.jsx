import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px 10px;
  margin-left: 5px;
  background-color: ${props => props.variant === 'delete' 
    ? '#dc3545' 
    : props.variant === 'edit' 
    ? '#ffc107'
    : props.variant === 'save'
    ? '#28a745'
    : '#007bff'};
  color: ${props => props.variant === 'edit' ? '#212529' : 'white'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.variant === 'delete' 
      ? '#c82333' 
      : props.variant === 'edit'
      ? '#e0a800'
      : props.variant === 'save'
      ? '#218838'
      : '#0056b3'};
  }
`;

const Button = ({ onClick, children, variant }) => (
  <StyledButton onClick={onClick} variant={variant}>
    {children}
  </StyledButton>
);

export default Button;
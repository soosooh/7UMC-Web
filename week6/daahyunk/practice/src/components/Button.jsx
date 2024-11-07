import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  color: #333333;
  padding: 0.625rem 1.25rem; 
  border: none;
  margin-left: 0.5rem;
  border-radius: 0.3125rem; 
  cursor: pointer;
  font-size: 1rem;
  width: 8rem; 
  
  &:hover {
    background-color: #fff;
  }
`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;

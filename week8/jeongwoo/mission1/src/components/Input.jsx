import styled from 'styled-components';

const StyledInput = styled.input`
  flex-grow: 1;
  padding: ${props => props.size === 'large' ? '0.5rem' : '0.25rem 0.5rem'};
  font-size: ${props => props.size === 'large' ? '1rem' : '0.875rem'};
  border: 1px solid #ced4da;
  border-radius: ${props => props.isMain ? '4px 0 0 4px' : '4px'};
  margin-right: ${props => props.isMain ? '0' : '0.5rem'};
`;

const Input = ({ value, onChange, placeholder, size, isMain }) => (
  <StyledInput
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    size={size}
    isMain={isMain}
  />
);

export default Input;
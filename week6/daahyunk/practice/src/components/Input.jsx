import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 0.625rem;
  font-size: 1rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.5rem;
`;

const Input = ({ value, onChange, onSubmit }) => (
  <InputContainer onSubmit={onSubmit}>
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder="할 일을 입력하세요..."
    />
  </InputContainer>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;

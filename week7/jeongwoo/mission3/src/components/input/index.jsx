import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, Input, ErrorMessage } from '../../styles/auth';

const InputComponent = ({ type, placeholder, error, register, id }) => {
  return (
    <StyledInput>
      <Input
        type={type}
        placeholder={placeholder}
        error={error}
        {...register(id)}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledInput>
  );
};

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string
  }),
  register: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default InputComponent;
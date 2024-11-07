import { StyledInput, Input, ErrorMessage } from '../../styles/auth';

const InputComponent = ({ type, placeholder, error, register, id }) => {
  return (
    <StyledInput>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(id)}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledInput>
  );
};

export default InputComponent;
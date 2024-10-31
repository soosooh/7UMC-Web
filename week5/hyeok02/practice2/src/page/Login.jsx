import React from 'react';
import { useForm } from 'react-hook-form';

const inputStyles = {
  width: '300px',
  padding: '8px',
  borderRadius: '8px',
  marginBottom: '5px', 
};

const errorTextStyles = {
  color: 'red',
  fontSize: '12px',
  marginTop: '5px',
};

const buttonStyles = (isValid) => ({
  width: '300px',
  padding: '10px',
  borderRadius: '8px',
  backgroundColor: isValid ? 'red' : 'gray',
  color: 'white',
  cursor: isValid ? 'pointer' : 'not-allowed',
  border: 'none',
  marginBottom: '25px',
});

const formContainerStyles = {
  width: '300px',
  margin: '0 auto',
  marginTop: '200px',
  textAlign: 'center',
};

const CustomInput = ({ label, type, register, error }) => (
  <div style={{ height: '55px', marginBottom: '15px' }}> 
    <input
      type={type}
      {...register}
      placeholder={label}
      style={{
        ...inputStyles,
        border: error ? '1px solid red' : '1px solid #ccc',
      }}
    />
    {error && <p style={errorTextStyles}>{error.message}</p>}
  </div>
);

function LoginPage() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => console.log('Form Data:', data);

  return (
    <div style={formContainerStyles}>
      <h3 style={{ marginBottom: '25px' }}>로그인</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label="이메일"
          type="email"
          register={register('email', {
            required: '이메일을 입력하세요.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '올바른 이메일 형식을 입력하세요.',
            },
          })}
          error={errors.email}
        />
        <CustomInput
          label="비밀번호"
          type="password"
          register={register('password', {
            required: '비밀번호를 입력하세요.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자리 이상이어야 합니다.',
            },
            maxLength: {
              value: 16,
              message: '비밀번호는 16자리 이하로 입력하세요.',
            },
          })}
          error={errors.password}
        />
        <button type="submit" disabled={!isValid} style={buttonStyles(isValid)}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

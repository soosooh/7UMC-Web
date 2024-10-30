import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
  marginBottom: '20px',
});

const formContainerStyles = {
  width: '300px',
  margin: '0 auto',
  marginTop: '150px',
  textAlign: 'center',
};

const CustomInput = ({ label, type, register, error }) => (
  <div style={{ height: '45px', marginBottom: '15px' }}>
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

const schema = yup.object().shape({
  email: yup
    .string()
    .email('올바른 이메일 형식을 입력하세요.')
    .required('이메일을 입력하세요.'),
  password: yup
    .string()
    .min(8, '비밀번호는 8자리 이상이어야 합니다.')
    .max(16, '비밀번호는 16자리 이하로 입력하세요.')
    .required('비밀번호를 입력하세요.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 확인을 입력하세요.'),
});

function SignUp() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log('Form Data:', data);

  return (
    <div style={formContainerStyles}>
      <h3 style={{ marginBottom: '20px' }}>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label="이메일"
          type="email"
          register={register('email')}
          error={errors.email}
        />
        <CustomInput
          label="비밀번호"
          type="password"
          register={register('password')}
          error={errors.password}
        />
        <CustomInput
          label="비밀번호 확인"
          type="password"
          register={register('passwordConfirm')}
          error={errors.passwordConfirm}
        />
        <button type="submit" disabled={!isValid} style={buttonStyles(isValid)}>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUp;

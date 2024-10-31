import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  email: yup.string().email('올바른 이메일 형식을 입력하세요.').required('이메일을 입력하세요.'),
  password: yup
    .string()
    .min(8, '비밀번호는 8자리 이상이어야 합니다.')
    .max(16, '비밀번호는 16자리 이하로 입력하세요.')
    .required('비밀번호를 입력하세요.'),
}).required();

const CustomInput = ({ label, name, type, register, error }) => (
  <div style={{ marginBottom: '25px' }}>
    <input
      type={type}
      {...register(name)}
      placeholder={label}
      style={{
        width: '300px',
        padding: '8px',
        border: error ? '1px solid red' : '1px solid #ccc',
        borderRadius: '8px',
      }}
    />
    {error && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{error.message}</p>}
  </div>
);

function LoginPage() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => console.log('Form Data:', data);

  return (
    <div style={{ width: '300px', margin: '0 auto', marginTop: '200px', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '25px' }}>로그인</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput label="이메일" name="email" type="email" register={register} error={errors.email} />
        <CustomInput label="비밀번호" name="password" type="password" register={register} error={errors.password} />
        <button
          type="submit"
          disabled={!isValid}
          style={{
            width: '300px',
            padding: '10px',
            borderRadius: '8px',
            backgroundColor: isValid ? 'red' : 'gray',
            color: 'white',
            cursor: isValid ? 'pointer' : 'not-allowed',
            border: 'none',
            marginBottom: '25px',
          }}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

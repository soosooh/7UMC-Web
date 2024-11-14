import React from 'react';
import axiosInstance from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const styles = {
  input: {
    width: '300px',
    padding: '8px',
    borderRadius: '8px',
    marginBottom: '5px',
  },
  errorText: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  },
  button: (isValid) => ({
    width: '300px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: isValid ? 'red' : 'gray',
    color: 'white',
    cursor: isValid ? 'pointer' : 'not-allowed',
    border: 'none',
    marginBottom: '20px',
  }),
  formContainer: {
    width: '300px',
    margin: '0 auto',
    marginTop: '150px',
    textAlign: 'center',
  },
};

const signUpSchema = z
  .object({
    email: z.string().email({ message: '올바른 이메일 형식을 입력하세요.' }),
    password: z
      .string()
      .min(8, { message: '비밀번호는 8자리 이상이어야 합니다.' })
      .max(16, { message: '비밀번호는 16자리 이하로 입력하세요.' }),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: '비밀번호가 일치하지 않습니다.',
  });

const CustomInput = ({ label, type, register, error }) => (
  <div style={{ height: '45px', marginBottom: '15px' }}>
    <input
      type={type}
      {...register}
      placeholder={label}
      style={{
        ...styles.input,
        border: error ? '1px solid red' : '1px solid #ccc',
      }}
    />
    {error && <p style={styles.errorText}>{error.message}</p>}
  </div>
);

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const requestData = {
      email: data.email,
      password: data.password,
      passwordCheck: data.passwordConfirm, 
    };
    console.log('보내는 데이터:', requestData); 
    try {
      const response = await axiosInstance.post('/auth/register', requestData);
      console.log('회원가입 성공:', response.data); 
      navigate('/login');
    } catch (error) {
      console.error('회원가입 실패:', error.response ? error.response.data : error.message); 
    }
  };

  return (
    <div style={styles.formContainer}>
      <h3 style={{ marginBottom: '20px' }}>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput label="이메일" type="email" register={register('email')} error={errors.email} />
        <CustomInput label="비밀번호" type="password" register={register('password')} error={errors.password} />
        <CustomInput label="비밀번호 확인" type="password" register={register('passwordConfirm')} error={errors.passwordConfirm} />
        <button type="submit" disabled={!isValid} style={styles.button(isValid)}>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUp;

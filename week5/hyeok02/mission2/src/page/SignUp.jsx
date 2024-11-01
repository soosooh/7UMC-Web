import React from 'react';
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
    nickname: z
      .string()
      .min(2, { message: '닉네임은 2자리 이상이어야 합니다.' })
      .max(8, { message: '닉네임은 8자리 이하로 입력하세요.' }),
    birthDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: '생년월일은 YYYY-MM-DD 형식으로 입력하세요.' })
      .refine((date) => {
        const [year, month, day] = date.split('-').map(Number);
        const birthDate = new Date(year, month - 1, day);
        return birthDate <= new Date();
      }, { message: '올바른 생년월일을 입력하세요.' }),
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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => console.log('Form Data:', data);

  return (
    <div style={styles.formContainer}>
      <h3 style={{ marginBottom: '20px' }}>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput label="닉네임" type="text" register={register('nickname')} error={errors.nickname} />
        <CustomInput label="생년월일 (YYYY-MM-DD)" type="text" register={register('birthDate')} error={errors.birthDate} />
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

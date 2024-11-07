import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const getSchema = (type) => {
  const baseSchema = {
    email: z
      .string()
      .email('유효한 이메일 주소를 입력해주세요.')
      .min(1, '이메일을 입력해주세요!'),

    password: z
      .string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하여야 합니다.')
  };

  if (type === 'signup') {
      baseSchema.passwordCheck = z
      .string()
      .min(1, '비밀번호 확인을 입력해주세요!');

      return z.object(baseSchema).superRefine((data, ctx) => {
        if (data.password !== data.passwordCheck) {
          ctx.addIssue({
            path: ['passwordCheck'],
            message: '비밀번호가 일치하지 않습니다.',
          });
        }
    });
  }

  return z.object(baseSchema);
};

export const useAuthForm = (type) => {
  return useForm({
    resolver: zodResolver(getSchema(type)),
    mode: 'onChange',
  });
};
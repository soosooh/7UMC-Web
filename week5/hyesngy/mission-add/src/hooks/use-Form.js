import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const getSchema = (type) => yup.object().shape({
  email: yup
    .string()
    .email('유효한 이메일 주소를 입력해주세요.')
    .required('이메일을 입력해주세요!'),

  password: yup
    .string()
    .min(8, '비밀번호는 8자 이상이어야 합니다.')
    .max(16, '비밀번호는 16자 이하여야 합니다.')
    .required('비밀번호를 입력해주세요!'),

  confirmPassword: type ==='signup' ? yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 확인을 입력해주세요!')
    : yup.string().notRequired(),

  name: type ==='signup' ? yup
    .string()
    .required('이름을 입력해주세요!')
    : yup.string().notRequired(),

  age: type === 'signup' ? yup
    .number()
    .transform((value, originalValue) => originalValue.trim() === '' ? null : value)
    .min(0, '나이를 다시 입력해주세요.')
    .max(120, '나이를 다시 입력해주세요.')
    .positive('나이를 다시 입력해주세요.')
    .integer('나이는 정수여야 합니다.')
    .required('나이를 입력해주세요!')
    :yup.number().notRequired()
});

export const useAuthForm = (type) => {
  return useForm({
    resolver: yupResolver(getSchema(type)),
    mode: 'onChange',
  });
};
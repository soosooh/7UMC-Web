export const validateLogin = (values) => {
  const errors = {};
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!values.email) {
      errors.email = '이메일을 입력해주세요';
  } else if (!emailPattern.test(values.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다';
  }

  if (!values.password) {
      errors.password = '비밀번호를 입력해주세요';
  } else if (values.password.length < 8 || values.password.length > 16) {
      errors.password = '비밀번호는 8자 이상 16자 이하여야 합니다';
  }

  return errors;
};
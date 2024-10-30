// validate.js
const emailPattern = /^[A-Za-z0-9_.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9]+$/;

function validateUser(values) {
  const errors = {
    email: "",
    password: "",
    passwordCheck: "",
  };

  if (!emailPattern.test(values.email)) {
    errors.email = "올바른 형식이 아닙니다. 다시 입력해주세요";
  }

  if (values.password.length < 8 || values.password.length > 16) {
    errors.password = "비밀번호는 8~16자 사이로 입력해주세요";
  }

  if (values.password !== values.passwordCheck) {
    errors.passwordCheck = "비밀번호가 일치하지 않습니다.";
  }

  // errors 객체에서 빈 값을 제거하여 실제 오류가 있는 필드만 포함하도록 설정
  return Object.keys(errors)
    .filter((key) => errors[key])
    .reduce((acc, key) => ({ ...acc, [key]: errors[key] }), {});
}

export { validateUser as validateLogin };

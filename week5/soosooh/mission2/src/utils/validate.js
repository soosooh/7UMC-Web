const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z-z0-9\-]+\.[A-za-z0-9\-]+/;
const namePattern = /^[A-Za-z가-힣]+$/; // 한글과 영문자만 허용

function validateUser(values) {
  const errors = {
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  };

  if (!values.name) {
    errors.name = "필수항목입니다."; // 이름이 비어있을 경우
  } else if (!namePattern.test(values.name)) {
    errors.name = "이름은 특수문자나 숫자를 포함할 수 없습니다."; // 이름 유효성 검사
  }

  if (!values.email) {
    errors.email = "필수항목입니다.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다. 다시 확인해주세요!";
  }

  if (!values.password) {
    errors.password = "필수항목입니다.";
  } else if (values.password.length < 8 || values.password.length > 16) {
    errors.password = "비밀번호는 8-16자 사이로 입력해주세요!";
  }

  if (!values.passwordCheck) {
    errors.passwordCheck = "필수항목입니다.";
  }

  return errors;
}

function validateLogin(values) {
  const errors = validateUser(values);
  delete errors.passwordCheck; // 로그인에서는 passwordCheck 필요 없음
  return errors;
}

function validateSignUp(values) {
  const errors = validateUser(values);

  if (values.password !== values.passwordCheck) {
    errors.passwordCheck = "비밀번호가 일치하지 않습니다.";
  }

  return errors;
}

export { validateLogin, validateSignUp };

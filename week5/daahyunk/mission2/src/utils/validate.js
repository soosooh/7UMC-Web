export function validateLogin(values) {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(values.email)) {
      errors.email = "올바른 이메일 형식이 아닙니다.";
    }
    if (!values.password || values.password.length < 8 || values.password.length > 16) {
      errors.password = "비밀번호는 8 ~ 16자 사이로 입력해주세요!";
    }
    return errors;
  }
  
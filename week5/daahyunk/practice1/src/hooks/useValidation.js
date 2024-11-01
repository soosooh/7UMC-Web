import { useState, useEffect } from "react";

export const useValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [isTouched, setIsTouched] = useState({ email: false, password: false });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailPattern.test(value) ? null : "올바른 이메일 형식이 아닙니다.");
  };

  const validatePassword = (value) => {
    setPasswordError(
      value.length >= 8 && value.length <= 16
        ? null
        : "비밀번호는 8 ~ 16자 사이로 입력해주세요!"
    );
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (isTouched.email) validateEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (isTouched.password) validatePassword(value);
  };

  const handleBlur = (field) => {
    setIsTouched((prev) => ({ ...prev, [field]: true }));
    if (field === "email") validateEmail(email);
    if (field === "password") validatePassword(password);
  };

  useEffect(() => {
    setIsFormValid(!emailError && !passwordError && email && password);
  }, [emailError, passwordError, email, password]);

  return {
    email,
    password,
    emailError,
    passwordError,
    isFormValid,
    handleEmailChange,
    handlePasswordChange,
    handleBlur,
  };
};

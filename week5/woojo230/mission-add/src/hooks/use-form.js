import { useState, useEffect } from "react";

function useForm({ initialValue, validate }) {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false); // isValid 상태 추가

  const handleChangeInput = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (name) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTextInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeInput(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur };
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);

    // errors 객체가 비어 있으면 isValid를 true로 설정
    setIsValid(Object.keys(newErrors).length === 0);

    // 디버깅을 위해 errors와 isValid를 로그로 출력
    console.log("Errors:", newErrors);
    console.log("isValid:", Object.keys(newErrors).length === 0);
  }, [validate, values]);

  return {
    values,
    errors,
    touched,
    isValid,
    getTextInputProps,
    handleSubmit: (callback) => (event) => {
      event.preventDefault();
      if (isValid) {
        callback(values);
      }
    },
  };
}

export default useForm;

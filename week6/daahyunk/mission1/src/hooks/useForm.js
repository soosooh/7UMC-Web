import { useState, useEffect } from "react";

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    if (touched[name]) validateField(name, value);
  };

  const handleBlur = (name) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
    validateField(name, values[name]);
  };

  const validateField = (name, value) => {
    const validationErrors = validate({ ...values, [name]: value });
    setErrors(validationErrors);
  };

  useEffect(() => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsFormValid(Object.keys(validationErrors).length === 0);
  }, [values, validate]);

  const getTextInputProps = (name) => ({
    value: values[name] || "",
    onChange: (e) => handleChange(name, e.target.value),
    onBlur: () => handleBlur(name),
  });

  return {
    errors,
    touched,
    isFormValid,
    getTextInputProps,
  };
};

export default useForm;

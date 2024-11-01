import { useState, useEffect } from 'react';

export const useForm = (initialValues, validate) => {
    const [values, setValues] = useState(initialValues);
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // validate 함수로 에러 체크
        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);
        }
    }, [values, validate]);

    const handleChangeInput = ({ name, value }) => {
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
        // 값이 변경될 때 해당 필드를 touched로 표시
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
    };

    const handleBlur = (name) => {
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
    };

    const register = (name) => ({
        name,
        value: values[name] || '',
        onChange: (e) => handleChangeInput({ name, value: e.target.value }),
        onBlur: () => handleBlur(name),
        // 포커스가 떠날 때도 touched 처리
        onFocus: () => setTouched(prev => ({ ...prev, [name]: true }))
    });

    const handleSubmit = (onSubmit) => (e) => {
        e.preventDefault();
        // 모든 필드를 touched로 표시
        const touchedFields = Object.keys(values).reduce((acc, key) => ({
            ...acc,
            [key]: true
        }), {});
        setTouched(touchedFields);

        // 에러가 없을 때만 제출
        if (Object.keys(errors).length === 0) {
            onSubmit(values);
        }
    };

    return {
        values,
        errors,
        touched,
        register,
        handleSubmit
    };
};
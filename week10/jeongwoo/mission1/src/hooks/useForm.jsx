import { useState, useEffect } from 'react';

export const useForm = (initialValues, validateUser) => {
    const [values, setValues] = useState(initialValues);
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const newErrors = validateUser(values);
        setErrors(newErrors);
    }, [values, validateUser]);

    const handleChangeInput = ({ name, value }) => {
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleBlur = (name) => {
        setTouched({
            ...touched,
            [name]: true
        });
    };

    const getTextInputProps = (name) => ({
        value: values[name],
        onChange: (e) => handleChangeInput({ name, value: e.target.value }),
        onBlur: () => handleBlur(name)
    });

    return {
        values,
        errors,
        touched,
        getTextInputProps
    };
};
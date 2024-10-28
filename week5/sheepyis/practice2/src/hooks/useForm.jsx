import { useForm as useReactHookForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const useForm = (validationSchema) => {
    return useReactHookForm({
        resolver: yupResolver(validationSchema),
        mode: 'onChange'
    });
};

export default useForm;

import { useForm as useReactHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const useForm = (validationSchema) => {
    return useReactHookForm({
        resolver: zodResolver(validationSchema),
        mode: 'onChange'
    });
};

export default useForm;

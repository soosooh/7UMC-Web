import { useState, useEffect } from "react";

const useDebounce = (value, delay) =>{
    const [debouncedValue, setDebouncedValue] = useState(value);


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler); // 컴포넌트 언마운트 시 타이머 제거
        };
    }, [value, delay]);

    return debouncedValue;
}


export default useDebounce;

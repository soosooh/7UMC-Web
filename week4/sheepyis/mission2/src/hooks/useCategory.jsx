import { useState, useEffect } from "react";
import CategoryData from "../utils/categoryData";

const useCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = () => {
            setLoading(true);
            setError(null);

            try {
                setTimeout(() => {
                    setCategories(CategoryData);
                    setLoading(false);
                }, 1000);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return { categories, loading, error };
};

export default useCategory;
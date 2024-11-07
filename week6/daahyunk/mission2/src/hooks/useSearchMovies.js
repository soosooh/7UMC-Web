import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

const useSearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const fetchMovies = useCallback(async (searchQuery) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          searchQuery
        )}&api_key=${API_KEY}&language=ko`
      );
      const data = await response.json();
      setMovies(data.results || []);
      setIsSearchPerformed(true);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
      setIsSearchPerformed(true);
    } finally {
      setIsLoading(false);
    }
  }, [API_KEY]);

  // 디바운스 적용
  const debounceSearch = useCallback((searchQuery) => {
    const timer = setTimeout(() => {
      fetchMovies(searchQuery);
    }, 500); 

    return () => clearTimeout(timer); 
  }, [fetchMovies]);

  const handleSearch = () => {
    if (query.trim()) {
      debounceSearch(query);
      setIsSearchPerformed(true); 
    } else {
      setMovies([]);
      setIsSearchPerformed(false); 
    }
  };

  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
    setIsSearchPerformed(false); 
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("query");
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, [location.search]);

  return { query, setQuery: handleChangeQuery, movies, handleSearch, isSearchPerformed, isLoading };
};

export default useSearchMovies;

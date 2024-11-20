import React, { useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { debounce } from 'lodash';
import styled from 'styled-components';  
import { searchMovies } from '../../api/movieApi';
import SearchMovieList from './SearchMovieList';

const SearchContainer = styled.div`
 padding: 20px;
 color: white;
 min-height: calc(100vh - 100px);
 position: relative;
`;

const SearchInputWrapper = styled.div`
 margin: 20px 0;
 width: 100%;
 display: flex;
 gap: 10px;
`;

const SearchInput = styled.input`
 flex: 1;
 padding: 12px 20px;
 border: 2px solid #f84c62;
 border-radius: 8px;
 background-color: #1a1a1a;
 color: white;
 font-size: 16px;

 &::placeholder {
   color: rgba(255, 255, 255, 0.5);
 }

 &:focus {
   outline: none;
   border-color: #8b8eff;
 }
`;

const SearchButton = styled.button`
 padding: 12px 24px;
 background-color: #f84c62;
 border: none;
 border-radius: 8px;
 color: white;
 font-size: 16px;
 cursor: pointer;
 transition: background-color 0.2s;

 &:hover {
   background-color: #6B78FF;
 }
`;

const NoResults = styled.div`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translate(-50%, -50%);
 text-align: center;
 color: rgba(255, 255, 255, 0.7);
 font-size: 1.2rem;
 width: 100%;
 max-width: 90%;
`;

const ErrorMessage = styled.div`
 text-align: center;
 color: #ff6b6b;
 padding: 20px;
 width: 100%;
`;

const MoviesGrid = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
 gap: 15px;
 padding: 20px 0;
 
 @media (min-width: 768px) {
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
   gap: 20px;
 }
`;

const Search = () => {
 const [searchParams, setSearchParams] = useSearchParams();
 const searchQuery = searchParams.get('query') || '';
 const [inputValue, setInputValue] = useState(searchQuery);

 const { data, isLoading, isError } = useQuery({
   queryKey: ['search', searchQuery],
   queryFn: () => searchMovies({ query: searchQuery }),
   select: (response) => response.data.results,
   enabled: !!searchQuery,
   staleTime: 1000 * 60 * 5,
 });

 const handleSearch = () => {
   if (inputValue) {
     setSearchParams({ query: inputValue });
   } else {
     setSearchParams({});
   }
   document.activeElement.blur();
 };

 const debouncedSearch = useCallback(
   debounce((value) => {
     if (value) {
       setSearchParams({ query: value });
     } else {
       setSearchParams({});
     }
   }, 500),
   [setSearchParams]
 );

 const handleInputChange = (e) => {
   const value = e.target.value;
   setInputValue(value);
   debouncedSearch(value);
 };

 const handleKeyPress = (e) => {
   if (e.key === 'Enter') {
     handleSearch();
   }
 };

 if (isLoading) {
   return (
     <SearchContainer>
       <SearchInputWrapper>
         <SearchInput
           type="text"
           placeholder="영화 제목을 입력하세요"
           value={inputValue}
           onChange={handleInputChange}
           onKeyPress={handleKeyPress}
         />
         <SearchButton onClick={handleSearch}>검색</SearchButton>
       </SearchInputWrapper>
       <MoviesGrid>
         {[...Array(12)].map((_, index) => (
           <div key={index} className="animate-pulse">
             <div className="bg-gray-200 h-[400px] rounded-lg"></div>
           </div>
         ))}
       </MoviesGrid>
     </SearchContainer>
   );
 }

 return (
   <SearchContainer>
     <SearchInputWrapper>
       <SearchInput
         type="text"
         placeholder="영화 제목을 입력하세요"
         value={inputValue}
         onChange={handleInputChange}
         onKeyPress={handleKeyPress}
       />
       <SearchButton onClick={handleSearch}>
         검색
       </SearchButton>
     </SearchInputWrapper>

     {isError && (
       <ErrorMessage>검색 중 오류가 발생했습니다. 다시 시도해 주세요.</ErrorMessage>
     )}

     {searchQuery && (!data || data.length === 0) && (
       <NoResults>
         해당하는 검색어 '{searchQuery}'에 해당하는 데이터가 없습니다.
       </NoResults>
     )}

     {data?.length > 0 && <SearchMovieList movies={data} />}
   </SearchContainer>
 );
};

export default Search;
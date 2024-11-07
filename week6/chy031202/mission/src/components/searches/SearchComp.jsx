import styled from "styled-components";
import useCustomFetch from "../../hooks/useCustomFetch";
import SearchListData from "./searchListData";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MovieItem from "../movie-item";
import { useEffect } from "react";

const SearchComp = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [search, setSearch] = useState(false);
    const {data:movies, isLoading, isError} = useCustomFetch(`/search/movie?query=${searchQuery}&include_adult=false&language=ko-KR&page=1`);


    const handleSearch = () => {
        if (mq === searchQuery) return;
        navigate(`/search?mq=${searchQuery}`)
    }

    const handleSearchMovieEnter = (e) => {
        if(e.key === 'Enter') {
            handleSearch();
        }
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }
    const [searchParams, setSearchParams] = useSearchParams({
        mq:''
    })
    
    
    const mq = searchParams.get('mq')
    console.log(mq, 'mq');

    // if (isLoading) {
    //     return (<div style={{color:'white'}}>로딩중입니다</div>)
    // }
    // if(isError) {
    //     return(<div style={{color:'white'}}>에러!</div>)
    // }
    

     // movies 데이터 변경 시 콘솔에 출력
    useEffect(() => {
        console.log("Movies data:", movies);
    }, [movies]);
    
    return (
        <>
        <Input placeholder='영화 제목을 입력해주세요.' 
        type={'text'} 
        value = {searchQuery}
        onChange={handleChange}
        />
        <Button onClick={handleSearch}>검색</Button>
        
        
        <MovieLi className="movieLi">
                {movies.data?.results?.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </MovieLi>
            
        </>
    )

    
}


const Input = styled.input`

width: 80%;
height: 50px;
left: 203px;
top: 96px;

background: #FFFFFF;
border-radius: 10px 0px 0px 10px;
border:none;

`

const Button = styled.button `
/* searchButtonBackground */

width: 90px;
height: 52px;
left: 1805px;
top: 96px;

background: #FF073D;
color:white;
border-radius: 0px 10px 10px 0px;
border:none;

`

const MovieLi = styled.ul `
list-style: none;
overflow-y: auto; /* 수직 스크롤 활성화 */
`
export default SearchComp
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';
import Pagination from '../../components/pagination/pagination';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const API_URL = `https://api.themoviedb.org/3/movie/popular`;
    const token = `Bearer ${import.meta.env.VITE_API_TOKEN}`;

    const fetchMovies = async (page) => {
        try {
            const response = await axios.get(API_URL, {
                headers: {
                    Authorization: token,
                },
                params: {
                    language: 'ko-KR',
                    page: page,
                },
            });
            setMovies(response.data.results.slice(0, 16));
        } catch (error) {
            console.error('영화 데이터를 가져오는데 실패했습니다:', error);
        }
    };

    useEffect(() => {
        fetchMovies(page);
    }, [page]);

    const handleNextPage = () => setPage((prevPage) => prevPage + 1);
    const handlePreviousPage = () => {
        if (page > 1) setPage((prevPage) => prevPage - 1);
    };

    return (
        <Container>
            <MoviesGrid>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movieId={movie.id}
                        posterPath={movie.poster_path}
                        title={movie.title}
                        releaseDate={movie.release_date}
                        overview={movie.overview}
                    />
                ))}
            </MoviesGrid>
            <Pagination
                page={page}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
            />
        </Container>
    );
};

export default HomePage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #ffffffffff;
    color: black;
    overflow-x: hidden;
    width: 100%;
`;

const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1600px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
`;


// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import MovieCard from '../../components/movies/MovieCard';

// const HomePage = () => {
//     const [movies, setMovies] = useState([]); 
//     const [page, setPage] = useState(1); 

//     const API_URL = `https://api.themoviedb.org/3/movie/popular`;
//     const token = `Bearer ${import.meta.env.VITE_API_TOKEN}`;
//     const fetchMovies = async (page) => {
//         try {
//             const response = await axios.get(API_URL, {
//                 headers: {
//                     Authorization: token,
//                 },
//                 params: {
//                     language: 'ko-KR',
//                     page: page,
//                 },
//             });
//             setMovies(response.data.results.slice(0, 16)); 
//         } catch (error) {
//             console.error('영화 데이터를 가져오는데 실패했습니다:', error);
//         }
//     };

//     useEffect(() => {
//         fetchMovies(page);
//     }, [page]);

//     const handleNextPage = () => setPage((prevPage) => prevPage + 1);
//     const handlePreviousPage = () => {
//         if (page > 1) setPage((prevPage) => prevPage - 1);
//     };

//     return (
//         <Container>
//             <MoviesGrid>
//                 {movies.map((movie) => (
//                     <MovieCard
//                         key={movie.id}
//                         movieId={movie.id}
//                         posterPath={movie.poster_path}
//                         title={movie.title}
//                         releaseDate={movie.release_date}
//                         overview={movie.overview}
//                     />
//                 ))}
//             </MoviesGrid>
//             <PaginationControls>
//                 <Button onClick={handlePreviousPage} disabled={page === 1}>
//                     이전
//                 </Button>
//                 <PageNumber>Page {page}</PageNumber>
//                 <Button onClick={handleNextPage}>다음</Button>
//             </PaginationControls>
//         </Container>
//     );
// };

// export default HomePage;

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 20px;
//     background-color: #FFfffffFFFF;
//     color: black;
//     overflow-x: hidden;
//       width: 100%;
// `;

// const MoviesGrid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(8, 1fr);
//     grid-template-rows: repeat(2, auto);  
//     gap: 20px;
//     width: 100%;
//     max-width: 1600px;
// `;

// const PaginationControls = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;
//     margin-top: 20px;
//     padding: 10px 20px;
//     background-color: #FFFFFF;
//     border-radius: 8px;
//     width: 100%;
//     max-width: 600px;
//     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

//     @media (max-width: 768px) {
//         max-width: 90%; // 작은 화면에서 너비를 줄여 화면에 맞춤
//         gap: 5px; // 작은 화면에서 버튼 간격 조정
//         padding: 8px 15px;
//     }
// `;

// const Button = styled.button`
//     flex-grow: 1;  // 버튼이 가능한 넓게 차지하도록 설정
//     min-width: 80px; // 최소 너비 설정
//     max-width: 150px; // 최대 너비 설정
//     height: 35px;
//     background: #FF073D;
//     border: none;
//     border-radius: 10px;
//     color: #FFFFFF;
//     cursor: pointer;
//     font-size: 1rem;
//     transition: opacity 0.3s;

//     &:hover {
//         opacity: 0.8;
//     }

//     @media (max-width: 768px) {
//         font-size: 0.9rem;  // 작은 화면에서 폰트 크기 축소
//         padding: 8px; // 버튼 패딩 조정으로 크기 조절
//     }
// `;

// const PageNumber = styled.span`
//     font-size: 1rem;
//     font-weight: bold;
//     color: white;
// `;

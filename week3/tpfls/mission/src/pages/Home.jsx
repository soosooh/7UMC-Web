import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchNowPlayingMovies } from '../mocks/movie'; // API 호출 함수 임포트

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await fetchNowPlayingMovies(); // 현재 상영 중인 영화 가져오기
                setMovies(data.results); // 영화 목록 상태에 저장
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
    if (error) return <ErrorMessage>Error: {error.message}</ErrorMessage>;

    return (
        <Container>
            
            <MovieGrid>
                {movies.map(movie => (
                    <MovieCard key={movie.id}>
                        <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <MovieInfo>
                            <MovieTitle>{movie.title}</MovieTitle>
                            <MovieRating>🌟 {movie.vote_average}</MovieRating>
                            <ReleaseDate>{movie.release_date}</ReleaseDate>
                        </MovieInfo>
                    </MovieCard>
                ))}
            </MovieGrid>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    padding: 30px;
    background-color: black; /* 배경색을 어두운 색으로 설정 */
    color: white;
    overflow-y: auto; /* 스크롤 가능 */
    margin-top:50px;
`;



const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); /* 카드 크기 조정 */
    gap: 20px; /* 카드 간격 */
`;

const MovieCard = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s; /* 호버 시 효과 */
    
    &:hover {
        transform: scale(1.05); /* 호버 시 약간 커짐 */
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* 그림자 효과 */
    }
`;

const MovieImage = styled.img`
    width: 100%; /* 카드 너비에 맞게 조정 */
    height: auto; /* 비율 유지 */
`;

const MovieInfo = styled.div`
    padding: 10px;
    text-align: left; /* 텍스트 왼쪽 정렬 */
`;

const MovieTitle = styled.p`
    font-size: 16px; /* 제목 크기 조정 */
    color: white; /* 제목 색상 변경 */
    margin: 0; /* 기본 마진 제거 */
`;

const MovieRating = styled.p`
    margin: 5px 0; /* 간격 조정 */
`;

const ReleaseDate = styled.p`
    color: #ccc; /* 개봉일 색상 변경 */
    font-size: 14px; /* 개봉일 크기 조정 */
`;

const LoadingMessage = styled.p`
    color: white;
    text-align: center;
`;

const ErrorMessage = styled.p`
    color: red;
    text-align: center;
`;

export default HomePage;

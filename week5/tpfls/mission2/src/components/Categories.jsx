import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../mocks/movie'; // API 호출 함수 가져오기

// 이미지 가져오기
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'; // 영화 이미지 기본 URL

const Categories = () => {
    const location = useLocation();
    const excludedPaths = ['/login', '/signup'];

    if (excludedPaths.includes(location.pathname)) {
        return null; 
    }

    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState(''); // 현재 카테고리 상태
    const [showMovies, setShowMovies] = useState(false); // 영화 목록 표시 여부

    useEffect(() => {
        const fetchMovies = async () => {
            let data;
            switch (category) {
                case 'nowplaying':
                    data = await fetchNowPlayingMovies();
                    break;
                case 'popular':
                    data = await fetchPopularMovies();
                    break;
                case 'toprated':
                    data = await fetchTopRatedMovies();
                    break;
                case 'upcoming':
                    data = await fetchUpcomingMovies();
                    break;
                default:
                    return;
            }
            setMovies(data.results); // 영화 데이터를 상태에 저장
        };

        if (showMovies) {
            fetchMovies();
        }
    }, [category, showMovies]);

    const handleCardClick = (category) => {
        setCategory(category); // 카테고리 상태 변경
        setShowMovies(true); // 영화 목록 표시
    };

    return (
        <Container>
            {!showMovies && <Title>카테고리</Title>}
            <CategoryGrid style={{ display: showMovies ? 'none' : 'grid' }}>
                <CategoryCard onClick={() => handleCardClick('nowplaying')}>
                    <Image src={image1} alt="현재 상영중" />
                    <TextBox>현재 상영중</TextBox>
                </CategoryCard>
                <CategoryCard onClick={() => handleCardClick('popular')}>
                    <Image src={image2} alt="인기있는" />
                    <TextBox>인기있는</TextBox>
                </CategoryCard>
                <CategoryCard onClick={() => handleCardClick('toprated')}>
                    <Image src={image3} alt="높은 평가를 받은" />
                    <TextBox>높은 평가를 받은</TextBox>
                </CategoryCard>
                <CategoryCard onClick={() => handleCardClick('upcoming')}>
                    <Image src={image4} alt="개봉 예정인" />
                    <TextBox>개봉 예정인</TextBox>
                </CategoryCard>
            </CategoryGrid>

            {/* 선택된 카테고리의 영화 목록 표시 */}
            {showMovies && movies.length > 0 && (
                <MoviesList>
                    {movies.map(movie => (
                        <MovieCard key={movie.id}>
                            <MovieImage src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
                            <MovieTitle>{movie.title}</MovieTitle>
                            <ReleaseDate>{movie.release_date}</ReleaseDate> {/* 개봉일 추가 */}
                        </MovieCard>
                    ))}
                </MoviesList>
            )}
        </Container>
    );
};

const Container = styled.div`
    background-color: black; /* 배경색을 검은색으로 지정 */
    height: 100vh; /* 전체 화면 높이 차지 */
    width: 100%; /* 전체 화면 너비 차지 */
    display: flex; /* Flexbox로 정렬 */
    flex-direction: column; /* 세로 방향으로 정렬 */
    align-items: flex-start; /* 상단 정렬 */
    justify-content: flex-start; /* 왼쪽 정렬 */
    padding: 20px; /* 패딩 추가 */
`;

const Title = styled.h1`
    color: white; /* 제목 색상 */     
    margin-bottom: 40px; /* 카테고리와의 간격 */
    margin-left: 20px; /* 왼쪽 정렬 */
    margin-top:50px;
`;

const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4개의 열로 구성 */
    gap: 30px; /* 카드 간격 */
    margin-left: 20px; /* 전체 왼쪽 이동 */
    width: calc(100% - 40px); /* 그리드의 너비를 전체로 설정 (패딩 고려) */
`;

const CategoryCard = styled.div`
    background-color: #D9D9D9; /* 카드 배경색 */
    border-radius: 10px; /* 모서리 둥글게 */
    padding: 30px; /* 내부 패딩 */
    text-align: center; /* 텍스트 중앙 정렬 */
    height: 125px; /* 카드 높이 설정 */
    position: relative; /* 자식 요소의 위치를 상대적으로 설정 */
    cursor: pointer; /* 클릭 가능하게 표시 */
`;

const Image = styled.img`
    width: 100%; /* 카드 너비에 맞춤 */
    height: auto; /* 비율 유지 */
    border-radius: 10px; /* 모서리 둥글게 */
    position: absolute; /* 절대 위치 설정 */
    top: 0; /* 카드 상단에 위치 */
    left: 0; /* 카드 왼쪽에 위치 */
    z-index: -1; /* 이미지가 텍스트 박스 아래에 오도록 설정 */
`;

const TextBox = styled.div`
    background-color: rgba(0, 0, 0, 0.3); /* 텍스트 박스 배경색 */
    border-radius: 5px; /* 모서리 둥글게 */
    padding: 5px 0px; /* 내부 패딩 */
    color: white; /* 텍스트 색상 */
    font-weight: bold; /* 텍스트 두께 */
    display: inline-block; /* 텍스트 박스 크기 조정 */
    position: absolute; /* 절대 위치 설정 */
    bottom: 10px; /* 카드 아래쪽에 위치 */
    left: 10px; /* 카드 왼쪽에 위치 */
    width: 140px; /* 텍스트 박스 고정 너비 */
    height: 25px; /* 텍스트 박스 고정 높이 */
    text-align: center; /* 텍스트 중앙 정렬 */
`;

const MoviesList = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr); /* 8개의 열로 구성 */
    width: 100%; /* 전체 너비 */
    margin-top: 20px; /* 영화 목록과 카테고리 카드 사이의 간격 */
    padding: 0 20px; /* 양옆 패딩 추가 (필요에 따라 조정) */
`;

const MovieCard = styled.div`
    background-color: black; /* 카드 배경색 */
    border-radius: 10px; /* 모서리 둥글게 */
    text-align: center; /* 텍스트 중앙 정렬 */
    width: 80%; /* 카드 너비를 줄여서 양옆 간격을 줄임 */
    margin: 0 auto; /* 카드 중앙 정렬 */
`;

const MovieImage = styled.img`
    width: 100%; /* 카드 너비에 맞춤 */
    border-radius: 10px; /* 모서리 둥글게 */
`;

const MovieTitle = styled.div`
    padding: 5px;
    font-weight: bold;
    color: white; /* 텍스트 색상 */
`;

const ReleaseDate = styled.div`
    padding: 5px;
    font-size: 0.9rem; /* 폰트 크기 조정 */
    color: #bbb; /* 개봉일 색상 */
`;

export default Categories;

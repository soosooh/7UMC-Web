//피드백
//미션1의 components>movies>movieList.jsx파일에 link 이동 하는 코드가 필요한가 싶어요. 
//또한 movieItem.jsx도 link 이동하는 코드는 필요 없어보이고, 
//movieDetailBanner.jsx 파일도 필요 없어보여요!

//⇒ link 삭제했습니다. 
//⇒ 또한, movieList와 movieItem을 병합했습니다.
//⇒ movieDetailBanner은 삭제했지만 banner, CastItem, CastList로 분리했습니다. 
//유지 보수의 어려움으로 인해 분리했습니다.

import React from 'react';
import styled from 'styled-components';

const MoviesItem = styled.div`
    width: 170px;
    text-align: center;
    border-radius: 8px;
    margin: 10px;
`;

const MovieImage = styled.img`
    width: 170px;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
        filter: brightness(0.5);
        transform: scale(1.05);
    }
`;

const MovieItem = ({ posterPath, title, releaseDate }) => {
    return (
        <MoviesItem>
            <MovieImage
                src={`https://image.tmdb.org/t/p/w200${posterPath}`}
                alt={title}
            />
            <h3>{title}</h3>
            <p>{releaseDate}</p>
        </MoviesItem>
    );
};

export default MovieItem;


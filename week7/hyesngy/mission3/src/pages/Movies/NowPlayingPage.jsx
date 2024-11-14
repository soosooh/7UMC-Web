import React from 'react';
import MovieList from '../../components/Movies/MovieList';

const NowPlayingPage = () => {
    return (
        <div>
            <MovieList listType="now_playing" />
        </div>
    );
};

export default NowPlayingPage;
import React from 'react';
import List from '../../components/List';

const TopRated = () => {
    return (
        <List url={"movie/top_rated"} pagination={false} />
    );
};

export default TopRated;

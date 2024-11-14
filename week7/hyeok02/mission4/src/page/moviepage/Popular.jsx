import React from 'react';
import List from '../../components/List';

const Popular = () => {
    return (
        <List url={"movie/popular"} pagination={true} />
    );
};

export default Popular;

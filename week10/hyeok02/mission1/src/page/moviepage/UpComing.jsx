import React from 'react';
import List from '../../components/List';

const UpComing = () => {
    return (
        <List url={"movie/upcoming"} pagination={true} />
    );
};

export default UpComing;

import React from "react";
import styled from "styled-components";
import CastItem from "./castitem";


const CastList = ({ cast }) => {
    return (
        <Credits>
            {cast.map((credit) => (
                <CastItem key={credit.cast_id} credit={credit} />
            ))}
        </Credits>
    );
};

export default CastList;

const Credits = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;
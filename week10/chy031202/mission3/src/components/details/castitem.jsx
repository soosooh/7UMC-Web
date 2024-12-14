// components/CastItem.jsx

import styled from "styled-components";

const CastItem = ({ credit }) => {
    return (
        <CreList>
            <Portrait
                src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                alt={credit.name}
            />
            <p>
                <strong>{credit.name}</strong>
            </p>
            <p style={{ color: "gray" }}>{credit.character}</p>
        </CreList>
    );
};

export default CastItem;

const CreList = styled.li`
    width: 130px;
    height: auto;
    text-align: center;
`;

const Portrait = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #e0e0e0;
    display: inline-block;
`;

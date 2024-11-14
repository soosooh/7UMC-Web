import React from 'react';
import styled from 'styled-components';
import CreditItem from './CreditItem';

const CreditDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`

const CreditList = ({ movie }) => {
    console.log("🚀 ~ CreditList ~ movie:", movie)

    const director = movie.credits.crew.find((member) => member.job === 'Director');

    return (
        <CreditDiv>
            {director && (
                <CreditItem
                    role="감독"
                    name={director.name}
                    originalName={director.original_name}
                    profilePath={`https://image.tmdb.org/t/p/w185${director.profile_path}`}
                />
            )}

            {movie.credits.cast?.map((person) => (
                <CreditItem
                    key={person.id}
                    role="출연"
                    name={person.name}
                    originalName={person.original_name}
                    profilePath={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                />
            ))}
        </CreditDiv>
    );
};

export default CreditList;
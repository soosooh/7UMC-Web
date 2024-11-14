import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ movie }) => {
    const navigate = useNavigate();

    return (
        <Modata onClick={() => navigate(`/movies/${movie.id}`)}>
            <div>
            <Overview className='overview'>{movie.overview}</Overview>
                <Poster
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width="194px"
                    height="251.59px"
                />
                <Docs>
                    <TitleTag>
                        <Title>{movie.title}</Title>
                        <Releasedate>{movie.release_date}</Releasedate>
                    </TitleTag>
                    <Review>{movie.vote_average}</Review>
                </Docs>
                
            </div>
        </Modata>
    );
};

// Styled Components
const TitleTag = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`
    padding-left: 15px;
    width: 6em;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Releasedate = styled.span`
    padding-left: 15px;
    flex-grow: 1;
`;

const Review = styled.span`
    padding-right: 15px;
`;

const Docs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #383B67;
    color: white;
    width: 194px;
    height: 77.41px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const Poster = styled.img`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const Modata = styled.li`
    position: relative;
    float: left;
    margin-right:20px;
    margin-bottom:20px;
    
`;

const Overview = styled.p`
overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 7.3; 
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    width: 194px; 
    margin-right: 2vw;
    
`;

export default MovieItem;

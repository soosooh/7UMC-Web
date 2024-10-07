import styled from "styled-components";

const ListData = ({ movies }) => {
    return (
        <>
            <MovieLi className="movieLi">
                {movies.data?.results.map((movie) => (
                    <Modata key={movie.id}>
                        <div>
                            <Poster className='poster'
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                width='194px'
                                height='251.59px'
                            />
                            <Docs className='docs'>
                                <Title className='title'>{movie.title}</Title>
                                <Review className='review'>{movie.vote_average}</Review>
                            </Docs>

                            <p className='overview' >  {movie.overview} </p>

                        </div>
                    </Modata>
                ))}
            </MovieLi>
        </>
    );
};

const Title = styled.span`
    padding-left: 15px;
    width: 6em;
`

const Review = styled.span`
    padding-right: 15px;
`

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
`

const Poster = styled.img `
    margin: 0;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
`

const MovieLi = styled.ul `
list-style: none;
`

const Modata = styled.li `
position: relative;
    float: left;
    margin-right: 2vw;
    margin-bottom: 3vw;
`

export default ListData;
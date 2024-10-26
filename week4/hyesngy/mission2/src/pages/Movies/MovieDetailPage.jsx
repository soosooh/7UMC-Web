import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch';
import CreditItem from '../../components/CreditItem';

const PageContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content: center;
  padding: 3rem 10rem;
  flex-direction: column;
  gap: 3rem;
`
const PosterDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 50vh;
  border-radius: 10px;
  padding: 3rem;
  background-image: ${(props) => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 1;
  border-radius: 10px;
`;
const InfoDiv = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex:1;
`
const TitleP = styled.p`
  font-family: Inter;
  font-size: 2rem;
  font-weight: 800;
  line-height: 24.2px;
`
const DetailP = styled.p`
  font-family: Inter;
  font-size: 1rem;
  font-weight: 700;
  line-height: 16.94px;
`
const OriginalTitleP = styled(DetailP)`
  margin-bottom: 1.5rem;
`
const OverviewP = styled(DetailP)`
  margin-top: auto;
`
const CreditDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`

const MovieDetailPage = () => {
    const { movieId } = useParams();
    const { data: movie, isLoading, isError } = useCustomFetch(`/movie/${movieId}?language=ko-KR`)
    const { data: credits } = useCustomFetch(`movie/${movieId}/credits?language=ko-KR`)

    if (isLoading || !movie?.data || !credits?.data) {
        return <div>로딩 중 입니다...</div>;
    }
    if (isError) {
        return <div>에러 발생...</div>;
    }
    const director = credits.data.crew.find((member) => member.job === 'Director');

    return (
        <PageContainer>
            <PosterDiv backgroundImage={`https://image.tmdb.org/t/p/w500${movie.data.poster_path}`}>
                <Overlay />
                <InfoDiv>
                    <TitleP>{movie.data.title}</TitleP>
                    <OriginalTitleP>{movie.data.original_title}</OriginalTitleP>
                    <DetailP>{movie.data.release_date}</DetailP>
                    <DetailP>평균 {movie.data.vote_average}</DetailP>
                    <DetailP>{movie.data.runtime}분</DetailP>
                    <DetailP>{movie.data.tagline}</DetailP>
                    <OverviewP>{movie.data.overview}</OverviewP>
                </InfoDiv>
            </PosterDiv>
            <TitleP>감독/출연</TitleP>
            <CreditDiv>
                {director && (
                    <CreditItem
                        role="감독"
                        name={director.name}
                        originalName={director.original_name}
                        profilePath={director.profile_path}
                    />
                )}

                {credits.data.cast?.slice(0, 10).map((person) => (
                    <CreditItem
                        key={person.id}
                        role="출연"
                        name={person.name}
                        originalName={person.original_name}
                        profilePath={person.profile_path}
                    />
                ))}
            </CreditDiv>
        </PageContainer>
    );
};

export default MovieDetailPage;
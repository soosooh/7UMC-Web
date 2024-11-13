
import { useParams } from 'react-router-dom';
import { useMovieDetails } from '../../../hooks/useMovieDetails';
import Banner from '../../../components/detail/Banner';
import BannerSkeleton from '../../../components/detail/BannerSkeleton';
import CastList from '../../../components/detail/CastList';
import CastListSkeleton from '../../../components/detail/CastListSkeleton';

const MovieDetailPage = () => {
    const { movieId } = useParams();
    const { data: movieData, isLoading, isError } = useMovieDetails(movieId);

    if (isLoading) return (
        <div style={styles.loadingContainer}>
            <BannerSkeleton />
            <CastListSkeleton />
        </div>
    );

    if (isError) return <div>데이터를 불러오는 데 실패했습니다.</div>;

    const movie = movieData;
    const credits = movieData.credits;
    const director = credits.crew.find(member => member.job === 'Director');
    const topCast = credits.cast.slice(0, 20);

    return (
        <div style={styles.container}>
            <Banner movie={movie} />
            <CastList director={director} cast={topCast} />
        </div>
    );
};

export default MovieDetailPage;

const styles = {
    container: {
        color: 'white',
        backgroundColor: '#ffffffffff',
        padding: '20px',
        textAlign: 'center',
    },
    loadingContainer: {
        color: 'white',
        textAlign: 'center',
        marginTop: '50px',
    },
};


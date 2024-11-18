import ListMovie from "../../components/movies/list-movie";

const NowPlayingPage = () => {
    return (
        <div className="outletContainer">
            <ListMovie url={"/movie/now_playing"}/>
        </div>
    )
}

export default NowPlayingPage;
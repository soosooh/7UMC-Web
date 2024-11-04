import ListMovie from "../../components/movies/list-movie";

const NowPlayingPage = () => {
    return (
        <div className="outletContainer">
            <ListMovie url={"now_playing"}/>
        </div>
    )
}

export default NowPlayingPage;
import ListMovie from "../../components/movies/list-movie";

const UpComingPage = () => {
    return (
        <div className="outletContainer">
            <ListMovie url={"/movie/upcoming"}/>
        </div>
    )
}

export default UpComingPage;
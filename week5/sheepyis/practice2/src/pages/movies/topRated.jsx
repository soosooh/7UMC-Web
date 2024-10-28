import ListMovie from "../../components/movies/list-movie";

const TopRatedPage = () => {
    return (
        <div className="outletContainer">
            <ListMovie url={"top_rated"}/>
        </div>
    )
}

export default TopRatedPage;
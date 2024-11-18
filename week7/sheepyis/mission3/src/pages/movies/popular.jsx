import ListMovie from "../../components/movies/list-movie";

const PopularPage = () => {
    return (
        <div className="outletContainer">
            <ListMovie url={"/movie/popular"}/>
        </div>
    )
}

export default PopularPage;
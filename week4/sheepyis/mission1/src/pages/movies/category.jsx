import ListCategory from "../../components/movies/list-category";
import useFetch from "../../hooks/useFetch";

const CategoryPage = () => {
    const { data, loading, error } = useFetch();

    if (loading) return <div className="outletContainer" style={{textAlign: "center"}}>카테고리 로딩 중...</div>;
    if (error) return <div className="outletContainer" style={{textAlign: "center"}}>로딩 중 오류가 발생했습니다.</div>;

    return (
        <div className="outletContainer">
            <p id="pageTitle">영화 페이지</p>

            <ListCategory data={data} />
        </div>
    );
}

export default CategoryPage;

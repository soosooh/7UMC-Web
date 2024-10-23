import ListCategory from "../../components/movies/list-category";
import useCategory from "../../hooks/useCategory";

const CategoryPage = () => {
    const { categories, loading, error } = useCategory();

    if (loading) return <div className="outletContainer" style={{textAlign: "center"}}>카테고리 로딩 중...</div>;
    if (error) return <div className="outletContainer" style={{textAlign: "center"}}>로딩 중 오류가 발생했습니다.</div>;

    return (
        <div className="outletContainer">
            <p id="pageTitle">영화 페이지</p>

            <ListCategory data={categories} />
        </div>
    );
}

export default CategoryPage;

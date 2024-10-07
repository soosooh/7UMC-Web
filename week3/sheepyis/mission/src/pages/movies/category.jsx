import ListCategory from '../../components/movies/list-category';
import CategoryData from "../../utils/categoryData";

const CategoryPage = () => {
    return (
        <div className="outletContainer">
            <p id="pageTitle">영화 페이지</p>
            
            <ListCategory data={CategoryData} />
        </div>
    )
}

export default CategoryPage;
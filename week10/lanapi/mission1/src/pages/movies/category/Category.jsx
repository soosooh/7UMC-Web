import styled from 'styled-components';
import CardContainer from "../../../components/movies/CardContainer";
import CategoryCard from "../../../components/category/CategoryCard";

import categoryImg1 from '/src/assets/category_img1.jpg';
import categoryImg2 from '/src/assets/category_img2.jpg';
import categoryImg3 from '/src/assets/category_img3.jpg';
import categoryImg4 from '/src/assets/category_img4.jpg';

const categories = [
    { routeLink: '/movies/now-playing', imgURL: categoryImg1, title: '현재 상영중인 영화' },
    { routeLink: '/movies/popular', imgURL: categoryImg2, title: '인기 있는 영화' },
    { routeLink: '/movies/top-rated', imgURL: categoryImg3, title: '높은 평가를 받은 영화' },
    { routeLink: '/movies/up-coming', imgURL: categoryImg4, title: '개봉 예정 영화' },
];

const Category = () => {
    return (
        <CategoryWrapper>
            <WhiteHeading>카테고리</WhiteHeading>
            <CardContainer>
                {categories.map((category, index) => (
                    <CategoryCard
                        key={index}
                        routeLink={category.routeLink}
                        imgURL={category.imgURL}
                        title={category.title}
                    />
                ))}
            </CardContainer>
        </CategoryWrapper>
    );
};

export default Category;

const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
    color: white;
`;

const WhiteHeading = styled.h1`
    color: white;
    font-size: 2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

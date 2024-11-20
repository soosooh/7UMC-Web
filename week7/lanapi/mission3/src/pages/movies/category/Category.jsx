import styled from 'styled-components';
import CardContainer from "../../../components/movies/CardContainer";
import CategoryCard from "../../../components/category/CategoryCard";

import categoryImg1 from '/src/assets/category_img1.jpg';
import categoryImg2 from '/src/assets/category_img2.jpg';
import categoryImg3 from '/src/assets/category_img3.jpg';
import categoryImg4 from '/src/assets/category_img4.jpg';

const categories = [
    { routeLink: '/movies/now-playing', imgURL: categoryImg1, title: '현재 상영중인' },
    { routeLink: '/movies/popular', imgURL: categoryImg2, title: '인기있는' },
    { routeLink: '/movies/top-rated', imgURL: categoryImg3, title: '높은 평가를 받은' },
    { routeLink: '/movies/up-coming', imgURL: categoryImg4, title: '개봉 예정인' },
];

const Category = () => {
    return (
        <>
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
        </>
    );
};

export default Category;

const WhiteHeading = styled.h1`
    color: white;
`;

import styled from 'styled-components';
import CardContainer from "../../components/CardContainer";
import CategoryCard from "../../components/CategoryCard";

import categoryImg1 from '/src/assets/category_img1.jpg';
import categoryImg2 from '/src/assets/category_img2.jpg';
import categoryImg3 from '/src/assets/category_img3.jpg';
import categoryImg4 from '/src/assets/category_img4.jpg';

const Category = () => {
    return (
        <>
            <WhiteHeading>카테고리</WhiteHeading>
            <CardContainer>
                <CategoryCard 
                    routeLink={'/movies/now-playing'}
                    imgURL={categoryImg1}
                    title={'현재 상영중인'}
                />
                <CategoryCard 
                    routeLink={'/movies/popular'}
                    imgURL={categoryImg2}
                    title={'인기있는'}
                />
                <CategoryCard 
                    routeLink={'/movies/top-rated'}
                    imgURL={categoryImg3}
                    title={'높은 평가를 받은'}
                />
                <CategoryCard 
                    routeLink={'/movies/up-coming'}
                    imgURL={categoryImg4}
                    title={'개봉 예정인'}
                />
            </CardContainer>
        </>
    );
};

export default Category;

const WhiteHeading = styled.h1`
    color: white;
`;
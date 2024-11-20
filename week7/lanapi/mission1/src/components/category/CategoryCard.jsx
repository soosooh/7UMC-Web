import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryCard = ({ routeLink, imgURL, title }) => (
  <StyledRouterLink to={routeLink}>
    <CategoryCardDiv url={imgURL}>
      <CategoryTitle>{title}</CategoryTitle>
    </CategoryCardDiv>
  </StyledRouterLink>
);

export default CategoryCard;

const CategoryCardDiv = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 0.6em;
  overflow: hidden;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;
  margin-bottom: 15px;
  transition: background-size 0.3s ease;

  &:hover {
    background-size: 320px;
  }

  /* 반응형 스타일 */
  @media (max-width: 768px) {
    width: 250px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 120px;
  }
`;

const CategoryTitle = styled.div`
  background-color: rgba(0, 0, 0, 0.67);
  color: white;
  font-size: 0.8em;
  display: inline-block;
  padding: 5px;
  border-radius: 0.3em;
  position: absolute;
  bottom: 7px;
  left: 15px;

  /* 반응형 스타일 */
  @media (max-width: 768px) {
    font-size: 0.7em;
    padding: 4px;
  }

  @media (max-width: 480px) {
    font-size: 0.6em;
    padding: 3px;
  }
`;

const StyledRouterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const CategoryCard = ({ routeLink, imgURL, title }) => (
//   <StyledRouterLink to={routeLink}>
//     <CategoryCardDiv url={imgURL}>
//       <CategoryTitle>{title}</CategoryTitle>
//     </CategoryCardDiv>
//   </StyledRouterLink>
// );

// export default CategoryCard;

// const CategoryCardDiv = styled.div`
//   width: 300px;
//   height: 200px;
//   background-color: white;
//   border-radius: 0.6em;
//   overflow: hidden;
//   background-image: url(${props => props.url});
//   background-size: cover;
//   background-position: center;
//   cursor: pointer;
//   &:hover {
//     background-size: 320px;
//     font-size: 1.03em;
//   }
//   position: relative;
//   margin-bottom: 15px;
// `;

// const CategoryTitle = styled.div`
//   background-color: rgba(0, 0, 0, 0.67);
//   color: white;
//   font-size: 0.8em;
//   display: inline-block;
//   padding: 5px;
//   border-radius: 0.3em;
//   position: absolute;
//   bottom: 7px;
//   left: 15px;
// `;

// const StyledRouterLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
//   display: block;
// `;

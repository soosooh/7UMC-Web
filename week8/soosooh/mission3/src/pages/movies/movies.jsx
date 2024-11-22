import { Link } from "react-router-dom";
import styled from "styled-components";
import nowImg from "../../assets/images/image1.png";
import popularImg from "../../assets/images/image2.png";
import topImg from "../../assets/images/image3.png";
import comingImg from "../../assets/images/image4.png";
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  margin-left: 35px;
  color: white;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 277px;
  height: 171px;
  border-radius: 10px;
  overflow: hidden;
  margin-left: 30px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  text {
    background: ;
  }
`;
const CardTitle = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 4px;
`;
const Movies = () => {
  return (
    <MovieContainer>
      <Title>카테고리</Title>
      <CardContainer>
        <ImageContainer>
          <Link to="/movies/now-playing">
            <img src={nowImg} alt="nowImg" />
            <CardTitle>현재 상영중인</CardTitle>
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to="/movies/popular">
            <img src={popularImg} alt="popularImg" />
            <CardTitle>인기있는</CardTitle>
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to="/movies/top-rated">
            <img src={topImg} alt="topImg" />
            <CardTitle>높은 평가를 받은</CardTitle>
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to="/movies/up-coming">
            <img src={comingImg} alt="comingImg" />
            <CardTitle>개봉 예정중인</CardTitle>
          </Link>
        </ImageContainer>
      </CardContainer>
    </MovieContainer>
  );
};

export default Movies;

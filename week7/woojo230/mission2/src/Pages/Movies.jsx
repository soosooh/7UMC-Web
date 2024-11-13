import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.div``;

const Card = styled.div``;

const Category = styled.div`
  color: white;
  font-size: 1.7rem;
  margin: 10px;
`;

const CategoryCard = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px;
  flex-wrap: wrap;
`;

const Card1 = styled.div`
  background-color: red;
  width: 300px; /* 카드의 너비 */
  height: 150px; /* 카드의 높이 */
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 아래쪽으로 정렬 */
  align-items: flex-start; /* 왼쪽으로 정렬 */
  padding: 3px; /* 텍스트와 카드 가장자리 사이에 여백 */
`;

const Card2 = styled(Card1)`
  background-color: blue;
`;

const Card3 = styled(Card1)`
  background-color: white;
`;

const Card4 = styled(Card1)`
  background-color: purple;
`;

const Text = styled.div`
  background-color: rgba(0, 0, 0, 0.7); /* 반투명한 배경 */
  position: absolute;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  padding: 3px;
`;

const Movies = () => {
  return (
    <>
      <Container>
        <TextBox>
          <Category>카테고리</Category>
        </TextBox>
        <Card>
          <CategoryCard>
            <Link to="/movies/NowPlaying">
              <Card1>
                <Text>현재 상영중인</Text>
              </Card1>
            </Link>
            <Link to="/movies/Popular">
              <Card2>
                <Text>인기 있는</Text>
              </Card2>
            </Link>
            <Link to="/movies/TopRated">
              <Card3>
                <Text>높은 평가를 받은</Text>
              </Card3>
            </Link>
            <Link to="/movies/UpComing">
              <Card4>
                <Text>개봉 예정중인</Text>
              </Card4>
            </Link>
          </CategoryCard>
        </Card>
      </Container>
    </>
  );
};

export default Movies;

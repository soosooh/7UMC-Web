import styled from "styled-components";

const CardContainer = styled.div`
  width: 130px;
  margin-left: 10px;
`;
const ProfileImage = styled.div`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
  background-color: black;
  background-image: ${({ src }) => (src ? `url(${src})` : "none")};
  background-size: cover;
  background-position: center;
  border: 2px solid white;
`;
const PContainer = styled.div`
  flex-direction: column;
`;
const StyledP = styled.p`
  font-size: 12px;
`;
const CreditCard = ({ profile_path, original_name, character }) => {
  const imageUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : null; // src가 없을 때 빈 문자열

  return (
    <CardContainer>
      <ProfileImage src={imageUrl} />
      <PContainer>
        <StyledP>{original_name}</StyledP>
        <StyledP>{character}</StyledP>
      </PContainer>
    </CardContainer>
  );
};

export default CreditCard;

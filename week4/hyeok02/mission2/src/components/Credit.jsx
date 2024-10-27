import styled from 'styled-components';

const CastCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8rem;
  padding: 1rem;
  text-align: center;
`;

const ProfilePicture = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

const RoleText = styled.span`
  display: block;
  font-family: Inter;
  font-size: 0.75rem;
  font-weight: 700;
  color: #ddd;
  margin: 0.3rem 0;
`;

const NameText = styled.p`
  font-family: Inter;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1;
`;

const OriginalNameText = styled(RoleText)`
  margin-top: 0.2rem;
`;

const Credit = ({ role, name, originalName, profilePath }) => {
    const imageUrl = profilePath ? `https://image.tmdb.org/t/p/w185${profilePath}` : '/default-avatar.png';
    const displayRole = role && role.length > 0 ? role : '직책 정보 없음';
    const displayName = name || '이름 정보 없음';
    const displayOriginalName = originalName && originalName.length > 0 ? originalName : '원래 이름 정보 없음';
  
    return (
      <CastCardWrapper>
        <ProfilePicture src={imageUrl} alt={`${displayName}의 사진`} />
        <RoleText>{displayRole}</RoleText>
        <NameText>{displayName}</NameText>
        {originalName && <OriginalNameText>{displayOriginalName}</OriginalNameText>}
      </CastCardWrapper>
    );
  };
  
  export default Credit;
  

import Map from '../../components/map'; 
import styled from '@emotion/styled';

const MapPageContainer = styled.div`
  padding: 20px;
  margin-left: 240px;
`;

const MapPage = () => {
  return (
    <MapPageContainer>
      <Map />
    </MapPageContainer>
  );
};

export default MapPage;
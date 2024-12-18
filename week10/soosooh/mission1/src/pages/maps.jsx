import Map from "../components/map";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 20px;
  color: white;
  margin-left: 20px;
`;

const MapsPage = () => {
  return (
    <MapContainer>
      <Title>지도 페이지</Title>
      <Map />
    </MapContainer>
  );
};

export default MapsPage;

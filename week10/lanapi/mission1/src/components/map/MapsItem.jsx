import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import styled from 'styled-components';

const MapsItem = () => {
  const mapRef = useRef(null);
  const [theaters, setTheaters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleApiKey = import.meta.env.VITE_GOOGLE_TOKEN;

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: googleApiKey,
          version: 'weekly',
          libraries: ['places']
        });

        await loader.load();

        if (window.google && window.google.maps) {
          const location = { 
            lat: 37.630442, 
            lng: 126.8319892 
          };

          if (mapRef.current) {
            const map = new window.google.maps.Map(mapRef.current, {
              center: location,
              zoom: 13
            });

            const service = new window.google.maps.places.PlacesService(map);
            
            service.nearbySearch(
              {
                location: location,
                radius: 5000,
                type: ['movie_theater']
              },
              (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                  setTheaters(results);
                } else {
                  setError(`영화관을 찾을 수 없습니다: ${status}`);
                }
                setLoading(false);
              }
            );
          }
        }
      } catch (err) {
        console.error("지도 로딩 중 오류 발생:", err);
        setError('지도를 로드하는 중 오류가 발생했습니다.');
        setLoading(false);
      }
    };

    initMap();
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <LoadingText>영화관 정보를 불러오는 중입니다...</LoadingText>
      </LoadingContainer>
    );
  }

  if (error) {
    return <ErrorMessage>오류: {error}</ErrorMessage>;
  }

  return (
    <Container>
      <MapContainer ref={mapRef} />
      
      <TheaterList>
        <h4>근처 영화관 목록</h4>
        {theaters.length > 0 ? (
          theaters.map((theater) => (
            <TheaterItem key={theater.place_id}>
              <h5>{theater.name}</h5>
              <p>{theater.vicinity}</p>
            </TheaterItem>
          ))
        ) : (
          <NoTheatersMessage>주변에 영화관이 없습니다.</NoTheatersMessage>
        )}
      </TheaterList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
  margin-bottom: 20px;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

const TheaterList = styled.div`
  margin-top: 20px;
`;

const TheaterItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 5px;

  h5 {
    margin: 0 0 10px 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: #555;
  }
`;

const NoTheatersMessage = styled.p`
  text-align: center;
  color: #888;
`;

export default MapsItem;
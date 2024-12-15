import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import styled from '@emotion/styled';

const MapContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
`;

const InfoWindowContent = styled.div`
  padding: 10px;
  
  h3 {
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: bold;
  }
  
  p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }
`;

const TheaterMap = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [theaters, setTheaters] = useState([]);
  const [selectedTheater, setSelectedTheater] = useState(null);

  useEffect(() => {
    // 현재 위치 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentPosition(pos);
          searchNearbyTheaters(pos);
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
    }
  }, []);

  const searchNearbyTheaters = async (location) => {
    try {
      // Google Places API를 사용하여 주변 영화관 검색
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      
      const request = {
        location: new window.google.maps.LatLng(location.lat, location.lng),
        radius: '5000', // 5km 반경
        type: ['movie_theater']
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setTheaters(results);
        }
      });
    } catch (error) {
      console.error('Theater search error:', error);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_TOKEN}
      libraries={['places']}
    >
      <MapContainer>
        {currentPosition && (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={currentPosition}
            zoom={14}
          >
            {/* 현재 위치 마커 */}
            <Marker
              position={currentPosition}
              icon={{
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
              }}
            />

            {/* 영화관 마커들 */}
            {theaters.map((theater) => (
              <Marker
                key={theater.place_id}
                position={{
                  lat: theater.geometry.location.lat(),
                  lng: theater.geometry.location.lng()
                }}
                icon={{
                  url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                }}
                onClick={() => setSelectedTheater(theater)}
              />
            ))}

            {/* 선택된 영화관 정보창 */}
            {selectedTheater && (
              <InfoWindow
                position={{
                  lat: selectedTheater.geometry.location.lat(),
                  lng: selectedTheater.geometry.location.lng()
                }}
                onCloseClick={() => setSelectedTheater(null)}
              >
                <InfoWindowContent>
                  <h3>{selectedTheater.name}</h3>
                  <p>{selectedTheater.vicinity}</p>
                </InfoWindowContent>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </MapContainer>
    </LoadScript>
  );
};

export default TheaterMap;
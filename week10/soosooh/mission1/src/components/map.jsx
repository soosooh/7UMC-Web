import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import styled from "styled-components";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const MapContainer = styled.div`
  width: 100vw;
`;

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_TOKEN, // 환경 변수에서 API 키 로드
    libraries: ["places"], // Places API 사용
  });

  const [currentPosition, setCurrentPosition] = useState(null); // 현재 위치
  const [cinemas, setCinemas] = useState([]); // 근처 영화관 데이터
  const [selectedCinema, setSelectedCinema] = useState(null); // 선택된 영화관 정보

  // 현재 위치 가져오기
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      () => {
        alert("현재 위치를 가져올 수 없습니다.");
      }
    );
  }, []);

  // 영화관 검색 (현재 위치가 설정된 후 호출)
  useEffect(() => {
    if (isLoaded && currentPosition) {
      fetchNearbyCinemas(currentPosition.lat, currentPosition.lng);
    }
  }, [isLoaded, currentPosition]);

  // 근처 영화관 검색
  const fetchNearbyCinemas = (lat, lng) => {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps API가 로드되지 않았습니다.");
      return;
    }

    const map = new window.google.maps.Map(document.createElement("div")); // 가상 맵 객체 생성
    const service = new window.google.maps.places.PlacesService(map);

    const location = new window.google.maps.LatLng(lat, lng);
    const request = {
      location,
      radius: 5000, // 5km 반경
      type: "movie_theater",
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setCinemas(results);
      } else {
        console.error("영화관 데이터를 가져올 수 없습니다.", status);
      }
    });
  };

  if (loadError) return <div>지도를 로드하는 중 오류가 발생했습니다.</div>;
  if (!isLoaded) return <div>지도를 로드하는 중...</div>;

  return (
    <MapContainer>
      {currentPosition ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={14}
        >
          {/* 현재 위치 표시 (파란색 마커) */}
          <Marker
            position={currentPosition}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
          />

          {/* 영화관 마커 표시 */}
          {cinemas.map((cinema) => (
            <Marker
              key={cinema.place_id}
              position={{
                lat: cinema.geometry.location.lat(),
                lng: cinema.geometry.location.lng(),
              }}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              }}
              onClick={() => setSelectedCinema(cinema)}
            />
          ))}

          {/* 영화관 정보 창 */}
          {selectedCinema && (
            <InfoWindow
              position={{
                lat: selectedCinema.geometry.location.lat(),
                lng: selectedCinema.geometry.location.lng(),
              }}
              onCloseClick={() => setSelectedCinema(null)}
            >
              <div
                style={{
                  color: "black",
                  backgroundColor: "white",
                  padding: "10px",
                }}
              >
                <h4>{selectedCinema.name}</h4>
                <p>{selectedCinema.vicinity}</p> {/* 주소 정보 */}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        <div>현재 위치를 가져오는 중...</div>
      )}
    </MapContainer>
  );
};

export default Map;

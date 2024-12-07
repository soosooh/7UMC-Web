import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import styled from "styled-components";

const MarkerBox = styled.div`
    width: 100%;
    height: 100%;
`

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState(null);
  
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  // 현재 위치
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
          alert("위치 권한을 확인해주세요.");
        }
      );
    }
  }, []);

  // 영화관
  useEffect(() => {
    if (!currentPosition) return;

    const fetchNearbyCinemas = async () => {
      const service = new window.google.maps.places.PlacesService(document.createElement("div"));
      const request = {
        location: new window.google.maps.LatLng(currentPosition.lat, currentPosition.lng),
        radius: 5000,
        type: "movie_theater",
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setCinemas(results);
        } else {
          console.error("영화관 정보를 가져올 수 없습니다:", status);
        }
      });
    };

    fetchNearbyCinemas();
  }, [currentPosition]);

  return (
    currentPosition ? (
      <GoogleMap mapContainerStyle={mapContainerStyle} center={currentPosition} zoom={14}>
        <Marker position={currentPosition} icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" />
        
        {cinemas.map((cinema) => (
          <Marker key={cinema.place_id} position={cinema.geometry.location} icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png" onClick={() => setSelectedCinema(cinema)} />
        ))}

        {selectedCinema && (
          <InfoWindow position={selectedCinema.geometry.location} onCloseClick={() => setSelectedCinema(null)}>
            <MarkerBox>
              <p id="pageTitle" style={{color: "blue"}}>{selectedCinema.name}</p>
              <p id="pageTitle" style={{color: "black"}}>{selectedCinema.vicinity}</p>
            </MarkerBox>
          </InfoWindow>
        )}
      </GoogleMap>
    ) : (
      <p id="pageTitle">로딩 중...</p>
    )
  );
};

export default Map;

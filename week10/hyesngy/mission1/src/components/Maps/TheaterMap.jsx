import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import styled from 'styled-components';
import Spinner from '../spinner';

const MapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: black;
`;

const containerStyle = {
  width: '80vw',
  height: '75vh',
  maxHeight: '600px',
};

const defaultPosition = {
  lat: 37.5665,
  lng: 126.9780,
};

const libraries = ['places'];

const TheaterMap = () => {
  const googleAPI = import.meta.env.VITE_GOOGLE_TOKEN;
  const [currentPosition, setCurrentPosition] = useState(defaultPosition);
  const [theaters, setTheaters] = useState([]);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentPosition(pos);
        setIsLoading(false);
      },
      () => setIsLoading(false)
    );
  }, []);

  const searchNearbyTheaters = (map, maps) => {
    const service = new maps.places.PlacesService(map);
    service.nearbySearch({
      location: currentPosition,
      radius: 5000,
      type: 'movie_theater'
    }, (results, status) => {
      if (status === maps.places.PlacesServiceStatus.OK) {
        setTheaters(results);
      }
    });
  };

  if (isLoading) return <Spinner />;

  return (
    <MapContainer>
      <LoadScript googleMapsApiKey={googleAPI} libraries={libraries}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={14}
          onLoad={(map) => searchNearbyTheaters(map, window.google.maps)}
        >


          {theaters.map((theater) => (
            <React.Fragment key={theater.place_id}>
              <Marker
                key="current-location"
                position={currentPosition}
                icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
              />

              <Marker
                key={theater.place_id}
                position={{
                  lat: theater.geometry.location.lat(),
                  lng: theater.geometry.location.lng()
                }}
                onClick={() => setSelectedTheater(theater)}
                icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' }}
              />
            </React.Fragment>
          ))}

          {selectedTheater && (
            <InfoWindow
              position={{
                lat: selectedTheater.geometry.location.lat(),
                lng: selectedTheater.geometry.location.lng()
              }}
              onCloseClick={() => setSelectedTheater(null)}
            >
              <div>
                <h3>{selectedTheater.name}</h3>
                <p>{selectedTheater.vicinity}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </MapContainer>
  );
};

export default TheaterMap;
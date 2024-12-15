import React, { useState, useEffect, useCallback } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindowF,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const TheaterMap = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [theaters, setTheaters] = useState([]);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_TOKEN,
    libraries: ['places'],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentPosition(location);
      },
      (error) => console.error('위치를 가져오는 중 오류 발생:', error),
      { enableHighAccuracy: true }
    );
  }, []);

  const fetchNearbyTheaters = useCallback(() => {
    if (map && currentPosition) {
      const service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(
        {
          location: currentPosition,
          radius: 5000,
          type: 'movie_theater',
          language: 'ko',
        },
        (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            const theatersWithLocation = results.map((theater) => ({
              id: theater.place_id,
              name: theater.name,
              vicinity: theater.vicinity,
              position: {
                lat: theater.geometry.location.lat(),
                lng: theater.geometry.location.lng(),
              },
            }));
            setTheaters(theatersWithLocation);
          }
        }
      );
    }
  }, [map, currentPosition]);

  const handleMarkerClick = useCallback(
    (theater) => {
      if (map && window.google) {
        const service = new window.google.maps.places.PlacesService(map);
        service.getDetails(
          {
            placeId: theater.id,
            fields: [
              'name',
              'formatted_address',
              'rating',
              'formatted_phone_number',
              'geometry',
            ],
            language: 'ko',
          },
          (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              setSelectedTheater({
                id: theater.id,
                name: place.name || theater.name,
                vicinity: place.formatted_address || theater.vicinity,
                position: {
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng(),
                },
              });
            }
          }
        );
      }
    },
    [map]
  );

  useEffect(() => {
    if (isLoaded && map) {
      fetchNearbyTheaters();
    }
  }, [isLoaded, map, fetchNearbyTheaters]);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  if (!isLoaded) return <div>지도를 불러오는 중...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentPosition}
      zoom={14}
      onLoad={onLoad}
    >
      {currentPosition && (
        <Marker
          position={currentPosition}
          icon={{
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          }}
        />
      )}

      {theaters.map((theater) => (
        <Marker
          key={theater.id}
          position={theater.position}
          onClick={() => handleMarkerClick(theater)}
          icon={{
            url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          }}
          label={{
            color: 'black',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        />
      ))}

      {selectedTheater && (
        <InfoWindowF
          position={selectedTheater.position}
          onCloseClick={() => setSelectedTheater(null)}
        >
          <div style={{ padding: '10px', minWidth: '100px' }}>
            <p style={{ margin: '5px 0', color: 'blue', fontWeight: 'bold' }}>
              {selectedTheater.name}
            </p>
            <p style={{ margin: '5px 0', color: '#666' }}>
              {selectedTheater.vicinity}
            </p>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default React.memo(TheaterMap);

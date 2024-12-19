import React, { useEffect, useState } from 'react';

const Map = () => {
    const [map, setMap] = useState(null);
    const [currentPosition, setCurrentPosition] = useState(null);
    const MAP_API_KEY = import.meta.env.VITE_MAP_API_KEY;

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
                    console.error('Error fetching location:', error);
                }
            );
        }
    }, []);

    useEffect(() => {
        if (currentPosition) {
            if (!window.google) {
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&callback=initMap&libraries=places`;
                script.async = true;
                window.initMap = initMap;
                document.body.appendChild(script);
            } else {
                initMap();
            }

            function initMap() {
                if (!window.google || !window.google.maps) {
                    console.error('Google Maps API가 로드되지 않았습니다.');
                    return;
                }

                const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
                    center: currentPosition,
                    zoom: 14,
                });
                setMap(mapInstance);

                new window.google.maps.Marker({
                    position: currentPosition,
                    map: mapInstance,
                    title: '현재 위치',
                });

                findNearbyCinemas(mapInstance);
            }

            function findNearbyCinemas(mapInstance) {
                if (!window.google || !window.google.maps || !window.google.maps.places) {
                    console.error('Places API가 로드되지 않았습니다.');
                    return;
                }

                const service = new window.google.maps.places.PlacesService(mapInstance);
                const request = {
                    location: currentPosition,
                    radius: 5000,
                    type: ['movie_theater'],
                };

                service.nearbySearch(request, (results, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        results.forEach((place) => {
                            const marker = new window.google.maps.Marker({
                                position: place.geometry.location,
                                map: mapInstance,
                                title: place.name,
                                icon: {
                                    url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                                },
                            });

                            const infoWindow = new window.google.maps.InfoWindow({
                                content: `<div><h3>${place.name}</h3><p>${place.vicinity}</p></div>`,
                            });

                            marker.addListener('click', () => {
                                infoWindow.open(mapInstance, marker);
                            });
                        });
                    } else {
                        console.error('Error fetching nearby places:', status);
                    }
                });
            }
        }
    }, [currentPosition, MAP_API_KEY]);

    return (
        <div>
            <h1>지도</h1>
            <div id="map" style={{ width: '800px', height: '500px' }}></div>
        </div>
    );
};

export default Map;

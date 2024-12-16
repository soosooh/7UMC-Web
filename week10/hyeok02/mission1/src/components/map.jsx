import React, { useEffect, useState } from 'react';

const Map = () => {
    const [map, setMap] = useState(null);
    const [currentPosition, setCurrentPosition] = useState(null);
    const MAP_API_KEY = import.meta.env.MAP_API_KEY;
    

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
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&callback=initMap`;
            script.async = true;
            window.initMap = () => {
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

                const theaters = [
                    { name: '영화관 A', address: '주소 A', lat: currentPosition.lat + 0.02, lng: currentPosition.lng + 0.02 },
                    { name: '영화관 B', address: '주소 B', lat: currentPosition.lat - 0.02, lng: currentPosition.lng - 0.02 },
                ];

                theaters.forEach((theater) => {
                    const marker = new window.google.maps.Marker({
                        position: { lat: theater.lat, lng: theater.lng },
                        map: mapInstance,
                        title: theater.name,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                    });

                    const infoWindow = new window.google.maps.InfoWindow({
                        content: `<div><h3>${theater.name}</h3><p>${theater.address}</p></div>`,
                    });

                    marker.addListener('click', () => {
                        infoWindow.open(mapInstance, marker);
                    });
                });
            };
            document.body.appendChild(script);
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

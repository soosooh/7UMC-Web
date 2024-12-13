import React, { useRef, useEffect } from 'react';

function MapsItem() {
 const mapRef = useRef(null);

 useEffect(() => {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(
       (position) => {
         const userLocation = {
           lat: position.coords.latitude,
           lng: position.coords.longitude
         };

         const map = new window.google.maps.Map(mapRef.current, {
           center: userLocation,
           zoom: 13
         });

         const service = new window.google.maps.places.PlacesService(map);
         service.nearbySearch(
           {
             location: userLocation,
             radius: 5000,
             type: ['movie_theater']
           },
           (results, status) => {
             if (status === window.google.maps.places.PlacesServiceStatus.OK) {
               results.forEach(place => {
                 const marker = new window.google.maps.Marker({
                   map: map,
                   position: place.geometry.location,
                   title: place.name,
                   icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                 });

                 const infoWindow = new window.google.maps.InfoWindow({
                   content: `
                     <div>
                       <h3>${place.name}</h3>
                       <p>${place.vicinity}</p>
                     </div>
                   `
                 });

                 marker.addListener('click', () => {
                   infoWindow.open(map, marker);
                 });
               });
             }
           }
         );
       },
       (error) => {
         console.error("지도를 검색하는 과정에서 오류가 발생했습니다! 다시 시도해주세요. ", error);
       }
     );
   } else {
     console.error("이 브라우저에서는 해당 서비스가 지원되지 않습니다.");
   }
 }, []);

 return <div ref={mapRef} style={{ width: '100%', height: '600px' }} />;
}

export default MapsItem;
